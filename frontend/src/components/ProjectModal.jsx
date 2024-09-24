import React, {useState} from 'react'
import Slideshow from './Slideshow';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp, faTimes } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faYoutube } from '@fortawesome/free-brands-svg-icons';

const ProjectModal = ( { isVisible, onClose, project } ) => {
    const [showMoreDetails, setShowMoreDetails] = useState(false);
    if (!isVisible) return null;

    const toggleShowMoreDetails = () => {
        setShowMoreDetails((prev) => !prev);
    };

    const handleOverlayClick = (e) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    return (
        <div onClick={handleOverlayClick} className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50'>
            <div className='relative bg-white rounded-lg w-2/3 h-3/4 overflow-y-auto'>
                <button onClick={onClose} className='absolute top-2 right-2 text-red-500 hover:text-red-300'>
                    <FontAwesomeIcon icon={faTimes} size="xl"/>
                </button>   
                <div className='bg-dark_blue text-white p-6 flex justify-between'>
                    <h2 className='text-2xl font-bold px-10'>{project.name}</h2>
                    <div className='space-x-4 pr-20 flex text-3xl'>
                        {project.gitHub && (
                        <a href={project.gitHub} target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faGithub} />
                        </a>
                        )}
                        {project.youtube && (
                        <a href={project.youtube} target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faYoutube} />
                        </a>
                        )}
                    </div>
                </div>
                <div className='px-20 py-10'>
                    {/* <h3 className='text-xl font-bold tracking-wider'>Date:</h3> */}
                    <p className='text-md pb-8'>Date: {project.date}</p>
                    <h3 className='text-xl font-bold tracking-wider'>Tech Stack:</h3>
                    <p className='my-2 pl-4 text-md'>{project.techStack}</p>
                    <h3 className='text-xl font-bold tracking-wider'>Description:</h3>
                    <p className='my-2 pl-4 text-md'>{project.overallDescription}</p>
                    <button onClick={toggleShowMoreDetails} className='mt-2 text-blue-700 hover:text-blue-400 underline block'>
                        {showMoreDetails ? 'Show Less' : 'More Details'}
                        <FontAwesomeIcon icon={showMoreDetails ? faChevronUp : faChevronDown} className='ml-2 text-lg' />
                    </button>
                    {showMoreDetails && (
                    <div className='mt-2'>
                        <ul className='list-disc pl-5'>
                        {project.description.map((desc, i) => (
                            <li key={i}>{desc}</li>
                        ))}
                        </ul>
                    </div>
                    )}
                    <div className='p-2'>
                        <Slideshow images={project.images} ratio={project.ratio} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectModal