import React, { useState } from 'react';
import { Trophy, Music, Camera, Users, Star, Calendar, Award, Heart } from 'lucide-react';

const StudentLife = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const sportsPrograms = [
    {
      name: "Basketball",
      season: "Fall & Winter",
      levels: ["Varsity", "JV", "Freshman"],
      coach: "Coach Martinez",
      category: "sports"
    },
    {
      name: "Soccer",
      season: "Spring",
      levels: ["Varsity", "JV"],
      coach: "Coach Thompson",
      category: "sports"
    },
    {
      name: "Track & Field",
      season: "Spring",
      levels: ["Varsity", "JV"],
      coach: "Coach Davis",
      category: "sports"
    },
    {
      name: "Cross Country",
      season: "Fall",
      levels: ["Varsity", "JV"],
      coach: "Coach Wilson",
      category: "sports"
    }
  ];

  const clubs = [
    {
      name: "Student Government",
      description: "Leadership and school governance",
      advisor: "Ms. Rodriguez",
      category: "leadership"
    },
    {
      name: "Drama Club",
      description: "Theater productions and performances",
      advisor: "Mr. Johnson",
      category: "arts"
    },
    {
      name: "Science Club",
      description: "STEM projects and competitions",
      advisor: "Dr. Chen",
      category: "academic"
    },
    {
      name: "Art Club",
      description: "Creative arts and exhibitions",
      advisor: "Ms. Parker",
      category: "arts"
    },
    {
      name: "Debate Team",
      description: "Public speaking and argumentation",
      advisor: "Mr. Williams",
      category: "academic"
    },
    {
      name: "Music Ensemble",
      description: "Band, choir, and orchestra",
      advisor: "Ms. Anderson",
      category: "arts"
    },
    {
      name: "Robotics Club",
      description: "Engineering and programming",
      advisor: "Mr. Lee",
      category: "academic"
    },
    {
      name: "Community Service",
      description: "Volunteer work and outreach",
      advisor: "Ms. Taylor",
      category: "service"
    }
  ];

  const achievements = [
    {
      title: "State Championship",
      description: "Girls Basketball Team wins state title",
      date: "March 2024",
      category: "Sports"
    },
    {
      title: "Academic Excellence",
      description: "95% of seniors accepted to college",
      date: "May 2024",
      category: "Academics"
    },
    {
      title: "Arts Festival Winner",
      description: "Drama Club takes first place in regional competition",
      date: "April 2024",
      category: "Arts"
    },
    {
      title: "Science Fair Success",
      description: "Three students advance to state science fair",
      date: "February 2024",
      category: "STEM"
    }
  ];

  const galleryImages = [
    { title: "Graduation Ceremony", category: "Events" },
    { title: "Science Fair", category: "Academics" },
    { title: "Basketball Championship", category: "Sports" },
    { title: "Art Exhibition", category: "Arts" },
    { title: "Community Service Day", category: "Service" },
    { title: "Spring Musical", category: "Arts" },
    { title: "Robotics Competition", category: "STEM" },
    { title: "Field Day", category: "Events" }
  ];

  const resources = [
    {
      title: "Counseling Services",
      description: "Academic and personal counseling support",
      icon: Heart,
      services: ["Academic Planning", "College Counseling", "Personal Support", "Career Guidance"]
    },
    {
      title: "Tutoring Center",
      description: "Free tutoring for all subjects",
      icon: Users,
      services: ["Math Support", "Writing Center", "Science Lab", "Language Arts"]
    },
    {
      title: "Student Health Center",
      description: "On-campus health and wellness services",
      icon: Heart,
      services: ["First Aid", "Health Screenings", "Wellness Programs", "Mental Health Support"]
    },
    {
      title: "Library & Media Center",
      description: "Research and study resources",
      icon: Star,
      services: ["Study Spaces", "Research Help", "Technology Access", "Digital Resources"]
    }
  ];

  const filteredActivities = activeCategory === 'all' 
    ? [...sportsPrograms, ...clubs]
    : clubs.filter(club => club.category === activeCategory);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-orange-600 to-orange-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Student Life
            </h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Discover endless opportunities for growth, leadership, and friendship through our 
              comprehensive sports programs, clubs, and activities.
            </p>
          </div>
        </div>
      </section>

      {/* Sports Programs */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Athletics Programs
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {sportsPrograms.map((sport, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-4">
                  <Trophy className="h-8 w-8 text-orange-600 mr-3" />
                  <h3 className="text-xl font-semibold text-gray-900">{sport.name}</h3>
                </div>
                <div className="space-y-2 text-sm text-gray-600">
                  <p><span className="font-medium">Season:</span> {sport.season}</p>
                  <p><span className="font-medium">Levels:</span> {sport.levels.join(', ')}</p>
                  <p><span className="font-medium">Coach:</span> {sport.coach}</p>
                </div>
                <button className="mt-4 w-full bg-orange-600 text-white py-2 px-4 rounded-lg hover:bg-orange-700 transition-colors">
                  Learn More
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clubs and Activities */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Clubs & Activities
          </h2>
          
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {['all', 'academic', 'arts', 'leadership', 'service'].map(category => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  activeCategory === category
                    ? 'bg-orange-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {(activeCategory === 'all' ? clubs : clubs.filter(club => club.category === activeCategory)).map((club, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{club.name}</h3>
                <p className="text-gray-600 mb-4">{club.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">Advisor: {club.advisor}</span>
                  <span className="bg-orange-100 text-orange-800 text-xs px-2 py-1 rounded">
                    {club.category}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Student Achievements */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Student Achievements
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6 border-l-4 border-orange-600">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-gray-900">{achievement.title}</h3>
                  <span className="bg-orange-100 text-orange-800 text-xs px-2 py-1 rounded">
                    {achievement.category}
                  </span>
                </div>
                <p className="text-gray-600 mb-3">{achievement.description}</p>
                <div className="flex items-center text-sm text-gray-500">
                  <Calendar className="h-4 w-4 mr-1" />
                  {achievement.date}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Photo Gallery
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {galleryImages.map((image, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="bg-gray-200 h-48 flex items-center justify-center">
                  <Camera className="h-12 w-12 text-gray-400" />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">{image.title}</h3>
                  <span className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">
                    {image.category}
                  </span>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <button className="bg-orange-600 text-white px-8 py-3 rounded-lg hover:bg-orange-700 transition-colors">
              View Full Gallery
            </button>
          </div>
        </div>
      </section>

      {/* Student Resources */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Student Support Services
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {resources.map((resource, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <resource.icon className="h-8 w-8 text-orange-600 mr-3" />
                  <h3 className="text-xl font-semibold text-gray-900">{resource.title}</h3>
                </div>
                <p className="text-gray-600 mb-4">{resource.description}</p>
                <div className="space-y-2">
                  {resource.services.map((service, idx) => (
                    <div key={idx} className="flex items-center text-sm text-gray-600">
                      <div className="w-2 h-2 bg-orange-600 rounded-full mr-2"></div>
                      {service}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default StudentLife;