import React, { useEffect, useState } from 'react';
import ContentContainer from '../components/ContentContainer';
import ProfessionalPic from '../assets/images/emily_professional_pic.jpg';
import musicBg from '../assets/images/music_background.png';
import ContactMe from '../components/ContactMe';

const Home = () => {
  const [text, setText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const text_arr = ['Hello', 'Bonjour'];
  const [textArrIndex, setTextArrIndex] = useState(0);

  // Define an array of work experiences
  const workExperiences = [
    {
      title: 'Site Reliability Engineer',
      company: 'Clio - Cloud-Based Legal Technology',
      date: 'Sept 2024 - Apr 2025'
    },
    {
      title: 'DevOps Engineer',
      company: 'Arctiq',
      date: 'Jan 2024 - Apr 2024'
    },
    {
      title: 'Software Engineer',
      company: 'Crystal Claire Cosmetics Inc.',
      date: 'May 2023 - Aug 2023'
    }
  ];

  useEffect(() => {
    let fullText = text_arr[textArrIndex];
    let index = isTyping ? 0 : fullText.length;
    let typing = true;

    const interval = setInterval(() => {
      if (typing) {
        setText(fullText.substring(0, index));
        index++;
        if (index > fullText.length) {
          setTimeout(() => {
            typing = false;
          }, 500); // Pause before typing the next word
        }
      } else {
        setText(fullText.substring(0, index));
        index--;
        if (index < 0) {
          clearInterval(interval);
          setTextArrIndex((prev) => (prev + 1) % text_arr.length);
        }
      }
    }
    , 200); // Speed of typing animation
    return () => clearInterval(interval);
  }, [isTyping, textArrIndex]);

  return (
    <>
      <div className='text-dark_blue pb-36 pt-32 text-center' style={{
        backgroundImage: `url(${musicBg})`,
        boxShadow: '0px 6px 8px rgba(0, 0, 0, 0.3)'}}>
        <h1 className='pt_10'>
          <span className='overflow-hidden whitespace-nowrap border-r-2 border-black animate-typing' style={{ height: '2.5ch' }}>{text}</span><br/>I'm Emily!
        </h1>
        <h2 className='pt-10 font-serif'>Welcome to my Personal Website!</h2>
      </div>
      <ContentContainer className='text-dark_blue bg-light_blue py-20 px-32'>
        <div className='lg:flex xl:gap-32 lg:gap-16'>
          <div>
            <h2>About Me</h2>
            <p className='pt-5'>
              Hello! I am a dedicated and hard-working Computer Science Co-op
              student at the University of Toronto, specializing in Software
              Engineering with Management. I excel in leading technical
              discussions, quickly acquiring new skills, and adapting to
              challenges.
              <br/><br/>
              My experience includes roles as a Site Reliability Engineer
              at Clio, a DevOps Engineer at Arctiq and a Software Engineer at
              Crystal Claire Cosmetics, where I developed automated solutions
              and optimized systems. I have led projects such as a Healthcare
              Web Application and an Android Timetable Generator App, improving
              efficiency and user engagement. Proficient in Python, Java, C,
              React.js, and MS Azure, I thrive in Agile environments and am
              passionate about technology, innovation, and teamwork.<br/><br/>
              Feel free to reach out!
            </p>
          </div>
          <img src={ProfessionalPic} alt='emily-professional-pic' className='w-[250px] h-full mt-10 mx-auto'/>
        </div>

        <hr className="my-10 border-t-1 border-black" />
        <div id='ResumeSection'>
          <h2>Resume</h2>
          <h3 className='pt-5'>Education</h3>
          <div className="flex justify-between">
            <p className="pt-5">University of Toronto<br/>
              Honors, Bachelor of Science<br/>
              Computer Science Co-op
            </p>
            <p className="text-right">2021 - 2025</p>
          </div>
          <hr className="my-10 border-t-1 border-black" />
          <h3>Work Experience</h3>
          {workExperiences.map((experience, index) => (
            <div key={index} className="flex justify-between">
              <p className="pt-5">{experience.title}<br/>
                {experience.company}
              </p>
              <p className="text-right">{experience.date}</p>
            </div>
          ))}
          <hr className="my-10 border-t-1 border-black" />
          <h3>Relevant Courses</h3>
          <ul className="list-disc pl-5 pt-5">
            <li>Algorithm Design and Analysis</li>
            <li>Calculus 1 & 2</li>
            <li>Computer Organization</li>
            <li>Computer Science 1 & 2</li>
            <li>Computer and Network Security</li>
            <li>Databases</li>
            <li>Design and Analysis of Data Structures</li>
            <li>Discrete Mathematics</li>
            <li>Engineering Large Software Systems</li>
            <li>Human-Computer Interaction</li>
            <li>Linear Algebra 1 & 2</li>
            <li>Managing People and Groups in Organizations</li>
            <li>Multivariable Calculus</li>
            <li>Numerical Algorithms for Computational Mathematics</li>
            <li>Operating Systems</li>
            <li>Programming on the Web</li>
            <li>Software Design</li>
            <li>Software Engineering</li>
            <li>Software Tools and Systems Programming</li>
            <li>Theory of Computation</li>
            <li>Business Ethics</li>
            <li>Business French</li>
          </ul>
          <hr className="my-10 border-t-1 border-black" />
          <h3>Skills</h3>
          <h4 className='pt-5'>Programming Languages:</h4>
          <p>Python, Java, C, C++, Ruby, JavaScript, TypeScript, SQL, Bash, HTML, CSS, Assembly</p>
          <h4 className='pt-5'>Frameworks, Libraries, APIs:</h4>
          <p>React.js, Node.js, Express.js, Spring Boot, Flask, Prisma ORM, REST APIs, WebRTC</p>
          <h4 className='pt-5'>Databases & Data Technologies:</h4>
          <p>PostgreSQL, MongoDB, Redis, Microsoft SQL Server</p>
          <h4 className='pt-5'>Tools & Platforms:</h4>
          <p>Linux, GitHub, Jira, Figma, Android Studio, Visual Studio, Microsoft Excel</p>
          <h4 className='pt-5'>Cloud, DevOps & Infrastructure:</h4>
          <p>Amazon Web Services (AWS), Google Cloud Platform (GCP), Microsoft Azure, Terraform, Docker, GitHub Actions, GitOps, CI/CD, Amazon EKS, Azure Kubernetes Service (AKS), Deployment</p>
          <h4 className='pt-5'>Software Engineering Practices:</h4>
          <p>Microservices, Object-Oriented Programming (OOP), Software Design Patterns, Model-View-Presenter (MVP), Agile Software Development (Scrum), Version Control, Application Security, Web Scraping, Monitoring (Datadog)</p>
          <h4 className='pt-5'>Soft Skills:</h4>
          <p>Communication, Teamwork, Collaboration, Organization, Fast Learner, Problem-solving, Attention to detail</p>
          <h4 className='pt-5'>Languages:</h4>
          <p>French and English (Bilingual Proficiency)</p>
        </div>

      </ContentContainer>
      <ContactMe />
    </>
  )
}

export default Home