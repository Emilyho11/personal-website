import React, { useState } from 'react'
import ContentContainer from '../components/ContentContainer'
import Slideshow from '../components/Slideshow.jsx'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faYoutube } from '@fortawesome/free-brands-svg-icons';

// Stock Management App Images
import StockData from '../assets/images/stocks_app/createStock.jpg';
import PortfolioPage from '../assets/images/stocks_app/portfolioPage.png';
import GoogleGraph from '../assets/images/stocks_app/stocksGoogleGraph.png';
import CovCalc from '../assets/images/stocks_app/covarianceCalc.png';
import Reviews from '../assets/images/stocks_app/reviews.jpg';

// Healthcare Web Application Images
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

// Robotic Arm Images
import ThankyouCCC from '../assets/images/robotic_arm/thankyou_ccc.jpg';
import ThankyouCCCScreen from '../assets/images/robotic_arm/thankyou_ccc_screen.jpg';
import Beach from '../assets/images/robotic_arm/beach.jpg';
import BeachScreen from '../assets/images/robotic_arm/beach_screen.jpg';
import Code from '../assets/images/robotic_arm/code.jpg';
import Blueprint from '../assets/images/robotic_arm/blueprint.jpg';


// Assembly Platform Game Images
import LosePage from '../assets/images/assembly_project/lose.png';
import WinPage from '../assets/images/assembly_project/win.png';
import MainMenu from '../assets/images/assembly_project/main_menu.png';
import PlatformGame from '../assets/images/assembly_project/platform_game.png';

// Android App Images
import FutureCourses from '../assets/images/android_app/addFutureCourses.png';
import AdminAddCourses from '../assets/images/android_app/adminAddCourses.png';
import AdminViewCourses from '../assets/images/android_app/adminViewCourses.png';
import CoursesTaken from '../assets/images/android_app/coursesTaken.png';
import AndroidHomePage from '../assets/images/android_app/homePageUTT.png';
import AndroidLogin from '../assets/images/android_app/login.png';
import Timeline from '../assets/images/android_app/timeline.png';

// System Monitoring Tool Images
import SystemMonitoringTool from '../assets/images/sysMonTool.png';

// Game Carnival Images
import SpaceGame from '../assets/images/game_carnival/space_game.png';
import FlappyGame from '../assets/images/game_carnival/flappy_game.png';
import ApplePicking from '../assets/images/game_carnival/apple_picking.png';
import AnimalGuess from '../assets/images/game_carnival/animal_guess.png';
import DisneyGuess from '../assets/images/game_carnival/disney_guess.png';
import Maze from '../assets/images/game_carnival/maze.png';
import CarnivalMainMenu from '../assets/images/game_carnival/main_menu.png';
import CarnivalHome from '../assets/images/game_carnival/carnival_home.png';


const Projects = () => {
  const [visibleDescriptions, setVisibleDescriptions] = useState({});
  const [hoveredProject, setHoveredProject] = useState(null);
  const [showMoreDetails, setShowMoreDetails] = useState({});

  const toggleDescription = (index) => {
    setVisibleDescriptions((prev) => ({
      ...prev,
      [index]: true,
    }));
  };

  const hideDescription = (index) => {
    setVisibleDescriptions((prev) => ({
      ...prev,
      [index]: false,
    }));
  };

  const toggleShowMore = (index) => {
    setShowMoreDetails((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const projectData = [
    {
      name: 'Stock Management App',
      gitHub: 'https://github.com/Emilyho11/Stock-Management-App',
      techStack: 'GCP (Google Cloud Platform), Spring Boot, Java, React.js, REST APIs, SQL, PostgreSQL',
      overallDescription: 'Elevate your stock trading experience with this innovative app that lets you explore and track a variety of stocks, build personalized portfolios and stocklists, and execute seamless transactions. You can dive deeper into market analytics with advanced covariance and correlation tools, follow and connect with friends, and share insights by writing reviews on your friends\' stocklists. The app also harnesses predictive algorithms to forecast future stock prices, visualizing trends with dynamic graphs for different companies.',
      date: 'July 2024 - August 2024',
      description: [
        'Learned to use GCP (Google Cloud Platform) to deploy the app, Spring Boot for the backend, and React.js for the frontend',
      ],
      images: [
        GoogleGraph,
        PortfolioPage,
        StockData,
        CovCalc,
        Reviews
      ],
      ratio: '16/9'
    },
    {
      name: 'Healthcare Web Application',
      gitHub: 'https://github.com/mjsflames/c01w24-project-RxValidators',
      youtube: 'https://www.youtube.com/watch?v=i3gYOHE-1Qc',
      techStack: 'Microservices, CI/CD, MongoDB, React.JS, Node.JS, Express.JS, Python, Flask, GitHub, GitHub Actions, REST APIs, Agile Software Development, Postman, Jira, Figma',
      overallDescription: 'Healthcare web application for the PaRx Foundation Company to manage doctors’ prescriptions and promote active lifestyles.',
      date: 'January 2024 - March 2024',
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
      techStack: 'C++, Python, Robotic Arm',
      overallDescription: 'Developed a Python program that automatically generates C++ code for robotic arms to produce complex designs, saving developer effort and time of writing 100,000+ lines of code from months to 2 minutes.',
      date: 'August 2023 - August 2023',
      description: [
        'This project gets the user to draw something (simple or very detailed), which then writes C++ code for robotic arms to draw that exact image',
        'Completed the project within a week to present it to the CEO and managers'
      ],
      images: [
        ThankyouCCC,
        ThankyouCCCScreen,
        Beach,
        BeachScreen,
        Code,
        Blueprint
      ],
      ratio: '5/6'
    },
    {
      name: 'Platform Game: Pig Panic Coin Quest',
      gitHub: 'https://github.com/Emilyho11/Pig-Panic-Coin-Quest',
      youtube: 'https://www.youtube.com/watch?v=WIFcdk-GruE',
      techStack: 'MIPS Assembly Language, MARS Simulator',
      overallDescription: 'This platform game is based on the theme of Angry birds. The goal of the game is to try and collect all the coins without getting hit by the enemy (pigs) to move to the next level! If you get hit, then you have to restart from the beginning. Each level will get harder to pass.',
      date: 'April 2023 - April 2023',
      description: [
        'Developed a platform game in Assembly language for the MIPS processor',
        'Utilized the MARS debugger tool to identify and troubleshoot low-level system defects',
        'Designed a simple use of MIPS memory address with heap, stack, and code and data segments to optimize development',
        'Effectively used modular programming alongside stack manipulation to reduce the chance of bugs and coupling'
      ],
      images: [
        MainMenu,
        WinPage,
        LosePage,
        PlatformGame
      ],
      ratio: '16/9'
    },
    {
      name: 'System Monitoring Tool',
      gitHub: 'https://github.com/Emilyho11/System-Monitoring-Tool',
      techStack: 'Linux, C',
      overallDescription: 'Engineered a system monitoring tool in C for Unix/Linux environments, providing real-time insights into system performance metrics.',
      date: 'January 2023 - January 2023',
      description: [
        'Conducted thorough evaluations of system performance, ensuring accuracy and reliability in reporting metrics and contributing to a 99% assessment coverage',
        'Generated graphical representations of memory and CPU usage, enhancing data visualization for improved analysis',
        'Documented the development process and provided user support to facilitate seamless adoption and utilization'
      ],
      images: [SystemMonitoringTool],
      ratio: '1/1'
    },
    {
      name: 'Android App: University Timetable Generator',
      gitHub: 'https://github.com/arnavp103/UTT',
      techStack: 'Java, Android Studio, Agile Software Development, NoSQL, GitHub, Jira, Model-View-Presenter (MVP)',
      overallDescription: 'Developed an Android app for students to automatically plan and forecast courses required to graduate.',
      date: 'December 2022 - December 2022',
      description: [
        'Developed an Android app for students to automatically plan and forecast courses required to graduate based on the Model View Presenter architecture and Agile-Scrum methodologies',
        'Designed and developed an intuitive, visually appealing, and responsive (UX) frontend using Java and Android Studio, increasing user engagement by 75%',
        'Developed backend services with Firebase, a cloud-hosted NoSQL database, to efficiently manage over 500 courses and 10,000 active users',
        'Collaborated with a team of six, employing GitHub version control and JIRA to oversee user stories, sprints, and daily standups'
      ],
      images: [
        AndroidHomePage,
        AndroidLogin,
        Timeline,
        FutureCourses,
        AdminAddCourses,
        AdminViewCourses,
        CoursesTaken
      ],
      ratio: '9/16'
    },
    {
      name: 'Game Carnival',
      gitHub: 'https://github.com/Emilyho11/Mini-Game-Carnival',
      youtube: 'https://www.youtube.com/watch?v=6X7TtgV8kBI',
      techStack: 'Object-Oriented Programming (OOP), Software Design Patterns, Python, Pygame',
      overallDescription: 'Developed small interactive games for children to play and learn!',
      date: 'May 2021 - June 2021',
      description: [
        'Developed an interactive and educational game for children using Pygame and Python',
        'Creatively planned and designed the game using software design patterns and object-oriented programming',
        'The game contains a set of small games that the user can choose from: Maze Game, Guessing Game on Animals and Disney Characters, educational game about our Solar System, educational Apple-picking game about mathematical operations, and a Flappy Bird game that randomly changes avatars',
      ],
      images: [
        SpaceGame,
        FlappyGame,
        ApplePicking,
        AnimalGuess,
        DisneyGuess,
        Maze,
        CarnivalMainMenu,
        CarnivalHome
      ],
      ratio: '3/4'
    }
  ];

  return (
    <ContentContainer>
      <div className='flex flex-wrap gap-4 p-4 justify-center'>
        {projectData.map((project, index) => (
          <div
            key={index}
            className='relative w-[500px] h-[300px] cursor-pointer'
            onMouseEnter={() => setHoveredProject(index)}
            onMouseLeave={() => setHoveredProject(null)}
          >
            {visibleDescriptions[index] ? (
              <div className='p-4 bg-white border border-gray-300 overflow-y-scroll h-[300px]'>
                <h3 className='text-lg font-bold underline'>{project.name}</h3>
                <button onClick={() => hideDescription(index)} className='mt-2 hover:text-blue-600 text-dark_blue underline'>
                  <FontAwesomeIcon icon={faArrowLeft} /> Back
                </button>
                <p>{project.overallDescription}</p>
                <button onClick={() => toggleShowMore(index)} className='mt-2 text-blue-500 underline'>
                  {showMoreDetails[index] ? 'Show Less' : 'More Details'}
                </button>
                {showMoreDetails[index] && (
                  <div className='mt-2'>
                    <ul className='list-disc pl-5'>
                      {project.description.map((desc, i) => (
                        <li key={i}>{desc}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ) : (
              <img
                src={project.images[0]}
                alt={project.name}
                className='w-full h-full object-cover'
                onClick={() => toggleDescription(index)}
              />
            )}
            {hoveredProject === index && !visibleDescriptions[index] && (
              <div className="absolute inset-0 bg-black bg-opacity-70 text-white flex items-center justify-center px-2 py-1">
                {project.name}
              </div>
            )}
          </div>
        ))}
      </div>
    </ContentContainer>
  );
}

export default Projects