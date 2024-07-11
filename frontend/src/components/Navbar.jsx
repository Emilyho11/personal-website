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
		<div className="header w-full h-[60px] bg-dark_blue">
			<div className="m-4 flex absolute top-0 right-0 gap-14 text-lg">
				{myLinks.map((link, index) => (
					<NavLink key={index} to={link.to} style={{ color: '#EBF1F5' }}className={({ isActive }) =>
					[
						!isActive ? "active" : "font-bold underline", 
					].join(" ")
					}>
						{link.text}
					</NavLink>

				))}
			</div>
		</div>
	);
}

export default Navbar