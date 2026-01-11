import React, { useState } from 'react';
import { Clock, BookOpen, Target } from 'lucide-react';
import ModuleItem from '../components/ModuleItem';
import SlidePresentation from '../components/SlidePresentation';
import { coursesData } from '../data/coursesData';
import { colorSchemes } from '../utils/colorSchemes';
import { getSlidesForModule } from '../data/slidesData';

const CourseDetail = ({ courseId, onBack }) => {
  const [expandedModule, setExpandedModule] = useState(null);
  const [showSlides, setShowSlides] = useState(false);
  const [selectedModuleNum, setSelectedModuleNum] = useState(null);
  const course = coursesData[courseId];
  
  if (!course) return null;

  const Icon = course.icon;
  const colors = colorSchemes[course.color];

  const toggleModule = (moduleNum) => {
    setExpandedModule(expandedModule === moduleNum ? null : moduleNum);
  };

  const handleViewSlides = (moduleNum) => {
    setSelectedModuleNum(moduleNum);
    setShowSlides(true);
  };

  const handleCloseSlides = () => {
    setShowSlides(false);
    setSelectedModuleNum(null);
  };

  const selectedModule = course.curriculum.find(m => m.module === selectedModuleNum);
  const slides = selectedModuleNum ? getSlidesForModule(courseId, selectedModuleNum) : [];

  return (
    <div className={`min-h-screen bg-gradient-to-br ${colors.light} p-6`}>
      <div className="max-w-6xl mx-auto">
        <button
          onClick={onBack}
          className="mb-6 px-6 py-2 bg-white rounded-lg shadow hover:shadow-md transition-shadow text-gray-700 font-medium"
        >
          ← Back to Dashboard
        </button>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-6">
          <div className="flex items-center gap-4 mb-4">
            <div className={`bg-gradient-to-r ${colors.card} p-4 rounded-lg text-white`}>
              <Icon size={40} />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-slate-800">{course.title}</h1>
              <p className="text-xl text-gray-600 mt-1">{course.description}</p>
            </div>
          </div>
          
          <div className="grid grid-cols-3 gap-4 mt-6">
            <div className={`${colors.bg} p-4 rounded-lg`}>
              <div className={`flex items-center gap-2 ${colors.text}`}>
                <Clock size={24} />
                <div>
                  <div className="text-2xl font-bold">{course.hours} Hours</div>
                  <div className="text-sm">Total Duration</div>
                </div>
              </div>
            </div>
            <div className={`${colors.bg} p-4 rounded-lg`}>
              <div className={`flex items-center gap-2 ${colors.text}`}>
                <BookOpen size={24} />
                <div>
                  <div className="text-2xl font-bold">{course.modules} Modules</div>
                  <div className="text-sm">Learning Units</div>
                </div>
              </div>
            </div>
            <div className={`${colors.bg} p-4 rounded-lg`}>
              <div className={`flex items-center gap-2 ${colors.text}`}>
                <Target size={24} />
                <div>
                  <div className="text-2xl font-bold">Complete</div>
                  <div className="text-sm">Course Path</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          {course.curriculum.map((module) => (
            <ModuleItem
              key={module.module}
              module={module}
              isExpanded={expandedModule === module.module}
              onToggle={() => toggleModule(module.module)}
              color={course.color}
              onViewSlides={handleViewSlides}
            />
          ))}
        </div>

        {showSlides && selectedModule && (
          <SlidePresentation
            slides={slides}
            courseColor={course.color}
            moduleTitle={`Module ${selectedModule.module}: ${selectedModule.title}`}
            onClose={handleCloseSlides}
          />
        )}

        <div className="bg-white rounded-lg shadow-lg p-6 mt-6">
          <h2 className={`text-2xl font-bold ${colors.text} mb-4`}>Teaching Recommendations</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className={`${colors.bg} p-4 rounded-lg`}>
              <h3 className={`font-semibold ${colors.text} mb-2`}>Delivery Methods</h3>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• 40% Lectures with slides</li>
                <li>• 30% Hands-on exercises</li>
                <li>• 20% Group projects</li>
                <li>• 10% Case studies & discussions</li>
              </ul>
            </div>
            <div className={`${colors.bg} p-4 rounded-lg`}>
              <h3 className={`font-semibold ${colors.text} mb-2`}>Assessment Methods</h3>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Weekly quizzes (20%)</li>
                <li>• Mid-term project (30%)</li>
                <li>• Final project (40%)</li>
                <li>• Class participation (10%)</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetail;