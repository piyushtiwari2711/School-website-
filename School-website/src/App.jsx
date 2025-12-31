import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Homepage from './pages/Homepage';
import About from './pages/About';
import Academics from './pages/Academics';
import Admissions from './pages/Admissions';
import StudentLife from './pages/StudentLife';
import Faculty from './pages/Faculty';
import Contact from './pages/Contact';
import LoginModal from './components/LoginModal';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Homepage />;
      case 'about':
        return <About />;
      case 'academics':
        return <Academics />;
      case 'admissions':
        return <Admissions />;
      case 'student-life':
        return <StudentLife />;
      case 'faculty':
        return <Faculty />;
      case 'contact':
        return <Contact />;
      default:
        return <Homepage />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header 
        currentPage={currentPage} 
        setCurrentPage={setCurrentPage}
        onLoginClick={() => setIsLoginOpen(true)}
        isAuthenticated={isAuthenticated}
        onLogout={() => setIsAuthenticated(false)}
      />
      
      <main>
        {renderPage()}
      </main>
      
      <Footer />
      
      <LoginModal 
        isOpen={isLoginOpen} 
        onClose={() => setIsLoginOpen(false)}
        onLogin={() => {
          setIsAuthenticated(true);
          setIsLoginOpen(false);
        }}
      />
    </div>
  );
}

export default App;