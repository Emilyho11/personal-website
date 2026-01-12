import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <>
      <div className='flex justify-between items-center text-back_light_blue bg-dark_blue h-[50px] fixed bottom-0 left-0 w-full px-4'>
        <p className='flex-1 text-center text-md'>Emily Ho © 2026</p>
        <div className="text-2xl gap-2 flex">
          <a href="https://github.com/Emilyho11" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} />
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