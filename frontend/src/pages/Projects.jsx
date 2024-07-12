import React from 'react'
import ContentContainer from '../components/ContentContainer'

const Projects = () => {
  return (
    <>
      <ContentContainer>
        <div className='bg-light_blue text-dark_blue'>
          <h2 className='bg-dark_blue text-back_light_blue text-center'>Healthcare Web Application</h2>
          <div className='p-5'>
            <p>Tech Stack: MongoDB, React.JS, Node.JS, Express.JS, Flask, Python</p>
            <p className='pt-4'>Healthcare web application for the PaRx Foundation Company.</p>
          </div>
        </div>
      </ContentContainer>
    
    </>
  )
}

export default Projects