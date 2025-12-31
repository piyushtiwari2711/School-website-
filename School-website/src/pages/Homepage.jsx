import React from 'react';
import { Calendar, ChevronRight, BookOpen, ArrowRight, Play } from 'lucide-react';
import Slider from '../components/Slider';
import AchievementSlider from '../components/AchievementSlider';
import NewsList from '../components/NewList';

const Homepage = () => {
  const herosection = [
    <section className="relative text-white flex px-10 py-4 h-[70vh]">
      <div className="absolute top-0 left-0 w-full h-full -inset-50 opacity-80 backdrop-blur-sm" style={{ backgroundImage: "url('https://images.pexels.com/photos/159844/cellular-education-classroom-159844.jpeg?auto=compress&cs=tinysrgb&w=800')", backgroundSize: 'cover', backgroundPosition: 'center' }} />
      <div className="flex flex-col gap-4 justify-center relative inset-5">
        <h1 className="text-4xl font-bold leading-tight">
          Nurturing
          <span className="block text-yellow-400">Excellence</span>
          <span className="block">Since 1985</span>
        </h1>
        <p className="text-lg text-black leading-relaxed w-[80%]">
          At DAV Sreshtha Vihar, we believe in holistic education that shapes character,
          builds knowledge, and prepares students for a bright future.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <button className="bg-yellow-500 text-black px-8 py-4 rounded-lg font-semibold hover:bg-yellow-400 transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
            <Play className="h-5 w-5 mr-2" />
            Take Virtual Tour
          </button>
          <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-all duration-300 flex items-center justify-center">
            Apply for Admission
            <ArrowRight className="h-5 w-5 ml-2" />
          </button>
        </div>
      </div>

      <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-4 h-full flex flex-col gap-4">
        <img
          src="https://images.pexels.com/photos/159844/cellular-education-classroom-159844.jpeg?auto=compress&cs=tinysrgb&w=800"
          alt="School Campus"
          className="w-full h-[75%] object-cover rounded-xl"
        />
        <div className="space-y-1 text-blue-500 h-[25%]">
          <h3 className="text-2xl font-bold ">Modern Learning Environment</h3>
          <p className="text-gray-600">
            Experience world-class education in our state-of-the-art facilities designed for 21st-century learning.
          </p>
        </div>
      </div>
    </section>,
    <img src="http://davpakhowal.com/File/3503/dav%202022.JPG" alt="no image" className='h-[70vh] w-full object-cover' />,
    <img src="https://www.ptotoday.com/images/articles/body/0319-school-events-you-love-most-curriculum-body.jpg" alt="no image" className='h-[70vh] w-full object-cover' />,

  ]

  const upcomingEvents = [
    { date: "25", month: "MAR", event: "Parent-Teacher Meeting", time: "10:00 AM - 4:00 PM" },
    { date: "02", month: "APR", event: "Annual Day Celebration", time: "6:00 PM - 9:00 PM" },
    { date: "15", month: "APR", event: "Inter-House Competition", time: "9:00 AM - 3:00 PM" },
    { date: "22", month: "APR", event: "Educational Trip", time: "7:00 AM - 6:00 PM" }
  ];

  const facilities = [
    {
      title: "Smart Classrooms",
      description: "Interactive learning with modern technology",
      image: "https://images.pexels.com/photos/159844/cellular-education-classroom-159844.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      title: "Science Laboratories",
      description: "Well-equipped labs for practical learning",
      image: "https://images.pexels.com/photos/256541/pexels-photo-256541.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      title: "Sports Complex",
      description: "Indoor and outdoor sports facilities",
      image: "https://images.pexels.com/photos/163444/sport-treadmill-tor-route-163444.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      title: "Library & Media Center",
      description: "Extensive collection of books and digital resources",
      image: "https://images.pexels.com/photos/159740/library-la-trobe-study-students-159740.jpeg?auto=compress&cs=tinysrgb&w=600"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <Slider space={0} view={1} data={herosection} />

      {/* Principal's Message */}
      <section className="py-8 px-10 bg-gray-50 flex gap-10 h-[70vh]">
        <img
          src="https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="Principal"
          className="w-[30%] h-full object-cover rounded-xl"
        />

        <div className="space-y-5">
          <div className="space-y-1">
            <h2 className="text-4xl font-bold text-gray-900">
              Message from Our Principal
            </h2>
            <div className="w-20 h-1 bg-yellow-500"></div>
          </div>

          <div className="space-y-1.5 text-lg text-gray-600 leading-relaxed">
            <p>
              "Welcome to DAV Sreshtha Vihar, where we believe that every child is unique and has the potential to excel. Our commitment is to provide a nurturing environment that fosters academic excellence, character development, and holistic growth."
            </p>
            <p>
              "With our experienced faculty, modern infrastructure, and innovative teaching methodologies, we prepare our students not just for examinations, but for life itself. We instill values of integrity, compassion, and leadership that will guide them throughout their journey."
            </p>
          </div>

          <div className="">
            <div className="text-xl font-bold text-gray-900">Dr. Priya Sharma</div>
            <div className="text-blue-600 font-medium">Principal</div>
            <div className="text-gray-500">M.Ed., Ph.D. in Education</div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-8 px-10 bg-blue-900 text-white">
        <div className="text-center mb-4">
          <h2 className="text-4xl font-bold mb-1">Our Achievements</h2>
          <div className="w-40 h-1 bg-yellow-500 mx-auto rounded-xl"></div>
        </div>
        <AchievementSlider />
      </section>

      {/* News and Events */}
      <section className="py-8 px-10 bg-white h-[80vh] flex gap-6">
        {/* Latest News */}
        <div className="w-[70%]">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900">Latest News</h2>
              <div className="w-16 h-1 bg-yellow-500 mt-2"></div>
            </div>
            <button className="text-blue-600 font-semibold hover:text-blue-800 transition-colors flex items-center">
              View All <ChevronRight className="h-4 w-4 ml-1" />
            </button>
          </div>
          <NewsList />
        </div>

        {/* Upcoming Events */}
        <div className='w-[30%] flex flex-col justify-between items-center'>
          <div className="">
            <h2 className="text-3xl font-bold text-gray-900">Upcoming Events</h2>
            <div className="w-16 h-1 bg-yellow-500 mt-2"></div>
          </div>

          <div className="space-y-3 h-[70%] overflow-y-auto">
            {upcomingEvents.map((event, index) => (
              <div key={index} className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl px-6 py-2 hover:shadow-md transition-shadow duration-300">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-600 text-white rounded-lg p-2 text-center min-w-[60px]">
                    <div className="text-sm font-bold">{event.date}</div>
                    <div className="text-xs">{event.month}</div>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-900 mb-1">{event.event}</h3>
                    <p className="text-sm text-gray-600 flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {event.time}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
            View Full Calendar
          </button>
        </div>
      </section>

      {/* Facilities */}
      <section className="py-8 px-10 bg-gray-200 relative">
        <div className="text-center mb-6">
          <h2 className="text-4xl font-bold text-gray-900 mb-2">Gallery</h2>
          <div className="w-20 h-1 bg-yellow-500 rounded-xl mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {facilities.map((facility, index) => (
            <div key={index} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group">
              <img
                src={facility.image}
                alt={facility.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{facility.title}</h3>
                <p className="text-gray-600">{facility.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className='absolute top-16 right-10'>
          <button className="hover:underline duration-200">View More</button>
        </div>
      </section>
    </div>
  );
};

export default Homepage;