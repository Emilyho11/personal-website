import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const myLinks = [
    { to: '/', text: 'About' },
    { to: '/resume', text: 'Resume' },
    { to: '/projects', text: 'Projects' },
    { to: '/hobbies', text: 'Hobbies' },
    { to: '/contact', text: 'Contact Me' }
  ];
  return (
		<div className="mr-4 flex gap-4">
			{myLinks.map((link, index) => (
				<NavLink key={index} to={link.to} style={{ color: 'dark_blue' }}className={({ isActive }) =>
				[
				  	!isActive ? "active" : "font-bold underline", 
				].join(" ")
			  	}>
					{link.text}
				</NavLink>

			))}
		</div>
	);
}

export default Navbar