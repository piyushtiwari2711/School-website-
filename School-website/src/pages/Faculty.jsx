import React, { useState } from 'react';
import { Users, Award, BookOpen, GraduationCap, Mail, Phone, Star, ChevronRight } from 'lucide-react';

const Faculty = () => {
  const [selectedDepartment, setSelectedDepartment] = useState('all');

  const facultyMembers = [
    {
      name: "Dr. Priya Sharma",
      position: "Principal",
      department: "Administration",
      qualification: "M.Ed., Ph.D. in Education",
      experience: "25 years",
      subjects: ["Educational Leadership", "Curriculum Development"],
      email: "principal@davsreshtha.edu.in",
      phone: "+91 98765 43210",
      image: "https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=400",
      achievements: ["Best Principal Award 2023", "Educational Excellence Award"]
    },
    {
      name: "Mr. Rajesh Kumar",
      position: "Vice Principal",
      department: "Administration",
      qualification: "M.A. English, B.Ed.",
      experience: "20 years",
      subjects: ["English Literature", "Communication Skills"],
      email: "vp@davsreshtha.edu.in",
      phone: "+91 98765 43211",
      image: "https://images.pexels.com/photos/5212317/pexels-photo-5212317.jpeg?auto=compress&cs=tinysrgb&w=400",
      achievements: ["Outstanding Teacher Award", "Literary Excellence Award"]
    },
    {
      name: "Ms. Sunita Gupta",
      position: "Head of Mathematics",
      department: "Mathematics",
      qualification: "M.Sc. Mathematics, B.Ed.",
      experience: "18 years",
      subjects: ["Advanced Mathematics", "Statistics"],
      email: "sunita.gupta@davsreshtha.edu.in",
      phone: "+91 98765 43212",
      image: "https://images.pexels.com/photos/5212329/pexels-photo-5212329.jpeg?auto=compress&cs=tinysrgb&w=400",
      achievements: ["Best Mathematics Teacher", "Innovation in Teaching Award"]
    },
    {
      name: "Dr. Amit Singh",
      position: "Head of Science",
      department: "Science",
      qualification: "M.Sc. Physics, Ph.D.",
      experience: "22 years",
      subjects: ["Physics", "Applied Sciences"],
      email: "amit.singh@davsreshtha.edu.in",
      phone: "+91 98765 43213",
      image: "https://images.pexels.com/photos/5212320/pexels-photo-5212320.jpeg?auto=compress&cs=tinysrgb&w=400",
      achievements: ["Science Excellence Award", "Research Publication Award"]
    },
    {
      name: "Ms. Kavita Sharma",
      position: "English Teacher",
      department: "Languages",
      qualification: "M.A. English, B.Ed.",
      experience: "15 years",
      subjects: ["English Literature", "Creative Writing"],
      email: "kavita.sharma@davsreshtha.edu.in",
      phone: "+91 98765 43214",
      image: "https://images.pexels.com/photos/5212339/pexels-photo-5212339.jpeg?auto=compress&cs=tinysrgb&w=400",
      achievements: ["Literary Excellence Award", "Creative Teaching Award"]
    },
    {
      name: "Mr. Deepak Verma",
      position: "Computer Science Teacher",
      department: "Computer Science",
      qualification: "MCA, B.Tech",
      experience: "12 years",
      subjects: ["Programming", "Web Development", "Database Management"],
      email: "deepak.verma@davsreshtha.edu.in",
      phone: "+91 98765 43215",
      image: "https://images.pexels.com/photos/5212324/pexels-photo-5212324.jpeg?auto=compress&cs=tinysrgb&w=400",
      achievements: ["Technology Innovation Award", "Best IT Teacher"]
    },
    {
      name: "Ms. Ritu Agarwal",
      position: "Social Studies Teacher",
      department: "Social Studies",
      qualification: "M.A. History, B.Ed.",
      experience: "16 years",
      subjects: ["History", "Geography", "Civics"],
      email: "ritu.agarwal@davsreshtha.edu.in",
      phone: "+91 98765 43216",
      image: "https://images.pexels.com/photos/5212332/pexels-photo-5212332.jpeg?auto=compress&cs=tinysrgb&w=400",
      achievements: ["Social Studies Excellence", "Cultural Heritage Award"]
    },
    {
      name: "Mr. Vikash Pandey",
      position: "Physical Education Teacher",
      department: "Sports",
      qualification: "M.P.Ed., B.P.Ed.",
      experience: "14 years",
      subjects: ["Physical Education", "Sports Training"],
      email: "vikash.pandey@davsreshtha.edu.in",
      phone: "+91 98765 43217",
      image: "https://images.pexels.com/photos/5212327/pexels-photo-5212327.jpeg?auto=compress&cs=tinysrgb&w=400",
      achievements: ["Best Sports Coach", "Athletic Excellence Award"]
    }
  ];

  const departments = [
    { id: 'all', name: 'All Departments', count: facultyMembers.length },
    { id: 'Administration', name: 'Administration', count: facultyMembers.filter(f => f.department === 'Administration').length },
    { id: 'Mathematics', name: 'Mathematics', count: facultyMembers.filter(f => f.department === 'Mathematics').length },
    { id: 'Science', name: 'Science', count: facultyMembers.filter(f => f.department === 'Science').length },
    { id: 'Languages', name: 'Languages', count: facultyMembers.filter(f => f.department === 'Languages').length },
    { id: 'Computer Science', name: 'Computer Science', count: facultyMembers.filter(f => f.department === 'Computer Science').length },
    { id: 'Social Studies', name: 'Social Studies', count: facultyMembers.filter(f => f.department === 'Social Studies').length },
    { id: 'Sports', name: 'Sports', count: facultyMembers.filter(f => f.department === 'Sports').length }
  ];

  const achievements = [
    {
      title: "Qualified Faculty",
      description: "100% qualified teachers with relevant degrees",
      icon: GraduationCap,
      color: "text-blue-600"
    },
    {
      title: "Average Experience",
      description: "18+ years of teaching experience",
      icon: Award,
      color: "text-green-600"
    },
    {
      title: "Professional Development",
      description: "Regular training and skill enhancement",
      icon: BookOpen,
      color: "text-purple-600"
    },
    {
      title: "Student-Teacher Ratio",
      description: "Optimal 15:1 ratio for personalized attention",
      icon: Users,
      color: "text-orange-600"
    }
  ];

  const filteredFaculty = selectedDepartment === 'all' 
    ? facultyMembers 
    : facultyMembers.filter(member => member.department === selectedDepartment);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-indigo-700 via-indigo-600 to-indigo-500 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">Our Faculty</h1>
            <div className="w-24 h-1 bg-yellow-400 mx-auto mb-8"></div>
            <p className="text-xl text-indigo-100 max-w-4xl mx-auto leading-relaxed">
              Meet our dedicated team of experienced educators who are committed to nurturing 
              young minds and inspiring excellence in every student.
            </p>
          </div>
        </div>
      </section>

      {/* Faculty Achievements */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Faculty Excellence</h2>
            <div className="w-20 h-1 bg-yellow-500 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our faculty's commitment to excellence in education
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center group">
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                  <achievement.icon className={`h-12 w-12 mx-auto mb-4 ${achievement.color}`} />
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{achievement.title}</h3>
                  <p className="text-gray-600">{achievement.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Department Filter */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {departments.map((dept) => (
              <button
                key={dept.id}
                onClick={() => setSelectedDepartment(dept.id)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 flex items-center ${
                  selectedDepartment === dept.id
                    ? 'bg-indigo-600 text-white shadow-lg transform scale-105'
                    : 'bg-gray-100 text-gray-700 hover:bg-indigo-50 hover:text-indigo-600'
                }`}
              >
                {dept.name}
                <span className="ml-2 bg-white bg-opacity-20 text-xs px-2 py-1 rounded-full">
                  {dept.count}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Faculty Members */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              {selectedDepartment === 'all' ? 'All Faculty Members' : `${selectedDepartment} Department`}
            </h2>
            <div className="w-20 h-1 bg-yellow-500 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredFaculty.map((faculty, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <div className="relative">
                  <img 
                    src={faculty.image} 
                    alt={faculty.name}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-xl font-bold">{faculty.name}</h3>
                    <p className="text-indigo-200">{faculty.position}</p>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="mb-4">
                    <span className="bg-indigo-100 text-indigo-800 text-xs px-3 py-1 rounded-full font-medium">
                      {faculty.department}
                    </span>
                  </div>
                  
                  <div className="space-y-3 mb-6">
                    <div>
                      <p className="text-sm text-gray-600">Qualification</p>
                      <p className="font-medium text-gray-900">{faculty.qualification}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Experience</p>
                      <p className="font-medium text-gray-900">{faculty.experience}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Subjects</p>
                      <p className="font-medium text-gray-900">{faculty.subjects.join(', ')}</p>
                    </div>
                  </div>

                  <div className="border-t border-gray-200 pt-4">
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">Achievements</h4>
                    <div className="space-y-1">
                      {faculty.achievements.map((achievement, idx) => (
                        <div key={idx} className="flex items-center text-sm text-gray-600">
                          <Star className="h-3 w-3 text-yellow-500 mr-2" />
                          {achievement}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="border-t border-gray-200 pt-4 mt-4">
                    <div className="flex items-center justify-between">
                      <div className="flex space-x-3">
                        <a 
                          href={`mailto:${faculty.email}`}
                          className="text-indigo-600 hover:text-indigo-800 transition-colors"
                        >
                          <Mail className="h-5 w-5" />
                        </a>
                        <a 
                          href={`tel:${faculty.phone}`}
                          className="text-indigo-600 hover:text-indigo-800 transition-colors"
                        >
                          <Phone className="h-5 w-5" />
                        </a>
                      </div>
                      <button className="text-indigo-600 hover:text-indigo-800 transition-colors flex items-center text-sm font-medium">
                        View Profile
                        <ChevronRight className="h-4 w-4 ml-1" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Professional Development */}
      <section className="py-20 bg-indigo-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Professional Development</h2>
            <div className="w-20 h-1 bg-yellow-400 mx-auto mb-6"></div>
            <p className="text-xl text-indigo-100 max-w-3xl mx-auto">
              We invest in our faculty's continuous growth and development
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-8 hover:bg-opacity-20 transition-all duration-300">
              <BookOpen className="h-12 w-12 text-yellow-400 mb-6" />
              <h3 className="text-xl font-bold mb-4">Continuous Learning</h3>
              <p className="text-indigo-100">
                Regular workshops, seminars, and training programs to keep our faculty updated with the latest educational methodologies.
              </p>
            </div>

            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-8 hover:bg-opacity-20 transition-all duration-300">
              <Award className="h-12 w-12 text-yellow-400 mb-6" />
              <h3 className="text-xl font-bold mb-4">Recognition Programs</h3>
              <p className="text-indigo-100">
                We recognize and celebrate outstanding teaching performance through various award programs and incentives.
              </p>
            </div>

            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-8 hover:bg-opacity-20 transition-all duration-300">
              <Users className="h-12 w-12 text-yellow-400 mb-6" />
              <h3 className="text-xl font-bold mb-4">Collaborative Environment</h3>
              <p className="text-indigo-100">
                Fostering a collaborative culture where teachers share best practices and learn from each other.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Join Our Team */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Join Our Team</h2>
          <div className="w-20 h-1 bg-yellow-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Are you passionate about education and want to make a difference in students' lives? 
            We're always looking for dedicated educators to join our team.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-indigo-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-indigo-700 transition-all duration-300 transform hover:scale-105">
              View Open Positions
            </button>
            <button className="border-2 border-indigo-600 text-indigo-600 px-8 py-4 rounded-lg font-semibold hover:bg-indigo-600 hover:text-white transition-all duration-300">
              Submit Your Resume
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Faculty;