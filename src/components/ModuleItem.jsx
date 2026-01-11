import React from 'react';
import { ChevronDown, ChevronRight, Presentation } from 'lucide-react';
import { colorSchemes } from '../utils/colorSchemes';

const ModuleItem = ({ module, isExpanded, onToggle, color, onViewSlides }) => {
  const colors = colorSchemes[color];

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <button
        onClick={onToggle}
        className={`w-full px-6 py-4 flex items-center justify-between bg-gradient-to-r ${colors.card} text-white transition-colors`}
      >
        <div className="flex items-center gap-4">
          <span className="text-2xl font-bold">Module {module.module}</span>
          <div className="text-left">
            <div className="font-semibold text-lg">{module.title}</div>
            <div className="text-white text-opacity-80 text-sm">{module.hours} hours</div>
          </div>
        </div>
        {isExpanded ? <ChevronDown /> : <ChevronRight />}
      </button>

      {isExpanded && (
        <div className="p-6 bg-gray-50">
          <div className="flex items-start justify-between mb-4">
            <h3 className="font-semibold text-gray-700">Topics Covered:</h3>
            {onViewSlides && (
              <button
                onClick={() => onViewSlides(module.module)}
                className={`flex items-center gap-2 px-4 py-2 bg-gradient-to-r ${colors.card} text-white rounded-lg hover:opacity-90 transition-opacity text-sm font-medium shadow-sm`}
              >
                <Presentation size={18} />
                View Slides
              </button>
            )}
          </div>
          <ul className="space-y-2">
            {module.topics.map((topic, idx) => (
              <li key={idx} className="flex items-start gap-2 text-gray-700">
                <span className={colors.text}>•</span>
                <span>{topic}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ModuleItem;