import React, { useState } from 'react';
import { FileText, Calendar, CreditCard, CheckCircle, Users, Phone, Mail, Download, Upload, Clock } from 'lucide-react';

const Admissions = () => {
  const [selectedClass, setSelectedClass] = useState('nursery');

  const admissionProcess = [
    {
      step: 1,
      title: "Application Form",
      description: "Fill out the online application form with required details",
      icon: FileText
    },
    {
      step: 2,
      title: "Document Submission",
      description: "Submit all required documents online or at the school office",
      icon: Upload
    },
    {
      step: 3,
      title: "Interaction/Assessment",
      description: "Child interaction for age-appropriate assessment",
      icon: Users
    },
    {
      step: 4,
      title: "Fee Payment",
      description: "Pay admission fee upon selection confirmation",
      icon: CreditCard
    }
  ];

  const admissionClasses = {
    nursery: {
      title: "Nursery (Age 3-4 years)",
      eligibility: "Child should be 3 years old as on March 31st",
      documents: [
        "Birth Certificate",
        "Passport size photographs (4 copies)",
        "Address proof",
        "Parent's ID proof",
        "Medical certificate"
      ],
      fee: "₹25,000",
      seats: "40"
    },
    kg: {
      title: "KG I & II (Age 4-6 years)",
      eligibility: "Child should be 4-5 years old as on March 31st",
      documents: [
        "Birth Certificate",
        "Previous school leaving certificate",
        "Passport size photographs (4 copies)",
        "Address proof",
        "Parent's ID proof",
        "Medical certificate"
      ],
      fee: "₹30,000",
      seats: "35"
    },
    primary: {
      title: "Classes I-V (Age 6-11 years)",
      eligibility: "Age appropriate as per class requirements",
      documents: [
        "Birth Certificate",
        "Transfer Certificate from previous school",
        "Progress Report/Report Card",
        "Passport size photographs (4 copies)",
        "Address proof",
        "Parent's ID proof",
        "Medical certificate"
      ],
      fee: "₹35,000",
      seats: "30"
    },
    middle: {
      title: "Classes VI-VIII (Age 11-14 years)",
      eligibility: "Must have passed previous class with minimum 60%",
      documents: [
        "Birth Certificate",
        "Transfer Certificate",
        "Progress Report/Mark sheets",
        "Character Certificate",
        "Passport size photographs (4 copies)",
        "Address proof",
        "Parent's ID proof",
        "Medical certificate"
      ],
      fee: "₹40,000",
      seats: "25"
    },
    secondary: {
      title: "Classes IX-XII (Age 14-18 years)",
      eligibility: "Must have passed previous class with minimum 70%",
      documents: [
        "Birth Certificate",
        "Transfer Certificate",
        "Mark sheets of previous classes",
        "Character Certificate",
        "Migration Certificate (if applicable)",
        "Passport size photographs (4 copies)",
        "Address proof",
        "Parent's ID proof",
        "Medical certificate"
      ],
      fee: "₹45,000",
      seats: "20"
    }
  };

  const importantDates = [
    { event: "Application Form Release", date: "December 1, 2023", status: "completed" },
    { event: "Last Date for Application", date: "February 15, 2024", status: "upcoming" },
    { event: "Document Verification", date: "February 20-25, 2024", status: "upcoming" },
    { event: "Interaction/Assessment", date: "March 1-10, 2024", status: "upcoming" },
    { event: "Result Declaration", date: "March 15, 2024", status: "upcoming" },
    { event: "Fee Payment Deadline", date: "March 25, 2024", status: "upcoming" }
  ];

  const feeStructure = [
    { particular: "Admission Fee", amount: "₹5,000", frequency: "One Time" },
    { particular: "Tuition Fee", amount: "₹3,000", frequency: "Monthly" },
    { particular: "Development Fee", amount: "₹2,000", frequency: "Quarterly" },
    { particular: "Activity Fee", amount: "₹1,500", frequency: "Monthly" },
    { particular: "Transport Fee", amount: "₹2,500", frequency: "Monthly" },
    { particular: "Examination Fee", amount: "₹1,000", frequency: "Half Yearly" }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-700 via-purple-600 to-purple-500 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">Admissions 2026-27</h1>
            <div className="w-24 h-1 bg-yellow-400 mx-auto mb-8"></div>
            <p className="text-xl text-purple-100 max-w-4xl mx-auto leading-relaxed">
              Join our family of learners and embark on a journey of academic excellence, 
              character development, and holistic growth.
            </p>
            <div className="mt-8">
              <button className="bg-yellow-500 text-purple-900 px-8 py-4 rounded-lg font-semibold hover:bg-yellow-400 transition-all duration-300 transform hover:scale-105">
                Apply Now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Admission Process */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Admission Process</h2>
            <div className="w-20 h-1 bg-yellow-500 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Simple and transparent admission process designed for your convenience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {admissionProcess.map((process, index) => (
              <div key={index} className="relative">
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
                  <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                    <process.icon className="h-8 w-8 text-purple-600" />
                  </div>
                  <div className="bg-purple-600 text-white w-8 h-8 rounded-full flex items-center justify-center mx-auto mb-4 text-sm font-bold">
                    {process.step}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{process.title}</h3>
                  <p className="text-gray-600">{process.description}</p>
                </div>
                {index < admissionProcess.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <div className="w-8 h-0.5 bg-purple-300"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Class-wise Information */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Class-wise Admission Details</h2>
            <div className="w-20 h-1 bg-yellow-500 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Detailed information for each class level
            </p>
          </div>

          {/* Class Selector */}
          <div className="flex flex-wrap justify-center mb-12 gap-4">
            {Object.entries(admissionClasses).map(([key, classInfo]) => (
              <button
                key={key}
                onClick={() => setSelectedClass(key)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  selectedClass === key
                    ? 'bg-purple-600 text-white shadow-lg transform scale-105'
                    : 'bg-white text-gray-700 hover:bg-purple-50 hover:text-purple-600 shadow-md'
                }`}
              >
                {classInfo.title.split(' ')[0]} {classInfo.title.split(' ')[1]}
              </button>
            ))}
          </div>

          {/* Selected Class Details */}
          <div className="bg-gray-50 rounded-2xl overflow-hidden shadow-xl">
            <div className="bg-gradient-to-r from-purple-600 to-purple-500 text-white p-8">
              <h3 className="text-3xl font-bold mb-4">
                {admissionClasses[selectedClass ].title}
              </h3>
              <p className="text-xl text-purple-100">
                {admissionClasses[selectedClass ].eligibility}
              </p>
            </div>
            
            <div className="p-8">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                  <h4 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                    <FileText className="h-6 w-6 mr-2 text-purple-600" />
                    Required Documents
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {admissionClasses[selectedClass].documents.map((doc, index) => (
                      <div key={index} className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                        <div className="flex items-center space-x-3">
                          <CheckCircle className="h-5 w-5 text-green-600" />
                          <span className="text-gray-900">{doc}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="text-2xl font-bold text-gray-900 mb-6">Quick Info</h4>
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                      <div className="text-sm text-gray-600">Admission Fee</div>
                      <div className="text-2xl font-bold text-purple-600">
                        {admissionClasses[selectedClass].fee}
                      </div>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                      <div className="text-sm text-gray-600">Available Seats</div>
                      <div className="text-2xl font-bold text-purple-600">
                        {admissionClasses[selectedClass].seats}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Important Dates */}
      <section className="py-20 bg-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Important Dates</h2>
            <div className="w-20 h-1 bg-yellow-400 mx-auto mb-6"></div>
            <p className="text-xl text-purple-100 max-w-3xl mx-auto">
              Mark your calendar with these important admission dates
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {importantDates.map((date, index) => (
              <div key={index} className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 hover:bg-opacity-20 transition-all duration-300">
                <div className="flex items-center justify-between mb-4">
                  <Calendar className="h-6 w-6 text-yellow-400" />
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    date.status === 'completed' 
                      ? 'bg-green-500 text-white' 
                      : 'bg-yellow-500 text-purple-900'
                  }`}>
                    {date.status === 'completed' ? 'Completed' : 'Upcoming'}
                  </span>
                </div>
                <h3 className="text-lg font-bold mb-2">{date.event}</h3>
                <p className="text-purple-100">{date.date}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fee Structure */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Fee Structure</h2>
            <div className="w-20 h-1 bg-yellow-500 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transparent and affordable fee structure
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-purple-600 text-white">
                  <tr>
                    <th className="px-6 py-4 text-left font-semibold">Particulars</th>
                    <th className="px-6 py-4 text-left font-semibold">Amount</th>
                    <th className="px-6 py-4 text-left font-semibold">Frequency</th>
                  </tr>
                </thead>
                <tbody>
                  {feeStructure.map((fee, index) => (
                    <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                      <td className="px-6 py-4 font-medium text-gray-900">{fee.particular}</td>
                      <td className="px-6 py-4 text-purple-600 font-bold">{fee.amount}</td>
                      <td className="px-6 py-4 text-gray-600">{fee.frequency}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-gray-600 mb-4">
              * Fee structure may vary for different classes. Contact office for detailed information.
            </p>
            <button className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors flex items-center mx-auto">
              <Download className="h-5 w-5 mr-2" />
              Download Fee Structure
            </button>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Admission Enquiry</h2>
            <div className="w-20 h-1 bg-yellow-500 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Have questions? We're here to help you through the admission process
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-xl p-8 text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Phone className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Call Us</h3>
              <p className="text-gray-600 mb-4">Speak directly with our admission team</p>
              <p className="text-purple-600 font-bold">+91 98765 43210</p>
              <p className="text-purple-600 font-bold">+91 98765 43211</p>
            </div>

            <div className="bg-gray-50 rounded-xl p-8 text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Mail className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Email Us</h3>
              <p className="text-gray-600 mb-4">Send your queries via email</p>
              <p className="text-purple-600 font-bold">admissions@davsreshtha.edu.in</p>
            </div>

            <div className="bg-gray-50 rounded-xl p-8 text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Clock className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Office Hours</h3>
              <p className="text-gray-600 mb-4">Visit us during office hours</p>
              <p className="text-purple-600 font-bold">Mon - Fri: 9:00 AM - 4:00 PM</p>
              <p className="text-purple-600 font-bold">Sat: 9:00 AM - 1:00 PM</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Admissions;