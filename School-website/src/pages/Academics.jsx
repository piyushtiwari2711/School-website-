import React, { useState } from 'react';
import { BookOpen, Calendar, FileText, Award, Clock, Users, GraduationCap, Target, Star, ChevronRight } from 'lucide-react';

const Academics = () => {
  const [selectedGrade, setSelectedGrade] = useState('primary');

  const gradePrograms = {
    primary: {
      title: "Primary School (Classes I-V)",
      description: "Building strong foundations through play-based and experiential learning",
      subjects: [
        "English Language & Literature",
        "Hindi Language",
        "Mathematics",
        "Environmental Studies",
        "Computer Science",
        "Art & Craft",
        "Physical Education",
        "Music & Dance"
      ],
      highlights: [
        "Activity-based learning",
        "Individual attention",
        "Creative expression",
        "Character building"
      ]
    },
    middle: {
      title: "Middle School (Classes VI-VIII)",
      description: "Developing critical thinking and analytical skills for academic excellence",
      subjects: [
        "English Language & Literature",
        "Hindi Language",
        "Mathematics",
        "Science (Physics, Chemistry, Biology)",
        "Social Studies",
        "Computer Science",
        "Sanskrit",
        "Physical Education"
      ],
      highlights: [
        "Subject specialization",
        "Project-based learning",
        "Leadership development",
        "Skill enhancement"
      ]
    },
    secondary: {
      title: "Secondary School (Classes IX-X)",
      description: "Comprehensive preparation for board examinations and career choices",
      subjects: [
        "English Language & Literature",
        "Hindi Language",
        "Mathematics",
        "Science (Physics, Chemistry, Biology)",
        "Social Science",
        "Computer Applications",
        "Physical Education",
        "Additional Languages"
      ],
      highlights: [
        "Board exam preparation",
        "Career counseling",
        "Practical learning",
        "Competitive exam training"
      ]
    },
    senior: {
      title: "Senior Secondary (Classes XI-XII)",
      description: "Specialized streams for higher education and career preparation",
      subjects: [
        "Science Stream: PCM/PCB",
        "Commerce Stream",
        "Humanities Stream",
        "Computer Science",
        "Physical Education",
        "Fine Arts",
        "Psychology",
        "Economics"
      ],
      highlights: [
        "Stream specialization",
        "College preparation",
        "Research projects",
        "Industry exposure"
      ]
    }
  };

  const achievements = [
    {
      title: "100% Pass Rate",
      description: "Class XII Board Examinations 2024",
      icon: Award,
      color: "text-green-600"
    },
    {
      title: "State Topper",
      description: "Science Stream - 98.2%",
      icon: Star,
      color: "text-yellow-600"
    },
    {
      title: "Excellence Award",
      description: "Best Academic Performance",
      icon: GraduationCap,
      color: "text-blue-600"
    },
    {
      title: "Scholarship Winners",
      description: "25 students received merit scholarships",
      icon: Target,
      color: "text-purple-600"
    }
  ];

  const facilities = [
    {
      title: "Smart Classrooms",
      description: "Interactive whiteboards and digital learning tools",
      image: "https://images.pexels.com/photos/159844/cellular-education-classroom-159844.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      title: "Science Laboratories",
      description: "Well-equipped Physics, Chemistry, and Biology labs",
      image: "https://images.pexels.com/photos/256541/pexels-photo-256541.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      title: "Computer Lab",
      description: "Latest computers with high-speed internet",
      image: "https://images.pexels.com/photos/159844/cellular-education-classroom-159844.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      title: "Library",
      description: "Extensive collection of books and digital resources",
      image: "https://images.pexels.com/photos/159740/library-la-trobe-study-students-159740.jpeg?auto=compress&cs=tinysrgb&w=600"
    }
  ];

  const examResults = [
    { year: "2024", class: "Class X", passRate: "100%", distinction: "85%" },
    { year: "2024", class: "Class XII", passRate: "100%", distinction: "78%" },
    { year: "2023", class: "Class X", passRate: "98.5%", distinction: "82%" },
    { year: "2023", class: "Class XII", passRate: "97.8%", distinction: "75%" }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-700 via-green-600 to-green-500 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">Academic Excellence</h1>
            <div className="w-24 h-1 bg-yellow-400 mx-auto mb-8"></div>
            <p className="text-xl text-green-100 max-w-4xl mx-auto leading-relaxed">
              Our comprehensive academic program is designed to nurture intellectual curiosity, 
              critical thinking, and lifelong learning in every student.
            </p>
          </div>
        </div>
      </section>

      {/* Grade Level Programs */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Academic Programs</h2>
            <div className="w-20 h-1 bg-yellow-500 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive curriculum designed for each stage of learning
            </p>
          </div>
          
          {/* Grade Level Selector */}
          <div className="flex flex-wrap justify-center mb-12 gap-4">
            {Object.entries(gradePrograms).map(([key, program]) => (
              <button
                key={key}
                onClick={() => setSelectedGrade(key)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  selectedGrade === key
                    ? 'bg-green-600 text-white shadow-lg transform scale-105'
                    : 'bg-white text-gray-700 hover:bg-green-50 hover:text-green-600 shadow-md'
                }`}
              >
                {program.title.split(' ')[0]} {program.title.split(' ')[1]}
              </button>
            ))}
          </div>

          {/* Selected Program Details */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="bg-gradient-to-r from-green-600 to-green-500 text-white p-8">
              <h3 className="text-3xl font-bold mb-4">
                {gradePrograms[selectedGrade].title}
              </h3>
              <p className="text-xl text-green-100">
                {gradePrograms[selectedGrade].description}
              </p>
            </div>
            
            <div className="p-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                    <BookOpen className="h-6 w-6 mr-2 text-green-600" />
                    Subjects Offered
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {gradePrograms[selectedGrade].subjects.map((subject, index) => (
                      <div key={index} className="bg-gray-50 p-4 rounded-lg hover:bg-green-50 transition-colors">
                        <div className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                          <span className="font-medium text-gray-900">{subject}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                    <Star className="h-6 w-6 mr-2 text-green-600" />
                    Key Highlights
                  </h4>
                  <div className="space-y-4">
                    {gradePrograms[selectedGrade].highlights.map((highlight, index) => (
                      <div key={index} className="flex items-center space-x-3 p-4 bg-green-50 rounded-lg">
                        <ChevronRight className="h-5 w-5 text-green-600" />
                        <span className="font-medium text-gray-900">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Academic Achievements */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Academic Achievements</h2>
            <div className="w-20 h-1 bg-yellow-500 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Celebrating our students' outstanding academic performance
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center group">
                <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                  <achievement.icon className={`h-12 w-12 mx-auto mb-4 ${achievement.color}`} />
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{achievement.title}</h3>
                  <p className="text-gray-600">{achievement.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Learning Facilities</h2>
            <div className="w-20 h-1 bg-yellow-500 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              State-of-the-art infrastructure supporting modern education
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {facilities.map((facility, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group">
                <div className="relative overflow-hidden">
                  <img 
                    src={facility.image} 
                    alt={facility.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-green-600 bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{facility.title}</h3>
                  <p className="text-gray-600">{facility.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Exam Results */}
      <section className="py-20 bg-green-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Board Exam Results</h2>
            <div className="w-20 h-1 bg-yellow-400 mx-auto mb-6"></div>
            <p className="text-xl text-green-100 max-w-3xl mx-auto">
              Consistent excellence in board examinations
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {examResults.map((result, index) => (
              <div key={index} className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 hover:bg-opacity-20 transition-all duration-300">
                <div className="text-center">
                  <div className="text-2xl font-bold text-yellow-400 mb-2">{result.year}</div>
                  <div className="text-lg font-semibold mb-4">{result.class}</div>
                  <div className="space-y-2">
                    <div>
                      <div className="text-sm text-green-100">Pass Rate</div>
                      <div className="text-xl font-bold">{result.passRate}</div>
                    </div>
                    <div>
                      <div className="text-sm text-green-100">Distinction</div>
                      <div className="text-xl font-bold">{result.distinction}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Academic Calendar */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Academic Calendar 2024-25</h2>
            <div className="w-20 h-1 bg-yellow-500 mx-auto mb-6"></div>
          </div>
          
          <div className="bg-gray-50 rounded-2xl p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                  <Calendar className="h-6 w-6 mr-2 text-green-600" />
                  First Term
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center py-2 border-b border-gray-200">
                    <span className="text-gray-700">Session Begins</span>
                    <span className="font-medium">April 1</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-200">
                    <span className="text-gray-700">First Term Exams</span>
                    <span className="font-medium">July 15-25</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-200">
                    <span className="text-gray-700">Summer Break</span>
                    <span className="font-medium">May 15-June 15</span>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                  <Calendar className="h-6 w-6 mr-2 text-green-600" />
                  Second Term
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center py-2 border-b border-gray-200">
                    <span className="text-gray-700">Term Begins</span>
                    <span className="font-medium">August 1</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-200">
                    <span className="text-gray-700">Mid-Term Exams</span>
                    <span className="font-medium">September 15-25</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-200">
                    <span className="text-gray-700">Diwali Break</span>
                    <span className="font-medium">October 20-30</span>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                  <Calendar className="h-6 w-6 mr-2 text-green-600" />
                  Final Term
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center py-2 border-b border-gray-200">
                    <span className="text-gray-700">Term Begins</span>
                    <span className="font-medium">November 1</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-200">
                    <span className="text-gray-700">Annual Exams</span>
                    <span className="font-medium">February 15-28</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="text-gray-700">Session Ends</span>
                    <span className="font-medium">March 31</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Academics;