import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, X, Maximize2, Minimize2, CheckCircle2, XCircle } from 'lucide-react';
import { colorSchemes } from '../utils/colorSchemes';

const SlidePresentation = ({ slides, courseColor, onClose, moduleTitle }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [examAnswers, setExamAnswers] = useState({});
  const [examSubmitted, setExamSubmitted] = useState(false);
  const [examScore, setExamScore] = useState(null);

  const colors = colorSchemes[courseColor] || colorSchemes.tangerine;

  const goToNext = useCallback(() => {
    setCurrentSlide((prev) => {
      if (prev < slides.length - 1) {
        return prev + 1;
      }
      return prev;
    });
  }, [slides.length]);

  const goToPrevious = useCallback(() => {
    setCurrentSlide((prev) => {
      if (prev > 0) {
        return prev - 1;
      }
      return prev;
    });
  }, []);

  const toggleFullscreen = useCallback(() => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  }, []);

  // Handle exam answer selection
  const handleExamAnswer = (questionId, answer) => {
    if (examSubmitted) return; // Don't allow changes after submission
    setExamAnswers(prev => ({
      ...prev,
      [questionId]: answer
    }));
  };

  // Calculate exam score
  const calculateExamScore = (examSlide) => {
    if (!examSlide.questions) return null;

    let correctCount = 0;
    const totalQuestions = examSlide.questions.filter(q => q.type !== 'code').length; // Exclude code questions from auto-scoring

    examSlide.questions.forEach(question => {
      if (question.type === 'code') return; // Skip code questions

      const userAnswer = examAnswers[question.id];
      if (userAnswer !== undefined && userAnswer === question.correctAnswer) {
        correctCount++;
      }
    });

    const percentage = totalQuestions > 0 ? Math.round((correctCount / totalQuestions) * 100) : 0;
    return { correctCount, totalQuestions, percentage };
  };

  // Handle exam submission
  const handleSubmitExam = (examSlide) => {
    const score = calculateExamScore(examSlide);
    setExamScore(score);
    setExamSubmitted(true);
  };

  // Reset exam
  const handleResetExam = () => {
    setExamAnswers({});
    setExamSubmitted(false);
    setExamScore(null);
  };

  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === 'ArrowLeft') goToPrevious();
      if (e.key === 'ArrowRight') goToNext();
      if (e.key === 'Escape') {
        if (isFullscreen) {
          document.exitFullscreen();
          setIsFullscreen(false);
        } else if (onClose) {
          onClose();
        }
      }
      if (e.key === 'f' || e.key === 'F') {
        toggleFullscreen();
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [currentSlide, isFullscreen, goToPrevious, goToNext, toggleFullscreen, onClose]);

  // Reset exam state when changing slides
  useEffect(() => {
    const currentSlideData = slides[currentSlide];
    if (currentSlideData?.type !== 'exam') {
      setExamAnswers({});
      setExamSubmitted(false);
      setExamScore(null);
    }
  }, [currentSlide, slides]);

  if (!slides || slides.length === 0) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white rounded-lg p-8 max-w-md">
          <h2 className="text-2xl font-bold mb-4">No Slides Available</h2>
          <p className="text-gray-600 mb-4">There are no slides available for this module yet.</p>
          <button
            onClick={onClose}
            className={`w-full px-4 py-2 bg-gradient-to-r ${colors.card} text-white rounded-lg hover:opacity-90 transition-opacity`}
          >
            Close
          </button>
        </div>
      </div>
    );
  }

  const slide = slides[currentSlide];

  return (
    <div className={`fixed inset-0 bg-gradient-to-br ${colors.light} z-50 flex flex-col ${isFullscreen ? 'p-0' : 'p-4'}`}>
      {/* Header */}
      <div className={`bg-white ${isFullscreen ? 'p-4' : 'p-4 rounded-t-lg'} shadow-md flex items-center justify-between`}>
        <div className="flex items-center gap-4">
          <h2 className={`text-xl font-bold ${colors.text}`}>{moduleTitle || 'Slide Presentation'}</h2>
          <span className="text-sm text-gray-500">
            Slide {currentSlide + 1} of {slides.length}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={toggleFullscreen}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            title="Toggle Fullscreen (F)"
          >
            {isFullscreen ? <Minimize2 size={20} /> : <Maximize2 size={20} />}
          </button>
          {onClose && (
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              title="Close (Esc)"
            >
              <X size={20} />
            </button>
          )}
        </div>
      </div>

      {/* Slide Content */}
      <div className="flex-1 overflow-y-auto p-8 bg-white m-4 rounded-lg shadow-lg">
        <div className="max-w-5xl mx-auto">
          {/* Slide Title */}
          <h1 className={`text-4xl font-bold mb-6 ${colors.text}`}>{slide.title}</h1>

          {/* Slide Type: Lesson */}
          {slide.type === 'lesson' && (
            <div className="space-y-6">
              {slide.content && (
                <div className="prose prose-lg max-w-none">
                  {Array.isArray(slide.content) ? (
                    slide.content.map((paragraph, idx) => (
                      <p key={idx} className="text-gray-700 mb-4 leading-relaxed">
                        {paragraph}
                      </p>
                    ))
                  ) : (
                    <p className="text-gray-700 mb-4 leading-relaxed">{slide.content}</p>
                  )}
                </div>
              )}

              {slide.points && (
                <ul className="space-y-3 text-gray-700">
                  {slide.points.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className={`${colors.text} font-bold text-xl mt-1`}>•</span>
                      <span className="text-lg">{point}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          )}

          {/* Slide Type: Example */}
          {slide.type === 'example' && (
            <div className="space-y-6">
              {slide.description && (
                <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded mb-6">
                  <p className="text-gray-800 text-lg">{slide.description}</p>
                </div>
              )}

              {slide.guidelines && (
                <div className="mb-6">
                  <h3 className={`text-2xl font-semibold mb-4 ${colors.text}`}>📋 Project Guidelines</h3>
                  <ul className="space-y-3">
                    {slide.guidelines.map((guideline, idx) => (
                      <li key={idx} className="flex items-start gap-3 bg-purple-50 p-3 rounded-lg border-l-4 border-purple-500">
                        <span className="text-purple-600 font-bold text-xl mt-1">•</span>
                        <span className="text-gray-800">{guideline}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {slide.steps && (
                <div className="mb-6">
                  <h3 className={`text-2xl font-semibold mb-4 ${colors.text}`}>🚀 Implementation Steps</h3>
                  <div className="space-y-3">
                    {slide.steps.map((step, idx) => (
                      <div key={idx} className="flex items-start gap-3 bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                        <span className="text-green-600 font-bold text-lg flex-shrink-0 bg-green-100 rounded-full w-8 h-8 flex items-center justify-center">
                          {idx + 1}
                        </span>
                        <span className="text-gray-800 flex-1">{step}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              {slide.code && (
                <div className="relative">
                  <div className="bg-gray-900 rounded-lg p-6 overflow-x-auto">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-gray-400 text-sm font-mono">Python Example</span>
                      <button
                        onClick={() => {
                          navigator.clipboard.writeText(slide.code);
                        }}
                        className="text-gray-400 hover:text-white text-sm"
                      >
                        Copy
                      </button>
                    </div>
                    <pre className="text-gray-100 font-mono text-sm leading-relaxed">
                      <code>{slide.code}</code>
                    </pre>
                  </div>
                </div>
              )}

              {slide.output && (
                <div className="mt-4">
                  <h3 className="font-semibold text-gray-700 mb-2">Output:</h3>
                  <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded">
                    <pre className="text-gray-800 font-mono text-sm whitespace-pre-wrap">
                      {slide.output}
                    </pre>
                  </div>
                </div>
              )}

              {slide.explanation && (
                <div className="mt-6 bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded">
                  <h3 className="font-semibold text-gray-800 mb-2">Explanation:</h3>
                  <p className="text-gray-700">{slide.explanation}</p>
                </div>
              )}
            </div>
          )}

          {/* Slide Type: Overview */}
          {slide.type === 'overview' && (
            <div className="space-y-6">
              {slide.content && (
                <p className="text-xl text-gray-700 leading-relaxed mb-6">{slide.content}</p>
              )}

              {slide.topics && (
                <div className="grid md:grid-cols-2 gap-4">
                  {slide.topics.map((topic, idx) => (
                    <div
                      key={idx}
                      className={`${colors.bg} p-4 rounded-lg border-l-4 ${colors.text} border-opacity-50`}
                    >
                      <h3 className={`font-semibold ${colors.text} mb-2`}>{topic.title || topic}</h3>
                      {topic.description && (
                        <p className="text-sm text-gray-700">{topic.description}</p>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Slide Type: Exam */}
          {slide.type === 'exam' && (
            <div className="space-y-6">
              {slide.description && (
                <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded mb-6">
                  <p className="text-gray-800 text-lg">{slide.description}</p>
                  <div className="flex gap-4 mt-3 text-sm text-gray-600">
                    {slide.duration && (
                      <span>⏱️ Duration: {slide.duration} minutes</span>
                    )}
                    {slide.passingScore && (
                      <span>✅ Passing Score: {slide.passingScore}%</span>
                    )}
                  </div>
                </div>
              )}

              {/* Exam Results */}
              {examSubmitted && examScore && (
                <div className={`p-6 rounded-lg border-2 ${examScore.percentage >= slide.passingScore
                    ? 'bg-green-50 border-green-500'
                    : 'bg-red-50 border-red-500'
                  }`}>
                  <div className="flex items-center gap-3 mb-4">
                    {examScore.percentage >= slide.passingScore ? (
                      <CheckCircle2 className="text-green-600" size={32} />
                    ) : (
                      <XCircle className="text-red-600" size={32} />
                    )}
                    <div>
                      <h3 className={`text-2xl font-bold ${examScore.percentage >= slide.passingScore ? 'text-green-800' : 'text-red-800'
                        }`}>
                        {examScore.percentage >= slide.passingScore ? 'PASSED' : 'FAILED'}
                      </h3>
                      <p className={`text-lg ${examScore.percentage >= slide.passingScore ? 'text-green-700' : 'text-red-700'
                        }`}>
                        Your Score: {examScore.percentage}% ({examScore.correctCount} out of {examScore.totalQuestions} correct)
                      </p>
                      <p className={`text-sm mt-1 ${examScore.percentage >= slide.passingScore ? 'text-green-600' : 'text-red-600'
                        }`}>
                        Passing Score: {slide.passingScore}%
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={handleResetExam}
                    className={`mt-4 px-4 py-2 bg-white border-2 ${examScore.percentage >= slide.passingScore
                        ? 'border-green-500 text-green-700 hover:bg-green-50'
                        : 'border-red-500 text-red-700 hover:bg-red-50'
                      } rounded-lg font-medium transition-colors`}
                  >
                    Retake Exam
                  </button>
                </div>
              )}

              {slide.questions && slide.questions.length > 0 && (
                <div className="space-y-8">
                  {slide.questions.map((q, idx) => {
                    const userAnswer = examAnswers[q.id];
                    const isCorrect = examSubmitted && userAnswer !== undefined && userAnswer === q.correctAnswer;
                    const isIncorrect = examSubmitted && userAnswer !== undefined && userAnswer !== q.correctAnswer;

                    return (
                      <div key={q.id || idx} className={`border-l-4 pl-6 py-4 rounded-r-lg ${examSubmitted
                          ? isCorrect
                            ? 'border-green-500 bg-green-50'
                            : isIncorrect
                              ? 'border-red-500 bg-red-50'
                              : 'border-blue-500 bg-gray-50'
                          : 'border-blue-500 bg-gray-50'
                        }`}>
                        <div className="flex items-start gap-3 mb-4">
                          <span className={`${colors.text} font-bold text-xl flex-shrink-0`}>
                            Q{idx + 1}.
                          </span>
                          <p className="text-lg font-semibold text-gray-800 flex-1">{q.question}</p>
                          {examSubmitted && userAnswer !== undefined && (
                            <div className="flex-shrink-0">
                              {isCorrect ? (
                                <CheckCircle2 className="text-green-600" size={24} />
                              ) : (
                                <XCircle className="text-red-600" size={24} />
                              )}
                            </div>
                          )}
                        </div>

                        {/* Multiple Choice Questions */}
                        {q.type === 'multiple-choice' && q.options && (
                          <div className="ml-8 space-y-2">
                            {q.options.map((option, optIdx) => {
                              const isSelected = userAnswer === optIdx;
                              const isCorrectAnswer = q.correctAnswer === optIdx;
                              let borderColor = 'border-gray-200';
                              let bgColor = 'bg-white';

                              if (examSubmitted) {
                                if (isCorrectAnswer) {
                                  borderColor = 'border-green-500';
                                  bgColor = 'bg-green-50';
                                } else if (isSelected && !isCorrectAnswer) {
                                  borderColor = 'border-red-500';
                                  bgColor = 'bg-red-50';
                                }
                              } else if (isSelected) {
                                borderColor = 'border-blue-500';
                                bgColor = 'bg-blue-50';
                              }

                              return (
                                <button
                                  key={optIdx}
                                  onClick={() => handleExamAnswer(q.id, optIdx)}
                                  disabled={examSubmitted}
                                  className={`w-full text-left p-3 rounded-lg border-2 ${borderColor} ${bgColor} transition-all ${examSubmitted ? 'cursor-default' : 'cursor-pointer hover:border-blue-400 hover:shadow-sm'
                                    }`}
                                >
                                  <span className={`font-medium ${examSubmitted && isCorrectAnswer
                                      ? 'text-green-700'
                                      : examSubmitted && isSelected && !isCorrectAnswer
                                        ? 'text-red-700'
                                        : isSelected
                                          ? colors.text
                                          : 'text-gray-700'
                                    }`}>
                                    {String.fromCharCode(65 + optIdx)}. {option}
                                    {examSubmitted && isCorrectAnswer && (
                                      <span className="ml-2 text-green-600">✓ Correct Answer</span>
                                    )}
                                    {examSubmitted && isSelected && !isCorrectAnswer && (
                                      <span className="ml-2 text-red-600">✗ Your Answer (Incorrect)</span>
                                    )}
                                    {!examSubmitted && isSelected && (
                                      <span className="ml-2 text-blue-600">✓ Selected</span>
                                    )}
                                  </span>
                                </button>
                              );
                            })}
                          </div>
                        )}

                        {/* True/False Questions */}
                        {q.type === 'true-false' && (
                          <div className="ml-8 space-y-2">
                            {[true, false].map((value) => {
                              const isSelected = userAnswer === value;
                              const isCorrectAnswer = q.correctAnswer === value;
                              let borderColor = 'border-gray-200';
                              let bgColor = 'bg-white';

                              if (examSubmitted) {
                                if (isCorrectAnswer) {
                                  borderColor = 'border-green-500';
                                  bgColor = 'bg-green-50';
                                } else if (isSelected && !isCorrectAnswer) {
                                  borderColor = 'border-red-500';
                                  bgColor = 'bg-red-50';
                                }
                              } else if (isSelected) {
                                borderColor = 'border-blue-500';
                                bgColor = 'bg-blue-50';
                              }

                              return (
                                <button
                                  key={value}
                                  onClick={() => handleExamAnswer(q.id, value)}
                                  disabled={examSubmitted}
                                  className={`w-full text-left p-3 rounded-lg border-2 ${borderColor} ${bgColor} transition-all ${examSubmitted ? 'cursor-default' : 'cursor-pointer hover:border-blue-400 hover:shadow-sm'
                                    }`}
                                >
                                  <span className={`font-medium ${examSubmitted && isCorrectAnswer
                                      ? 'text-green-700'
                                      : examSubmitted && isSelected && !isCorrectAnswer
                                        ? 'text-red-700'
                                        : isSelected
                                          ? colors.text
                                          : 'text-gray-700'
                                    }`}>
                                    {value ? 'True' : 'False'}
                                    {examSubmitted && isCorrectAnswer && (
                                      <span className="ml-2 text-green-600">✓ Correct Answer</span>
                                    )}
                                    {examSubmitted && isSelected && !isCorrectAnswer && (
                                      <span className="ml-2 text-red-600">✗ Your Answer (Incorrect)</span>
                                    )}
                                    {!examSubmitted && isSelected && (
                                      <span className="ml-2 text-blue-600">✓ Selected</span>
                                    )}
                                  </span>
                                </button>
                              );
                            })}
                          </div>
                        )}

                        {/* Code Questions */}
                        {q.type === 'code' && (
                          <div className="ml-8 space-y-3">
                            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded">
                              <p className="text-sm text-gray-700 mb-2">
                                <strong>Evaluation:</strong> {q.evaluation === 'manual' ? 'Manual review required' : 'Automated'}
                              </p>
                              {q.sampleAnswer && (
                                <div className="mt-3">
                                  <p className="text-sm font-semibold text-gray-700 mb-2">Sample Answer:</p>
                                  <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
                                    <pre className="text-gray-100 font-mono text-sm">
                                      <code>{q.sampleAnswer}</code>
                                    </pre>
                                  </div>
                                </div>
                              )}
                            </div>
                            {examSubmitted && (
                              <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
                                <p className="text-sm text-gray-700">
                                  <strong>Note:</strong> Code questions are not automatically scored. Please compare your answer with the sample answer above.
                                </p>
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              )}

              {/* Submit Button */}
              {!examSubmitted && slide.questions && slide.questions.length > 0 && (
                <div className="flex justify-center pt-4">
                  <button
                    onClick={() => handleSubmitExam(slide)}
                    className={`px-8 py-3 bg-gradient-to-r ${colors.card} text-white rounded-lg hover:opacity-90 transition-opacity font-semibold text-lg shadow-lg`}
                  >
                    Check Answers & See Results
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Navigation Footer */}
      <div className={`bg-white ${isFullscreen ? 'p-4' : 'p-4 rounded-b-lg'} shadow-md flex items-center justify-between`}>
        <button
          onClick={goToPrevious}
          disabled={currentSlide === 0}
          className={`px-6 py-2 rounded-lg flex items-center gap-2 transition-all ${currentSlide === 0
              ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
              : `bg-gradient-to-r ${colors.card} text-white hover:opacity-90`
            }`}
        >
          <ChevronLeft size={20} />
          Previous
        </button>

        {/* Slide Indicators */}
        <div className="flex gap-2">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`h-2 rounded-full transition-all ${idx === currentSlide
                  ? `w-8 bg-gradient-to-r ${colors.card}`
                  : 'w-2 bg-gray-300 hover:bg-gray-400'
                }`}
              title={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

        <button
          onClick={goToNext}
          disabled={currentSlide === slides.length - 1}
          className={`px-6 py-2 rounded-lg flex items-center gap-2 transition-all ${currentSlide === slides.length - 1
              ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
              : `bg-gradient-to-r ${colors.card} text-white hover:opacity-90`
            }`}
        >
          Next
          <ChevronRight size={20} />
        </button>
      </div>

      {/* Keyboard Shortcuts Hint */}
      <div className="absolute bottom-20 right-4 bg-black bg-opacity-75 text-white text-xs p-2 rounded opacity-0 hover:opacity-100 transition-opacity">
        <div>← → Navigate</div>
        <div>F Fullscreen</div>
        <div>Esc Close</div>
      </div>
    </div>
  );
};

export default SlidePresentation;
