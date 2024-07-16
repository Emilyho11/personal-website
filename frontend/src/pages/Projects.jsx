import React, { useState } from 'react'
import ContentContainer from '../components/ContentContainer'
import Slideshow from '../components/Slideshow.jsx'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

import PrescriberPage from '../assets/images/healthcare_app/prescriber_page.jpg';
import GreenResources from '../assets/images/healthcare_app/green_resources.jpg';
import LoginPage from '../assets/images/healthcare_app/login_page.jpg';
import AdminPage from '../assets/images/healthcare_app/admin_page.jpg';
import PatientPage from '../assets/images/healthcare_app/patient_page.jpg';
import PrescriptionForm from '../assets/images/healthcare_app/prescription_form.jpg';
import PrescriberAccount from '../assets/images/healthcare_app/prescriber_account.jpg';
import PatientAccount from '../assets/images/healthcare_app/patient_account.jpg';
import NewPatientAccount from '../assets/images/healthcare_app/new_patient_account.jpg';
import NewPrescriberAccount from '../assets/images/healthcare_app/new_prescriber_account.jpg';

const Projects = () => {
  const [visibleDescriptions, setVisibleDescriptions] = useState({});

  const toggleDescription = (index) => {
    setVisibleDescriptions((prev) => ({
      ...prev,
      [index]: !prev[index],
    }))
  }

  const projectData = [
    {
      name: 'Healthcare Web Application',
      techStack: 'Microservices, CI/CD, MongoDB, React.JS, Node.JS, Express.JS, Python, Flask, GitHub, GitHub Actions, REST APIs, Postman, Jira, Figma',
      overallDescription: 'Healthcare web application for the PaRx Foundation Company to manage doctors’ prescriptions and promote active lifestyles.',
      description: [
        'Designed and developed a full-stack application using a microservice architecture, MongoDB, Express.js, React.js, and Node.js',
        'Used Python and Flask to generate PDFs and web scrape university sites for doctor verification, saving 30 hours of employee workload per week',
        'Integrated REST APIs from MS Azure, Google Maps, and Geoapify to suggest nearby outdoor activities, leveraging real-time data',
        'Led a team of seven using Agile-Scrum practices, GitHub, and JIRA to efficiently manage daily scrum meetings and speed up project delivery by 25%'
      ],
      images: [
        PrescriberPage,
        GreenResources,
        LoginPage,
        AdminPage,
        PatientPage,
        PrescriptionForm,
        PrescriberAccount,
        PatientAccount,
        NewPatientAccount,
        NewPrescriberAccount
      ],
      ratio: '21/9'
    },
    {
      name: 'Robotic Arm Drawing Automation',
      techStack: 'Python, C++, Robotic Arm',
      overallDescription: 'Healthcare web application for the PaRx Foundation Company to manage doctors’ prescriptions.',
      description: 'Automation Project for Crystal Claire Cosmetics Inc. created in Python to generate C++ code for the robotic arm to draw any image the user wants.',
      images: [],
      ratio: '21/9'
    },
    {
      name: 'Platform Game: Pig Panic Coin Quest',
      techStack: 'MIPS Assembly Language, MARS Simulator',
      overallDescription: 'Healthcare web application for the PaRx Foundation Company to manage doctors’ prescriptions.',
      description: 'Created a platform game based on the theme of Angry Birds.',
      images: [],
      ratio: '21/9'
    }
  ];

  return (
    <ContentContainer>
      {projectData.map((project, index) => (
        <div key={index} className='bg-light_blue text-dark_blue mb-8 shadow-md'>
          <h2 className='bg-dark_blue tracking-widest text-back_light_blue text-center py-4'>{project.name}</h2>
            <div className='gap-20 justify-center p-10'>
              <div>
                <h3 className='text-xl font-bold tracking-wider'>Tech Stack:</h3>
                <p className='my-2 '>{project.techStack}</p>
                <br/>
                <h3 className='text-xl font-bold tracking-wider'>Description:</h3>
                <p className='text-lg my-2'>{project.overallDescription}</p>
                <button
                  className='pt-2 pb-6 mt-4 rounded flex items-center text-xl hover:text-slate-400'
                  onClick={() => toggleDescription(index)}
                >
                  {visibleDescriptions[index] ? 'Hide Details': 'Show Details'}
                  <FontAwesomeIcon icon={visibleDescriptions[index] ? faChevronUp : faChevronDown} className='ml-2 text-xl' />
                </button>
                {visibleDescriptions[index] && (
                  Array.isArray(project.description) ? (
                  <ul className='pb-10 text-lg list-disc pl-8'>
                    {project.description.map((point, descriptionIndex) => (
                      <li key={descriptionIndex} className='pl-2'>{point}</li>
                    ))}
                  </ul>
                ) : (
                  <p className='pt-6 pb-10 text-lg'>{project.description}</p>
                )
              )}
              </div>
              <Slideshow images={project.images} ratio={project.ratio} />
          </div>
        </div>
      ))}
    </ContentContainer>
  );
}

export default Projects