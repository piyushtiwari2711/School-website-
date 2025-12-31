import React, { useEffect, useRef } from 'react';

const NewsList = () => {
  const scrollRef = useRef(null);
  const newsItems = [
    {
      title: "Annual Sports Day 2024",
      date: "March 15, 2024",
      excerpt: "Join us for our annual sports day celebration with various competitions and activities.",
      category: "Events",
      image: "https://images.pexels.com/photos/159740/library-la-trobe-study-students-159740.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      title: "Science Exhibition Success",
      date: "March 12, 2024",
      excerpt: "Our students showcased innovative projects at the inter-school science exhibition.",
      category: "Academics",
      image: "https://images.pexels.com/photos/256541/pexels-photo-256541.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      title: "New Computer Lab Inauguration",
      date: "March 10, 2024",
      excerpt: "State-of-the-art computer laboratory with latest technology now open for students.",
      category: "Infrastructure",
      image: "https://images.pexels.com/photos/159844/cellular-education-classroom-159844.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      title: "New Computer Lab Inauguration",
      date: "March 10, 2024",
      excerpt: "State-of-the-art computer laboratory with latest technology now open for students.",
      category: "Infrastructure",
      image: "https://images.pexels.com/photos/159844/cellular-education-classroom-159844.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      title: "New Computer Lab Inauguration",
      date: "March 10, 2024",
      excerpt: "State-of-the-art computer laboratory with latest technology now open for students.",
      category: "Infrastructure",
      image: "https://images.pexels.com/photos/159844/cellular-education-classroom-159844.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      title: "New Computer Lab Inauguration",
      date: "March 10, 2024",
      excerpt: "State-of-the-art computer laboratory with latest technology now open for students.",
      category: "Infrastructure",
      image: "https://images.pexels.com/photos/159844/cellular-education-classroom-159844.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      title: "New Computer Lab Inauguration",
      date: "March 10, 2024",
      excerpt: "State-of-the-art computer laboratory with latest technology now open for students.",
      category: "Infrastructure",
      image: "https://images.pexels.com/photos/159844/cellular-education-classroom-159844.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      title: "New Computer Lab Inauguration",
      date: "March 10, 2024",
      excerpt: "State-of-the-art computer laboratory with latest technology now open for students.",
      category: "Infrastructure",
      image: "https://images.pexels.com/photos/159844/cellular-education-classroom-159844.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      title: "New Computer Lab Inauguration",
      date: "March 10, 2024",
      excerpt: "State-of-the-art computer laboratory with latest technology now open for students.",
      category: "Infrastructure",
      image: "https://images.pexels.com/photos/159844/cellular-education-classroom-159844.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      title: "New Computer Lab Inauguration",
      date: "March 10, 2024",
      excerpt: "State-of-the-art computer laboratory with latest technology now open for students.",
      category: "Infrastructure",
      image: "https://images.pexels.com/photos/159844/cellular-education-classroom-159844.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
  ];
  useEffect(() => {
    const container = scrollRef.current;

    const scrollSpeed = 1; // pixels per frame
    const intervalDelay = 20; // ms

    const scrollInterval = setInterval(() => {
      if (container) {
        // Scroll down
        container.scrollTop += scrollSpeed;

        // If reached bottom, scroll back to top
        if (container.scrollTop + container.clientHeight >= container.scrollHeight) {
          container.scrollTop = 0;
        }
      }
    }, intervalDelay);

    return () => clearInterval(scrollInterval); // Cleanup on unmount
  }, []);

  return (
    <div ref={scrollRef} className="space-y-6 h-[80%] overflow-y-auto scroll-auto">
      {newsItems.map((item, index) => (
        <div key={index} className="bg-gray-50 rounded-xl overflow-hidden hover:shadow-lg transition-shadow duration-300">
          <div className="md:flex">
            <div className="md:w-1/3">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-48 md:h-full object-cover"
              />
            </div>
            <div className="md:w-2/3 p-6">
              <div className="flex items-center space-x-2 mb-3">
                <span className="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full font-medium">
                  {item.category}
                </span>
                <span className="text-sm text-gray-500">{item.date}</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 hover:text-blue-600 transition-colors cursor-pointer">
                {item.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">{item.excerpt}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NewsList;
