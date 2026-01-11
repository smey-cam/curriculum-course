import React from 'react';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-6">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h1 className="text-4xl font-bold text-slate-800 mb-6">About Our Courses</h1>
          
          <div className="space-y-6 text-gray-700">
            <p className="text-lg">
              Welcome to our comprehensive learning platform! We offer industry-leading courses 
              designed to help you master essential skills in technology and business.
            </p>
            
            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded">
              <h2 className="text-2xl font-bold text-blue-900 mb-3">Our Mission</h2>
              <p>
                To provide high-quality, practical education that empowers learners to excel 
                in their careers and achieve their professional goals.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mt-8">
              <div className="bg-gradient-to-br from-indigo-50 to-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-indigo-900 mb-3">Expert Instructors</h3>
                <p className="text-gray-700">
                  Learn from industry professionals with years of real-world experience.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-green-900 mb-3">Hands-on Learning</h3>
                <p className="text-gray-700">
                  Apply your knowledge through practical projects and real-world scenarios.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-pink-50 to-rose-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-pink-900 mb-3">Flexible Schedule</h3>
                <p className="text-gray-700">
                  Learn at your own pace with on-demand content and flexible deadlines.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-purple-50 to-violet-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-purple-900 mb-3">Career Support</h3>
                <p className="text-gray-700">
                  Get guidance and resources to help you advance in your career path.
                </p>
              </div>
            </div>

            <div className="mt-8 p-6 bg-gray-50 rounded-lg">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Course Statistics</h2>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-3xl font-bold text-blue-600">12</div>
                  <div className="text-sm text-gray-600">Courses Available</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-green-600">720</div>
                  <div className="text-sm text-gray-600">Total Hours</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-purple-600">120</div>
                  <div className="text-sm text-gray-600">Learning Modules</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;