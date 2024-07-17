import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    <>
      <div className='flex justify-between items-center text-back_light_blue bg-dark_blue h-[80px]'>
        <p className='flex-1 text-center text-lg'>Emily Ho ©2024</p>
        <div className="space-x-4 pr-8 text-2xl">
          <a href="https://github.com/Emilyho11" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a href="mailto:emilyy.ho@mail.utoronto.ca">
            <FontAwesomeIcon icon={faEnvelope} />
          </a>
          <a href="https://www.linkedin.com/in/emily-ho-cs/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </div>

      </div>
    </>
  )
}

export default Footer