import React from 'react';
import { Clock, BookOpen } from 'lucide-react';
import { colorSchemes } from '../utils/colorSchemes';

const CourseCard = ({ course, onSelect }) => {
  const Icon = course.icon;
  const colors = colorSchemes[course.color];

  return (
    <div
      onClick={() => onSelect(course.id)}
      className="bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer transform transition-all hover:scale-105 hover:shadow-2xl"
    >
      <div className={`bg-gradient-to-r ${colors && colors?.card} p-6 text-white`}>
        <div className="flex items-center gap-4 mb-4">
          <div className="bg-white bg-opacity-20 p-3 rounded-lg">
            <Icon size={32} />
          </div>
          <div>
            <h2 className="text-2xl font-bold">{course.title}</h2>
          </div>
        </div>
        <p className="text-white text-opacity-90">{course.description}</p>
      </div>
      
      <div className="p-6">
        <div className="grid grid-cols-2 gap-4">
          <div className={`${colors.bg} p-4 rounded-lg`}>
            <div className="flex items-center gap-2">
              <Clock size={20} className={colors.text} />
              <div>
                <div className={`text-2xl font-bold ${colors.text}`}>{course.hours}</div>
                <div className="text-sm text-gray-600">Hours</div>
              </div>
            </div>
          </div>
          <div className={`${colors.bg} p-4 rounded-lg`}>
            <div className="flex items-center gap-2">
              <BookOpen size={20} className={colors.text} />
              <div>
                <div className={`text-2xl font-bold ${colors.text}`}>{course.modules}</div>
                <div className="text-sm text-gray-600">Modules</div>
              </div>
            </div>
          </div>
        </div>
        <button className={`w-full mt-4 bg-gradient-to-r ${colors.card} text-white py-3 rounded-lg font-semibold transition-colors`}>
          View Curriculum
        </button>
      </div>
    </div>
  );
};

export default CourseCard;