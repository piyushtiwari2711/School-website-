import React, { useState } from 'react';
import { MessageCircle, Calendar, CreditCard, Bus, Users, Phone, Mail, Shield, Clock, FileText } from 'lucide-react';

const ParentResources = () => {
  const [activeTab, setActiveTab] = useState('communication');

  const communicationTools = [
    {
      title: "Parent-Teacher Portal",
      description: "Direct messaging with teachers and staff",
      icon: MessageCircle,
      features: ["Real-time messaging", "Grade updates", "Assignment notifications", "Conference scheduling"]
    },
    {
      title: "School Newsletter",
      description: "Weekly updates and important announcements",
      icon: Mail,
      features: ["Weekly digest", "Event reminders", "Policy updates", "Academic highlights"]
    },
    {
      title: "Emergency Alerts",
      description: "Instant notifications for urgent matters",
      icon: Shield,
      features: ["SMS alerts", "Email notifications", "Weather closures", "Safety updates"]
    },
    {
      title: "Calendar Integration",
      description: "Sync school events with your personal calendar",
      icon: Calendar,
      features: ["Event reminders", "Assignment due dates", "Conference times", "Activity schedules"]
    }
  ];

  const lunchMenus = [
    {
      day: "Monday",
      entrees: ["Grilled Chicken Sandwich", "Vegetable Pasta", "Garden Salad Bar"],
      sides: ["Sweet Potato Fries", "Steamed Broccoli", "Fresh Fruit"],
      allergens: ["Gluten-Free Options Available"]
    },
    {
      day: "Tuesday",
      entrees: ["Beef Tacos", "Quinoa Bowl", "Chicken Caesar Salad"],
      sides: ["Black Beans", "Corn Salad", "Yogurt Parfait"],
      allergens: ["Dairy-Free Options Available"]
    },
    {
      day: "Wednesday",
      entrees: ["Pizza Day", "Grilled Salmon", "Mediterranean Wrap"],
      sides: ["Garlic Breadsticks", "Roasted Vegetables", "Apple Slices"],
      allergens: ["Nut-Free Kitchen"]
    },
    {
      day: "Thursday",
      entrees: ["Chicken Teriyaki", "Veggie Burger", "Chef's Salad"],
      sides: ["Jasmine Rice", "Steamed Edamame", "Orange Wedges"],
      allergens: ["Vegan Options Available"]
    },
    {
      day: "Friday",
      entrees: ["Fish & Chips", "Turkey Sub", "Asian Noodle Bowl"],
      sides: ["Coleslaw", "Baked Beans", "Mixed Berries"],
      allergens: ["Gluten-Free Options Available"]
    }
  ];

  const transportationRoutes = [
    {
      route: "Route 1 - Downtown",
      stops: ["Main & 1st", "Library", "City Hall", "Community Center"],
      times: ["7:15 AM", "7:20 AM", "7:25 AM", "7:30 AM"],
      pickup: "7:45 AM",
      dropoff: "3:30 PM"
    },
    {
      route: "Route 2 - Northside",
      stops: ["Oak Park", "Northside Mall", "Elm Street", "Riverside Park"],
      times: ["7:10 AM", "7:15 AM", "7:20 AM", "7:25 AM"],
      pickup: "7:40 AM",
      dropoff: "3:35 PM"
    },
    {
      route: "Route 3 - Westside",
      stops: ["West Plaza", "Sunset Ave", "Maple Grove", "Westfield"],
      times: ["7:05 AM", "7:12 AM", "7:18 AM", "7:25 AM"],
      pickup: "7:35 AM",
      dropoff: "3:40 PM"
    }
  ];

  const parentOrganization = {
    officers: [
      { name: "Jennifer Smith", position: "President", email: "j.smith@email.com" },
      { name: "Michael Davis", position: "Vice President", email: "m.davis@email.com" },
      { name: "Sarah Johnson", position: "Treasurer", email: "s.johnson@email.com" },
      { name: "Lisa Chen", position: "Secretary", email: "l.chen@email.com" }
    ],
    meetings: [
      { date: "March 15, 2024", time: "7:00 PM", location: "School Library" },
      { date: "April 12, 2024", time: "7:00 PM", location: "School Cafeteria" },
      { date: "May 10, 2024", time: "7:00 PM", location: "School Library" }
    ],
    initiatives: [
      "Fundraising for new playground equipment",
      "Teacher appreciation events",
      "Family fun nights and activities",
      "Volunteer coordination for school events"
    ]
  };

  const CommunicationTab = () => (
    <div className="space-y-8">
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-2xl font-bold text-gray-900 mb-6">Communication Tools</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {communicationTools.map((tool, index) => (
            <div key={index} className="border border-gray-200 rounded-lg p-4">
              <div className="flex items-center mb-4">
                <tool.icon className="h-6 w-6 text-blue-600 mr-3" />
                <h4 className="text-lg font-semibold text-gray-900">{tool.title}</h4>
              </div>
              <p className="text-gray-600 mb-4">{tool.description}</p>
              <ul className="space-y-2">
                {tool.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm text-gray-600">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-2"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-4">Contact Information</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">Main Office</h4>
            <div className="space-y-2 text-sm text-gray-600">
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-2" />
                (555) 123-4567
              </div>
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-2" />
                info@riverside.edu
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-2" />
                Monday - Friday: 7:30 AM - 4:30 PM
              </div>
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">Emergency Contact</h4>
            <div className="space-y-2 text-sm text-gray-600">
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-2" />
                (555) 123-4599 (24/7)
              </div>
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-2" />
                emergency@riverside.edu
              </div>
              <div className="text-red-600 font-medium">
                For urgent matters outside school hours
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const LunchTab = () => (
    <div className="space-y-8">
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-2xl font-bold text-gray-900 mb-6">This Week's Lunch Menu</h3>
        <div className="space-y-4">
          {lunchMenus.map((day, index) => (
            <div key={index} className="border border-gray-200 rounded-lg p-4">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">{day.day}</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <h5 className="font-medium text-gray-900 mb-2">Entrees</h5>
                  <ul className="space-y-1 text-sm text-gray-600">
                    {day.entrees.map((entree, idx) => (
                      <li key={idx}>• {entree}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h5 className="font-medium text-gray-900 mb-2">Sides</h5>
                  <ul className="space-y-1 text-sm text-gray-600">
                    {day.sides.map((side, idx) => (
                      <li key={idx}>• {side}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h5 className="font-medium text-gray-900 mb-2">Special Notes</h5>
                  <ul className="space-y-1 text-sm text-green-600">
                    {day.allergens.map((allergen, idx) => (
                      <li key={idx}>• {allergen}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-4">Lunch Account Management</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">Account Balance</h4>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-2xl font-bold text-green-600">$45.50</p>
              <p className="text-sm text-gray-600">Current balance</p>
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">Add Funds</h4>
            <div className="space-y-2">
              <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors">
                Add $20
              </button>
              <button className="w-full bg-gray-200 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-300 transition-colors">
                Custom Amount
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const TransportationTab = () => (
    <div className="space-y-8">
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-2xl font-bold text-gray-900 mb-6">Transportation Information</h3>
        <div className="space-y-6">
          {transportationRoutes.map((route, index) => (
            <div key={index} className="border border-gray-200 rounded-lg p-4">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">{route.route}</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h5 className="font-medium text-gray-900 mb-2">Stops & Times</h5>
                  <div className="space-y-2">
                    {route.stops.map((stop, idx) => (
                      <div key={idx} className="flex justify-between text-sm">
                        <span className="text-gray-600">{stop}</span>
                        <span className="text-gray-900 font-medium">{route.times[idx]}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h5 className="font-medium text-gray-900 mb-2">School Times</h5>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">School Pickup:</span>
                      <span className="text-gray-900 font-medium">{route.pickup}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">School Dropoff:</span>
                      <span className="text-gray-900 font-medium">{route.dropoff}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-4">Transportation Services</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">Route Changes</h4>
            <p className="text-gray-600 mb-4">
              Need to make changes to your child's transportation? Submit a request 48 hours in advance.
            </p>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
              Request Route Change
            </button>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">Bus Safety</h4>
            <p className="text-gray-600 mb-4">
              Learn about bus safety rules and procedures for student transportation.
            </p>
            <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-300 transition-colors">
              Safety Guidelines
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  const ParentOrgTab = () => (
    <div className="space-y-8">
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-2xl font-bold text-gray-900 mb-6">Parent Organization</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h4 className="text-lg font-semibold text-gray-900 mb-4">Officers</h4>
            <div className="space-y-4">
              {parentOrganization.officers.map((officer, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div>
                    <p className="font-medium text-gray-900">{officer.name}</p>
                    <p className="text-sm text-gray-600">{officer.position}</p>
                  </div>
                  <a href={`mailto:${officer.email}`} className="text-blue-600 hover:text-blue-700">
                    <Mail className="h-4 w-4" />
                  </a>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-gray-900 mb-4">Upcoming Meetings</h4>
            <div className="space-y-3">
              {parentOrganization.meetings.map((meeting, index) => (
                <div key={index} className="p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center mb-2">
                    <Calendar className="h-4 w-4 text-blue-600 mr-2" />
                    <span className="font-medium text-gray-900">{meeting.date}</span>
                  </div>
                  <p className="text-sm text-gray-600">{meeting.time} - {meeting.location}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-4">Current Initiatives</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {parentOrganization.initiatives.map((initiative, index) => (
            <div key={index} className="p-4 border border-gray-200 rounded-lg">
              <div className="flex items-center">
                <Users className="h-5 w-5 text-blue-600 mr-2" />
                <span className="text-gray-900">{initiative}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const EmergencyTab = () => (
    <div className="space-y-8">
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-2xl font-bold text-gray-900 mb-6">Emergency Procedures</h3>
        <div className="space-y-6">
          <div className="bg-red-50 border border-red-200 rounded-lg p-4">
            <h4 className="text-lg font-semibold text-red-900 mb-2">Emergency Contacts</h4>
            <div className="space-y-2 text-sm">
              <div className="flex items-center">
                <Phone className="h-4 w-4 text-red-600 mr-2" />
                <span className="text-red-900">Emergency Line: (555) 123-4599</span>
              </div>
              <div className="flex items-center">
                <Shield className="h-4 w-4 text-red-600 mr-2" />
                <span className="text-red-900">Security: (555) 123-4580</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-gray-900 mb-3">Weather Closures</h4>
              <p className="text-gray-600 mb-4">
                School closure decisions are made by 5:00 AM and communicated through:
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• School website and social media</li>
                <li>• Local news stations</li>
                <li>• Emergency alert system</li>
                <li>• Parent notification app</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-gray-900 mb-3">Safety Protocols</h4>
              <p className="text-gray-600 mb-4">
                Our comprehensive safety measures include:
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Secure building access</li>
                <li>• Regular safety drills</li>
                <li>• Emergency response team</li>
                <li>• Crisis communication plan</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-teal-600 to-teal-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Parent Resources
            </h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Everything you need to stay connected with your child's education, 
              from communication tools to lunch menus and transportation information.
            </p>
          </div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <section className="bg-white border-b border-gray-200 sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex space-x-8">
            {[
              { id: 'communication', label: 'Communication', icon: MessageCircle },
              { id: 'lunch', label: 'Lunch & Payments', icon: CreditCard },
              { id: 'transportation', label: 'Transportation', icon: Bus },
              { id: 'parent-org', label: 'Parent Organization', icon: Users },
              { id: 'emergency', label: 'Emergency Info', icon: Shield }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                  activeTab === tab.id
                    ? 'border-teal-500 text-teal-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                <tab.icon className="h-4 w-4" />
                <span>{tab.label}</span>
              </button>
            ))}
          </nav>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {activeTab === 'communication' && <CommunicationTab />}
          {activeTab === 'lunch' && <LunchTab />}
          {activeTab === 'transportation' && <TransportationTab />}
          {activeTab === 'parent-org' && <ParentOrgTab />}
          {activeTab === 'emergency' && <EmergencyTab />}
        </div>
      </section>
    </div>
  );
};

export default ParentResources;