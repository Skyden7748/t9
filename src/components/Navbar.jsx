import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from React Router
import { Menu as LucideMenu, X } from 'lucide-react';
import './Navbar.css';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';

import MenuItem from '@mui/material/MenuItem';
import { useLocation } from "react-router-dom";
import { Select } from '@mui/material';
import { SelectDemo } from './SelectButton';

const Navbar = () => {

  const location = useLocation();

  // Define colors for specific routes
  const routeColors = {
    "/": "#00FFFF", // Default (cyan)
    "/projects": "violet", // Purple for '/project'
    "/uiux": "#bdfffd", // Example: orange for '/about'
    "/software": "#787878", 
    "/graphics": "#8317ff",
    "/marketing": "#ff7575",
    "/wealth": "#3b48ff",
    "/transform": "#fc9772",
    
  };
  
  const currentColor = routeColors[location.pathname] || "#00FFFF";

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };


  



  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);



  };

  return (
    <nav className="navbar  ">
      <div className="navbar-container">
        <div className="navbar-content">
          <div className="logo">
            {/* Logo */}
            <  Link  to={"/"} className='no-underline' ><h1 className='' >
              Tribe <span className=' ' style={{ color: currentColor,
                transition: "color 2s ease-out",
               }}>9</span>
            </h1>
            </Link>
          </div>
          <div className="navbar-left">
            {/* Mobile menu button */}
            <button className="mobile-menu-button" onClick={toggleMenu}>
              {isOpen ? <X size={24} /> : <LucideMenu size={24} />}
            </button>

            {/* Navigation links */}
            <div className={`navbar-links ${isOpen ? 'active' : ''}`}>
              <Link to="/" className="nav-link" onClick={() => setIsOpen(false)}>
                Home
              </Link>
              <Link to="/about" className="nav-link" onClick={() => setIsOpen(false)}>
                About
              </Link>

              

              
              <div>
                
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        Services
      </Button>
      <Menu
  id="basic-menu"
  anchorEl={anchorEl}
  open={open}
  onClose={handleClose}
  MenuListProps={{
    'aria-labelledby': 'basic-button',
  }}
  sx={{
    '& .MuiPaper-root': {
      backgroundColor: 'transparent', // Set the background to transparent
      boxShadow: '0 -60px 80px -20px rgba(255, 255, 255, 0.12) inset', // Remove any shadow (optional)
      border: '1px solid rgba(255,255,255,0.1)', 
      backdropFilter: 'blur(10px)',
      '-webkit-backdrop-filter': 'blur(10px)',
      color: '#d4d4d4',
      borderRadius: '12px',
      
    },
  }}
>
  <MenuItem onClick={handleClose}><Link to={'/software'} className='no-underline text-[#d4d4d4] font-[400] text-[1.1em]' >Software Development</Link></MenuItem>
  <MenuItem onClick={handleClose}><Link to={'/uiux'} className='no-underline text-[#d4d4d4] font-[400] text-[1.1em]' >UI UX</Link></MenuItem>
  <MenuItem onClick={handleClose}><Link to={'/graphics'} className='no-underline text-[#d4d4d4] font-[400] text-[1.1em]' >Graphics Design</Link></MenuItem>
  <MenuItem onClick={handleClose}><Link to={'/marketing'} className='no-underline text-[#d4d4d4] font-[400] text-[1.1em]' >Digital Marketing</Link></MenuItem>
  {/* <MenuItem onClick={handleClose}><Link to={'/transform'} className='no-underline text-[#d4d4d4] font-[400] text-[1.1em]' >Digital Transformation</Link></MenuItem> */}
  <MenuItem onClick={handleClose}><Link to={'/projects'} className='no-underline text-[#d4d4d4] font-[400] text-[1.1em]' >Project Management </Link></MenuItem>
 
  {/* <MenuItem onClick={handleClose}><Link to={'/wealth'} className='no-underline text-[#d4d4d4] font-[400] text-[1.1em]' >Wealth Management </Link> </MenuItem> */}
</Menu>
    </div>
              
              
              
              <Link to="/contact" className="nav-link" onClick={() => setIsOpen(false)}>
                Contact
              </Link>
              <SelectDemo />
            </div>
          </div>
          
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

