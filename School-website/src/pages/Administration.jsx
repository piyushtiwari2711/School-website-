import React, { useState } from 'react';
import { Users, FileText, Calendar, Phone, Mail, MapPin, Clock, Building } from 'lucide-react';

const Administration = () => {
  const [activeTab, setActiveTab] = useState('enrollment');

  const staffMembers = [
    {
      name: "Dr. Sarah Johnson",
      position: "Principal",
      department: "Administration",
      phone: "(555) 123-4567",
      email: "s.johnson@riverside.edu",
      image: null
    },
    {
      name: "Michael Chen",
      position: "Vice Principal",
      department: "Administration",
      phone: "(555) 123-4568",
      email: "m.chen@riverside.edu",
      image: null
    },
    {
      name: "Dr. Emily Rodriguez",
      position: "Curriculum Director",
      department: "Academics",
      phone: "(555) 123-4569",
      email: "e.rodriguez@riverside.edu",
      image: null
    },
    {
      name: "James Wilson",
      position: "Dean of Students",
      department: "Student Services",
      phone: "(555) 123-4570",
      email: "j.wilson@riverside.edu",
      image: null
    },
    {
      name: "Lisa Park",
      position: "Registrar",
      department: "Academic Records",
      phone: "(555) 123-4571",
      email: "l.park@riverside.edu",
      image: null
    },
    {
      name: "David Thompson",
      position: "Activities Director",
      department: "Student Life",
      phone: "(555) 123-4572",
      email: "d.thompson@riverside.edu",
      image: null
    }
  ];

  const departments = [
    {
      name: "Main Office",
      location: "Building A, Room 101",
      hours: "7:30 AM - 4:30 PM",
      phone: "(555) 123-4567",
      services: ["General Information", "Enrollment", "Records"]
    },
    {
      name: "Guidance Office",
      location: "Building B, Room 205",
      hours: "8:00 AM - 4:00 PM",
      phone: "(555) 123-4580",
      services: ["Academic Counseling", "College Planning", "Career Guidance"]
    },
    {
      name: "Health Office",
      location: "Building A, Room 115",
      hours: "8:00 AM - 3:30 PM",
      phone: "(555) 123-4585",
      services: ["First Aid", "Medication Management", "Health Records"]
    },
    {
      name: "Transportation",
      location: "Building C, Room 102",
      hours: "7:00 AM - 4:00 PM",
      phone: "(555) 123-4590",
      services: ["Bus Routes", "Transportation Forms", "Route Changes"]
    }
  ];

  const forms = [
    {
      category: "Enrollment",
      documents: [
        "New Student Registration Form",
        "Emergency Contact Information",
        "Medical History Form",
        "Transportation Request Form"
      ]
    },
    {
      category: "Academic",
      documents: [
        "Course Change Request",
        "Grade Report Request",
        "Transcript Request",
        "Graduation Requirements Checklist"
      ]
    },
    {
      category: "Student Life",
      documents: [
        "Activity Registration Form",
        "Sports Physical Form",
        "Field Trip Permission Slip",
        "Volunteer Application"
      ]
    },
    {
      category: "General",
      documents: [
        "Address Change Form",
        "Early Dismissal Request",
        "Absence Excuse Form",
        "Technology Use Agreement"
      ]
    }
  ];

  const EnrollmentTab = () => (
    <div className="space-y-8">
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-2xl font-bold text-gray-900 mb-6">Online Enrollment System</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="text-lg font-semibold text-gray-900 mb-4">New Students</h4>
            <p className="text-gray-600 mb-4">
              Welcome to Riverside Academy! Our online enrollment system makes it easy to register your child for classes.
            </p>
            <ul className="space-y-2 text-sm text-gray-600 mb-6">
              <li>• Complete application online</li>
              <li>• Upload required documents</li>
              <li>• Schedule enrollment appointment</li>
              <li>• Pay registration fees</li>
            </ul>
            <button className="bg-blue-700 text-white px-6 py-2 rounded-lg hover:bg-blue-800 transition-colors">
              Start New Enrollment
            </button>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-gray-900 mb-4">Returning Students</h4>
            <p className="text-gray-600 mb-4">
              Update your information and complete re-enrollment for the upcoming school year.
            </p>
            <ul className="space-y-2 text-sm text-gray-600 mb-6">
              <li>• Update contact information</li>
              <li>• Review emergency contacts</li>
              <li>• Select courses and activities</li>
              <li>• Complete health forms</li>
            </ul>
            <button className="bg-green-700 text-white px-6 py-2 rounded-lg hover:bg-green-800 transition-colors">
              Re-enrollment Portal
            </button>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-4">Enrollment Requirements</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">Required Documents</h4>
            <ul className="space-y-1 text-sm text-gray-600">
              <li>• Birth Certificate</li>
              <li>• Proof of Residency</li>
              <li>• Immunization Records</li>
              <li>• Previous School Records</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">Important Dates</h4>
            <ul className="space-y-1 text-sm text-gray-600">
              <li>• Early Enrollment: Feb 1-15</li>
              <li>• Regular Enrollment: Mar 1-31</li>
              <li>• Late Enrollment: Apr 1-30</li>
              <li>• Final Deadline: May 15</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">Contact Information</h4>
            <ul className="space-y-1 text-sm text-gray-600">
              <li>• Phone: (555) 123-4567</li>
              <li>• Email: enrollment@riverside.edu</li>
              <li>• Office Hours: 8 AM - 4 PM</li>
              <li>• Location: Building A, Room 101</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );

  const StaffTab = () => (
    <div className="space-y-8">
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-2xl font-bold text-gray-900 mb-6">Staff Directory</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {staffMembers.map((staff, index) => (
            <div key={index} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center">
                  <Users className="h-8 w-8 text-gray-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">{staff.name}</h4>
                  <p className="text-sm text-gray-600">{staff.position}</p>
                  <p className="text-xs text-gray-500">{staff.department}</p>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center text-sm text-gray-600">
                  <Phone className="h-4 w-4 mr-2" />
                  {staff.phone}
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Mail className="h-4 w-4 mr-2" />
                  {staff.email}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-6">Department Information</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {departments.map((dept, index) => (
            <div key={index} className="border border-gray-200 rounded-lg p-4">
              <h4 className="font-semibold text-gray-900 mb-2">{dept.name}</h4>
              <div className="space-y-2 text-sm text-gray-600">
                <div className="flex items-center">
                  <MapPin className="h-4 w-4 mr-2" />
                  {dept.location}
                </div>
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-2" />
                  {dept.hours}
                </div>
                <div className="flex items-center">
                  <Phone className="h-4 w-4 mr-2" />
                  {dept.phone}
                </div>
                <div className="mt-3">
                  <p className="font-medium text-gray-900 mb-1">Services:</p>
                  <ul className="list-disc list-inside text-xs text-gray-600 space-y-1">
                    {dept.services.map((service, idx) => (
                      <li key={idx}>{service}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const FormsTab = () => (
    <div className="space-y-8">
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-2xl font-bold text-gray-900 mb-6">Forms & Documents</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {forms.map((category, index) => (
            <div key={index} className="border border-gray-200 rounded-lg p-4">
              <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <FileText className="h-5 w-5 mr-2 text-blue-700" />
                {category.category}
              </h4>
              <ul className="space-y-2">
                {category.documents.map((doc, idx) => (
                  <li key={idx} className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">{doc}</span>
                    <button className="text-blue-700 hover:text-blue-800 text-sm font-medium">
                      Download
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-4">Document Submission</h3>
        <div className="bg-gray-50 p-4 rounded-lg">
          <p className="text-gray-600 mb-4">
            Submit completed forms and documents through our secure online portal or deliver them to the main office.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-blue-700 text-white px-6 py-2 rounded-lg hover:bg-blue-800 transition-colors">
              Upload Documents
            </button>
            <button className="border border-gray-300 text-gray-700 px-6 py-2 rounded-lg hover:bg-gray-50 transition-colors">
              Track Submission Status
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  const CalendarTab = () => (
    <div className="space-y-8">
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-2xl font-bold text-gray-900 mb-6">School Calendar & Schedules</h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <h4 className="text-lg font-semibold text-gray-900 mb-4">Daily Schedule</h4>
            <div className="space-y-3">
              <div className="flex justify-between items-center py-2 border-b border-gray-200">
                <span className="text-gray-700">First Bell</span>
                <span className="font-medium">7:45 AM</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-gray-200">
                <span className="text-gray-700">Classes Begin</span>
                <span className="font-medium">8:00 AM</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-gray-200">
                <span className="text-gray-700">Lunch Period</span>
                <span className="font-medium">12:00 PM - 1:00 PM</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-gray-200">
                <span className="text-gray-700">Classes End</span>
                <span className="font-medium">3:15 PM</span>
              </div>
              <div className="flex justify-between items-center py-2">
                <span className="text-gray-700">After School Activities</span>
                <span className="font-medium">3:30 PM - 5:00 PM</span>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-gray-900 mb-4">Upcoming Events</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                <div className="text-center">
                  <div className="text-sm font-medium text-blue-700">MAR</div>
                  <div className="text-lg font-bold text-gray-900">20</div>
                </div>
                <div>
                  <p className="font-medium text-gray-900">Parent-Teacher Conferences</p>
                  <p className="text-sm text-gray-600">3:00 PM - 8:00 PM</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                <div className="text-center">
                  <div className="text-sm font-medium text-blue-700">MAR</div>
                  <div className="text-lg font-bold text-gray-900">25</div>
                </div>
                <div>
                  <p className="font-medium text-gray-900">Spring Break Begins</p>
                  <p className="text-sm text-gray-600">All Day</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                <div className="text-center">
                  <div className="text-sm font-medium text-blue-700">APR</div>
                  <div className="text-lg font-bold text-gray-900">15</div>
                </div>
                <div>
                  <p className="font-medium text-gray-900">Science Fair</p>
                  <p className="text-sm text-gray-600">10:00 AM - 4:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-purple-700 to-purple-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Administration
            </h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Access enrollment services, staff directory, forms, and administrative information 
              to support your educational journey at Riverside Academy.
            </p>
          </div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <section className="bg-white border-b border-gray-200 sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex space-x-8">
            {[
              { id: 'enrollment', label: 'Enrollment', icon: Users },
              { id: 'staff', label: 'Staff Directory', icon: Users },
              { id: 'forms', label: 'Forms & Documents', icon: FileText },
              { id: 'calendar', label: 'Calendar & Schedules', icon: Calendar }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                  activeTab === tab.id
                    ? 'border-purple-500 text-purple-600'
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
          {activeTab === 'enrollment' && <EnrollmentTab />}
          {activeTab === 'staff' && <StaffTab />}
          {activeTab === 'forms' && <FormsTab />}
          {activeTab === 'calendar' && <CalendarTab />}
        </div>
      </section>
    </div>
  );
};

export default Administration;