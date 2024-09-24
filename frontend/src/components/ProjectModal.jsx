import React, {useState} from 'react'
import Slideshow from './Slideshow';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

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
            <div className='relative bg-white rounded-lg w-3/4 h-3/4 overflow-y-auto'>
                <button onClick={onClose} className='absolute top-2 right-2 text-red-500 hover:text-red-300'>
                    <FontAwesomeIcon icon={faTimes} size="xl"/>
                </button>
                <div className='bg-dark_blue text-white p-4'>
                    <h2 className='text-2xl font-bold'>{project.name}</h2>
                </div>
                <div className='p-4'>
                    <p>{project.overallDescription}</p>
                    <button onClick={toggleShowMoreDetails} className='mt-2 text-blue-700 hover:text-blue-400 underline block'>
                        {showMoreDetails ? 'Show Less' : 'More Details'}
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