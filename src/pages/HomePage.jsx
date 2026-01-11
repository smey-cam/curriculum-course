import React from 'react';
import CourseCard from '../components/CourseCard';
import { coursesData } from '../data/coursesData';

const HomePage = ({ onSelectCourse }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-slate-800 mb-4">Course Dashboard</h1>
          <p className="text-xl text-slate-600">Select a course to view detailed curriculum</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {Object.values(coursesData).map((course) => (
            <CourseCard 
              key={course.id} 
              course={course} 
              onSelect={onSelectCourse} 
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;