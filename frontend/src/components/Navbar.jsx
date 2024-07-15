import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const myLinks = [
    { to: '/', text: 'About' },
    { to: '/resume', text: 'Resume' },
    { to: '/projects', text: 'Projects' },
    { to: '/hobbies', text: 'Hobbies' },
    { to: '/contact', text: 'Contact Me' }
  ];

  return (
    <div className="header w-full h-[60px] bg-dark_blue relative">
      <div className="m-4 absolute top-0 right-0 gap-14 text-lg hidden md:flex">
        {myLinks.map((link, index) => (
          <NavLink
            key={index}
            to={link.to}
            className={({ isActive }) =>
              [
                'text-[#EBF1F5] hover:text-slate-500',
                !isActive ? 'active' : 'font-bold underline',
              ].join(' ')
            }
          >
            {link.text}
          </NavLink>
        ))}
      </div>
      <div className="md:hidden flex items-center absolute top-0 right-0 m-4">
        <button onClick={() => setIsOpen(!isOpen)} className="text-light_blue hover:text-slate-500 focus:outline-none">
          <FontAwesomeIcon icon={faBars} className="text-2xl text-light_blue hover:text-slate-500" />
        </button>
      </div>
      {isOpen && (
        <div className="md:hidden absolute top-12 right-4 w-48 bg-dark_blue rounded-lg shadow-lg flex flex-col text-lg">
          {myLinks.map((link, index) => (
            <NavLink
              key={index}
              to={link.to}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                [
                  !isActive ? 'active' : 'font-bold underline',
                  'py-2 px-4 text-light_blue hover:text-slate-500'
                ].join(' ')
              }
            >
              {link.text}
            </NavLink>
          ))}
        </div>
      )}
    </div>
  );
};

export default Navbar;
