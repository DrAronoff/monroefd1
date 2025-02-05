import React, { useState, useEffect} from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Dropdown } from 'primereact/dropdown';
import { useNavigate } from 'react-router-dom';

export function Navbar() {
  useEffect(() => {
    document.title = 'Monroe Township District #1 Fire Commissioners';
  }, []);

    const [isOpen, setIsOpen] = useState(false)
    const [IsFinancialOpen, setIsFinancialOpen] = useState(false)
    const financeoption = ['Current Budget', 'Budget Resolutions', 'Comprehensive Annual Finance Report', 'Annual Audit'];
    const selectedFinanceOption = "";
    const meetingoption = ['Calendar', 'Meeting Agendas Archive', 'Meeting Minutes Archive', 'Meeting Reports Archive'];
    const selectedMeetingOption = "";
    const navigate = useNavigate();
    const handleChildClick = (e) => {
      e.stopPropagation(); // Prevents the click from bubbling up to the parent
      console.log('Child clicked');
    };
    function setSelectedFinanceOption(option){
      switch (option) {
        case 'Current Budget':
          navigate('/current');
          closeFinancialMenu();
          break;
        case 'Budget Resolutions':
          navigate('/resolution');
          closeFinancialMenu();
          break;
        case 'Comprehensive Annual Finance Report':
          navigate('/report');
          closeFinancialMenu();
          break;
        case 'Annual Audit':
          navigate('/audit');
          closeFinancialMenu();
          break;
        default:
          // Handle invalid input or redirect to a default route
          navigate('/');
      }
    }
    function setSelectedMeetingOption(option){
      switch (option) {
        case 'Calendar':
          navigate('/meeting');
          closeFinancialMenu();
          break;
        case 'Meeting Agendas Archive':
          navigate('/agendaArchive');
          closeFinancialMenu();
          break;
        case 'Meeting Minutes Archive':
          navigate('/minutesArchive');
          closeFinancialMenu();
          break;
        case 'Meeting Reports Archive':
          navigate('/reportsArchive');
          closeFinancialMenu();
          break;
        default:
          // Handle invalid input or redirect to a default route
          navigate('/');
      }
    }
    const closeMenu = () => {
        setIsOpen(false);
    }

    const closeFinancialMenu = () => {
        console.log("Closing")
        if (IsFinancialOpen || isOpen) {
            closeMenu()
            setIsFinancialOpen(false);
        } 
        
    }
  
    return (
      <nav onClick={closeFinancialMenu} className="bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
              <img class="custom2" style={{margintop: 1000}} width="200px" height="200px"
                        src="https://s3.us-east-2.amazonaws.com/fireapparatusrepair.com/monroe-patch-better.png"
                        alt=""
                      />
                <Link to="/" className="text-white text-lg font-semibold">
                
                </Link>
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  <NavLink to="/" className={({ isActive }) => 
                    isActive ? "bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium" : 
                    "text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  }>
                    Home
                  </NavLink>
                  <NavLink to="/about" className={({ isActive }) => 
                    isActive ? "bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium" : 
                    "text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  }>
                    Mission and Policy Statements
                  </NavLink>
                  <NavLink to="/comissioners" className={({ isActive }) => 
                    isActive ? "bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium" : 
                    "text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  }>
                    Commissioners and Staff
                  </NavLink>
                  
                  <Dropdown id="dropdown" value={selectedFinanceOption} onChange={(e) => setSelectedFinanceOption(e.value)} options={financeoption} optionLabel="name" 
                    placeholder="Financial Information" className="dropdown" />


                  <Dropdown id="dropdown" value={selectedMeetingOption} onChange={(e) => setSelectedMeetingOption(e.value)} options={meetingoption} optionLabel="name" 
                    placeholder="Meeting Information" className="dropdown" />


                  <NavLink to="/policy" className={({ isActive }) => 
                    isActive ? "bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium" : 
                    "text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  }>
                    Rules and Regulations
                  </NavLink>
                  <NavLink to="/petition" className={({ isActive }) => 
                    isActive ? "bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium" : 
                    "text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  }>
                      Office of Fire Commissioner Petition
                  </NavLink>
                  <NavLink to="/records" className={({ isActive }) => 
                    isActive ? "bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium" : 
                    "text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  }>
                      Open Public Records Request
                  </NavLink>
                  <NavLink to="/contact" className={({ isActive }) => 
                    isActive ? "bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium" : 
                    "text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  }>
                    Contact
                  </NavLink>
                  <NavLink to="/links" className={({ isActive }) => 
                    isActive ? "bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium" : 
                    "text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  }>
                      Links
                  </NavLink>
                  
                
                </div>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="ml-4 flex items-center md:ml-6">
                <div className="ml-3 relative">
                  <div>
                    
                  </div>
                  {IsFinancialOpen && (
                    <div
                      className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5"
                      role="menu"
                      aria-orientation="vertical"
                      aria-labelledby="user-menu"
                    >

                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="block h-6 w-6">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="custom4"
                aria-expanded={isOpen}
              >
                <span className="sr-only">Open main menu</span>
                {isOpen ? (
                  <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
  
        {isOpen && (
          
          <div className="custom5 ml-20 space-x-0">
            <center>
            <img class="" style={{margintop: 1000}} width="200px" height="200px"
                        src="https://s3.us-east-2.amazonaws.com/fireapparatusrepair.com/monroe-patch-better.png"
                        alt=""
                      />
            <NavLink to="/" className="custom">
              Home
            </NavLink>
            <NavLink to="/about" className={({ isActive }) => 
              isActive ? "bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium" : 
              "text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            }>
              Mission and Policy Statements
            </NavLink>
            <NavLink to="/comissioners" className={({ isActive }) => 
              isActive ? "bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium" : 
              "text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            }>
              Commissioners and Staff
            </NavLink>

            <Dropdown  onClick={handleChildClick} value={selectedFinanceOption} onChange={(e) => setSelectedFinanceOption(e.value)} options={financeoption} optionLabel="name" 
              placeholder="Financial Information" className="custom" />


            <Dropdown  onClick={handleChildClick} value={selectedMeetingOption} onChange={(e) => setSelectedMeetingOption(e.value)} options={meetingoption} optionLabel="name" 
              placeholder="Meeting Information" className="custom" />

            
            <NavLink to="/policy" className={({ isActive }) => 
              isActive ? "bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium" : 
              "text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            }>
              <br></br>Rules and Regulations
            </NavLink>
            <NavLink to="/petition" className={({ isActive }) => 
              isActive ? "bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium" : 
              "text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            }>
              Commissioner Petition
            </NavLink>
            <NavLink to="/records" className={({ isActive }) => 
              isActive ? "bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium" : 
              "text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            }>
                Open Public Records Request
            </NavLink>
            <NavLink to="/contact" className={({ isActive }) => 
              isActive ? "bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium" : 
              "text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            }>
              Contact
            </NavLink>
            <NavLink to="/links" className={({ isActive }) => 
              isActive ? "bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium" : 
              "text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            }>
                Links
            </NavLink>
            
            </center>
          </div>
        )}
      </nav>
    )
  }