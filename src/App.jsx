import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Code, House, Phone, Sun, Moon, Menu, X, UserRound } from 'lucide-react';
import { siGithub, siInstagram } from 'simple-icons';
import Name from '../components/name';
import Countdown from 'react-countdown';

const Home = () => {
  const [currentPage, setCurrentPage] = useState('main');
  const [isDark, setIsDark] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const Icon = ({ icon, size = 24 }) => {    
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        height={size}
        fill={isDark ? 'white' : 'black'}
      >
        <path d={icon.path} />
      </svg>
    );
  };
  
  const pageVariants = {
    enter: { opacity: 0, x: -100 },
    center: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 100 }
  };

  const NavButton = ({ page, label, icon: Icon, onClick }) => (
    <button
      onClick={() => {
        setCurrentPage(page);
        onClick?.();
      }}
      className={`cursor-pointer flex items-center gap-2 px-4 py-2 rounded-lg transition-colors w-full
        ${currentPage === page 
          ? isDark ? 'bg-blue-500 text-white' : 'bg-blue-600 text-white'
          : isDark 
            ? 'hover:bg-gray-700 text-gray-300' 
            : 'hover:bg-blue-100 text-gray-700'}`}
    >
      <Icon size={20} />
      <span>{label}</span>
    </button>
  );

  const MobileMenu = () => (
    <motion.div
      initial={{ x: "100%" }}
      animate={{ x: 0 }}
      exit={{ x: "100%" }}
      transition={{ type: "tween" }}
      className={`fixed inset-y-0 right-0 w-64 p-4 shadow-lg z-50 ${
        isDark ? 'bg-gray-800' : 'bg-white'
      }`}
    >
      <button
        onClick={() => setIsMobileMenuOpen(false)}
        className={`absolute top-4 right-4 p-2 rounded-lg ${
          isDark ? 'text-gray-300 hover:bg-gray-700' : 'text-gray-700 hover:bg-gray-100'
        }`}
      >
        <X size={24} />
      </button>
      <div className="mt-16 flex flex-col gap-4">
        <NavButton page="main" label="Home" icon={House} onClick={() => setIsMobileMenuOpen(false)} />
        <NavButton page="skill" label="Skill" icon={UserRound} onClick={() => setIsMobileMenuOpen(false)} />
        <NavButton page="projects" label="Project" icon={Code} onClick={() => setIsMobileMenuOpen(false)} />
        <NavButton page="contact" label="Contact" icon={Phone} onClick={() => setIsMobileMenuOpen(false)} />
      </div>
    </motion.div>
  );

  // Home Page content
  const MainContent = () => (
    <div className="min-h-screen flex items-center justify-center px-4 ">
      <motion.div
        className="flex flex-col md:flex-row items-center text-center md:p-12 md:text-left space-y-6 md:space-y-0 md:space-x-8"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
        whileHover={{ scale: 1.10 }}
        className="relative w-48 h-48 rounded-full overflow-hidden mb-4 md:mb-0">
          {/* Avatar */}
          <img
            src="/sakiko.jpeg"
            alt="Avatar"
            className="object-cover w-full h-full"
          />
          {/* Glow effect */}
          <div className="absolute inset-0 rounded-full border-4 border-blue-400 animate-pulse" />
        </motion.div>

        {/* Text */}
        <div>
          <motion.h6
            className={`text-base text-blue-400 font-medium select-none`}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            Hello World, I'm
          </motion.h6>
          <motion.h1
            className={`text-xl font-bold ${isDark ? 'text-gray-300' : 'text-gray-600'} text-3xl sm:text-4xl font-bold select-none`}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600">Muhammad Raihan Aslan</span>
          </motion.h1>

          <motion.h2
            className={`${isDark ? 'text-gray-300' : 'text-gray-600'} text-xl sm:text-2xl select-none`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <Name />
          </motion.h2>

          <motion.p
            className={`select-none text-base sm:text-lg max-w-md mt-2 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            Welcome to My personal website👋
          </motion.p>
        </div>
      </motion.div>
    </div>
  );

  const SkillsContent = () => (
    <>
    <motion.div 
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5 }}
    className= {`flex p-2 m-2 flex-col items-center justify-center rounded-2xl border-2 ${isDark ? 'bg-gray-800 border-gray-700' : 'bg-gray-300 border-gray-400'}`}>
      <img 
        src="/sakiko.jpeg"
        alt="Profile" 
        className="object-cover rounded-full w-48 h-48 m-6"
        />
      <div className={`about ${isDark ? 'text-amber-50' : 'text-neutral-900'}`}>
      Hi everyone! I am fresh Graduate Network Engineer and IT Support with 1 year of experience in designing, implementing, and maintaining network infrastructure and providing technical support. 
      Skilled in network troubleshooting, system management, and providing efficient IT solutions. Have MTCNA certification
      </div>
    </motion.div>
    </>
    /* Main content old
    
    <div className="flex flex-col items-center justify-center text-center">
    <motion.div
    initial={{ scale: 0 }}
    animate={{ scale: 1 }}
    transition={{ duration: 0.5 }}
    className={`w-32 h-32 rounded-full ${isDark ? 'bg-blue-400' : 'bg-blue-500'} mb-6`}
    >
    <img 
    src="/sakiko.jpeg"
    alt="Profile" 
    className="w-full h-full rounded-full object-cover"
    />
    </motion.div>
    <motion.h1
    initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className={`antialiased text-4xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}
      >
      Choco
      </motion.h1>
      <motion.p 
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.2 }}
      className={`text-xl ${isDark ? 'text-gray-300' : 'text-gray-600'}`}
      >
      <Name />
      </motion.p>
      </div>
      */
  );

  const ProjectsContent = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4">
      {[1, 2, 3, 4].map((project) => (
        <motion.div
          key={project}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: project * 0.1 }}
          className={`p-6 rounded-lg ${
            isDark 
              ? 'bg-gray-800 shadow-gray-900' 
              : 'bg-white shadow-lg'
          }`}
        >
          <h3 className={`text-xl font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            Project {project}
          </h3>
          <p className={`mb-4 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
            Lorem ipsum {project} Dolor Sit Amet
          </p>
          <div className="flex gap-2">
            <a href="https://net.rnimev3.my.id" className="text-blue-500 hover:underline">Demo</a>
            <span className={isDark ? 'text-gray-400' : 'text-gray-600'}>•</span>
            <a href="https://github.com/ChocoRin43/ChocoRin43" className="text-blue-500 hover:underline">GitHub</a>
          </div>
        </motion.div>
      ))}
    </div>
  );

  const ContactContent = () => (
    <div className="flex flex-col items-center justify-center space-y-6">
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="flex flex-col items-center space-y-4"
      >
        <div className="flex items-center gap-4">
          <Mail className="text-blue-500" />
          <a href="mailto:muhammadaslan2229@gmail.com" 
             className={`text-lg hover:text-blue-500 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
            muhammadaslan2229@gmail.com
          </a>
        </div>
        <div className="flex gap-6">
          <motion.a
            whileHover={{ scale: 1.05 }}
            href="https://github.com/ChocoRin43/ChocoRin43"
          >
            <Icon icon={siGithub}/>
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.05 }}
            href="https://www.instagram.com/mhmd_ren43/"
          >
            <Icon icon={siInstagram}/>
          </motion.a>
        </div>
      </motion.div>
    </div>
  );

  return (
     <div className={`h-screen flex flex-col transition-colors duration-300 ${
      isDark ? 'bg-gray-900' : 'bg-gray-50'
    }`}>
      {/* Navigation */}
      <nav className={`p-4 shadow-sm ${isDark ? 'bg-gray-800' : 'bg-white'}`}>
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <div className="hidden md:flex gap-4">
            <NavButton page="main" label="Home" icon={House} />
            <NavButton page="skill" label="About" icon={UserRound} />
            <NavButton page="projects" label="Project" icon={Code} />
            <NavButton page="contact" label="Contact" icon={Phone} />
          </div>
            <motion.a
            whileHover={{ scale: 1.05 }}
            href='https://github.com/ChocoRin43/ChocoRin43'
            className='items-end p-2 text-right justify-between'
            >
              <Icon icon={siGithub}/>
            </motion.a>
          
          <button
            onClick={() => setIsMobileMenuOpen(true)}
            className={`md:hidden p-2 rounded-lg ${
              isDark ? 'text-gray-300 hover:bg-gray-700' : 'text-gray-700 hover:bg-gray-100'
            }`}
          >
            <Menu size={24} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black z-40"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <MobileMenu />
          </>
        )}
      </AnimatePresence>

      {/* Main content area */}
      <main className="flex-1 overflow-hidden relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial="enter"
            animate="center"
            exit="exit"
            variants={pageVariants}
            transition={{ duration: 0.4 }}
            className="h-full flex items-center justify-center p-4"
          >
            {currentPage === 'main' && <MainContent />}
            {currentPage === 'skill' && <SkillsContent />}
            {currentPage === 'projects' && <ProjectsContent />}
            {currentPage === 'contact' && <ContactContent />}
          </motion.div>
        </AnimatePresence>

        {/* Theme Toggle Button - Fixed at bottom */}
        <motion.button
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          onClick={() => setIsDark(!isDark)}
          className={`fixed bottom-8 right-8 flex items-center px-4 py-4 rounded-lg shadow-lg transition-colors ${
            isDark 
              ? 'bg-gray-800 text-gray-300 hover:bg-gray-700' 
              : 'bg-white text-gray-700 hover:bg-gray-100'
          }`}
        >
          {isDark ? <Sun size={20} /> : <Moon size={20} />}
          <span className="block"></span>
        </motion.button>
      </main>
    </div>
  );
};

const NotFound = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/');
    }, 5000)
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className='main p-5 flex justify-center items-center w-full h-screen'>
        <Countdown date={Date.now() + 4000} />
        <img className='w-64' src='404.jpeg'/>
        <div>404</div>
        <br />
        kamu sepertinya nyasar?
        <br />
        aku balikin ke home 
    </div>
  );
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;