import React, {useState} from 'react'
import Slideshow from './Slideshow';

const ProjectModal = ( { isVisible, onClose, project } ) => {
    const [showMoreDetails, setShowMoreDetails] = useState(false);
    if (!isVisible) return null;

    const toggleShowMoreDetails = () => {
        setShowMoreDetails((prev) => !prev);
    };

    return (
        <div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50'>
            <div className='bg-white p-4 rounded-lg w-3/4 h-3/4 overflow-y-auto'>
                <button onClick={onClose} className='text-right text-red-500'>Close</button>
                <h2 className='text-2xl font-bold'>{project.name}</h2>
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
    );
};

export default ProjectModal