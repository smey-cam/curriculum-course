import React, { useState } from 'react';
import Navigation from './components/Navigation';
import HomePage from './pages/HomePage';
import CourseDetail from './pages/CourseDetail';
import AboutPage from './pages/AboutPage';
import PlansPage from './pages/PlansPage'

const App = () => {
  const [currentRoute, setCurrentRoute] = useState('home');
  const [selectedCourse, setSelectedCourse] = useState(null);

  const handleNavigate = (route) => {
    setCurrentRoute(route);
    setSelectedCourse(null);
  };

  const handleSelectCourse = (courseId) => {
    setSelectedCourse(courseId);
    setCurrentRoute('course');
  };

  const handleBack = () => {
    setSelectedCourse(null);
    setCurrentRoute('home');
  };

  return (
    <div className="min-h-screen">
      <Navigation currentRoute={currentRoute} onNavigate={handleNavigate} />
      
      {currentRoute === 'home' && (
        <HomePage onSelectCourse={handleSelectCourse} />
      )}
      
      {currentRoute === 'course' && selectedCourse && (
        <CourseDetail courseId={selectedCourse} onBack={handleBack} />
      )}

      {currentRoute === 'plan' && (
        <PlansPage />
      )}
      
      {currentRoute === 'about' && (
        <AboutPage />
      )}
    </div>
  );
};

export default App;