import React from 'react'
import ContentContainer from '../components/ContentContainer'
import Slideshow from '../components/Slideshow.jsx'

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

  const projectData = [
    {
      name: 'Healthcare Web Application',
      techStack: 'MongoDB, React.JS, Node.JS, Express.JS, Flask, Python',
      description: 'Healthcare web application for the PaRx Foundation Company.',
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
      description: 'Automation Project for Crystal Claire Cosmetics Inc. created in Python to generate C++ code for the robotic arm to draw any image the user wants.',
      images: [],
      ratio: '21/9'
    },
    {
      name: 'Platform Game: Pig Panic Coin Quest',
      techStack: 'MIPS Assembly Language, MARS Simulator',
      description: 'Created a platform game based on the theme of Angry Birds.',
      images: [],
      ratio: '21/9'
    }
  ];

  return (
    <ContentContainer>
      {projectData.map((project, index) => (
        <div key={index} className='bg-light_blue text-dark_blue mb-8 shadow-md'>
          <h2 className='bg-dark_blue text-back_light_blue text-center'>{project.name}</h2>
            <div className='gap-20 justify-center p-10'>
              <div>
                <p className='text-xl'>Tech Stack: {project.techStack}</p>
                <p className='pt-6 pb-10 text-lg'>{project.description}</p>
              </div>
              <Slideshow images={project.images} ratio={project.ratio} />
          </div>
        </div>
      ))}
    </ContentContainer>
  );
}

export default Projects