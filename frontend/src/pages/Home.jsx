import React from 'react';
import ContentContainer from '../components/ContentContainer';
import ProfessionalPic from '../assets/images/emily_professional_pic.jpg';
import musicBg from '../assets/images/music_background.png';
import ContactMe from '../components/ContactMe';

const Home = () => {
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

  return (
    <>
      <div className='text-dark_blue pb-36 pt-32 text-center' style={{
        backgroundImage: `url(${musicBg})`,
        boxShadow: '0px 6px 8px rgba(0, 0, 0, 0.3)'}}>
        <h1 className='pt-10'>Hello, Bonjour,<br/>I'm Emily!</h1>
        <h2 className='pt-10'>Welcome to my Personal Website!</h2>
      </div>
      <ContentContainer className='text-dark_blue bg-light_blue p-10'>
        <div className='lg:flex xl:gap-32 lg:gap-16'>
          <div>
            <h2 className='pt-10'>About Me</h2>
            <p className='pt-5'>
              Hello! As a dedicated and hard-working UofT Computer Science
              Co-op student, I excel in leading technical discussions with
              senior software engineers. With previous work experience as a
              Software Engineer, DevOps Engineer, and Site Reliability Engineer,
              I can quickly acquire new skills and easily adapt to new challenges
              and assignments. I am committed to getting work done beyond
              management expectations and am an excellent team player.<br/><br/>
            
              With a passion for technology, innovation, and automation,
              I always look forward to meeting new people and being part of a team.
              Feel free to connect and reach out!
              </p>
          </div>
          <img src={ProfessionalPic} alt='emily-professional-pic' className='w-[250px] h-full mt-10 mx-auto'/>
        </div>

        <hr className="my-10 border-t-1 border-black" />
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
          <li>Introduction to Computer Science 1 & 2</li>
          <li>Software Engineering</li>
          <li>Software Design</li>
          <li>Operating Systems</li>
          <li>Databases</li>
          <li>Software Tools and Systems Programming</li>
          <li>Computer Organization</li>
          <li>Human-Computer Interaction</li>
          <li>Design and Analysis of Data Structures</li>
          <li>Theory of Computation</li>
          <li>Numerical Algorithms for Computational Mathematics</li>
          <li>Business Ethics</li>
          <li>Business French</li>
        </ul>

        <h3 className='pt-5'>Skills</h3>
        <h4 className='pt-5'>Programming Languages:</h4>
        <p>Python, Java, C, SQL, HTML, CSS, JavaScript, Linux</p>
        <h4 className='pt-5'>Tools, Frameworks, Databases:</h4>
        <p>GitHub, MS Azure, Terraform, Docker, JIRA, React.js, Node.js, MongoDB, MS SQL Server</p>
        <h4 className='pt-5'>Development Practices:</h4>
        <p>Agile Software Development (Scrum), CI/CD, REST APIs, Application Security</p>
        <h4 className='pt-5'>Soft Skills:</h4>
        <p>Communication, Teamwork, Collaboration, Organization, Fast Learner, Problem-solving, Attention to detail</p>
        <h4 className='pt-5'>Languages:</h4>
        <p>French and English (Bilingual Proficiency)</p>

        <hr className="my-10 border-t-1 border-black" />
      </ContentContainer>
      <ContactMe />
    </>
  )
}

export default Home