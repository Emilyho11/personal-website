import React from 'react'
import ContentContainer from './ContentContainer'

const ContactMe = () => {

  const fields = [
    { field: 'Name', value: 'name', required: true},
    { field: 'Email', value: 'email', required: true},
    { field: 'Phone Number', value: 'phone', required: false},
    { field: 'Message', value: 'message', required: true}
  ]

  return (
    <>
      <ContentContainer>
        <div id='ContactMeSection' className='bg-light_blue py-10 px-32'>
          <h2>Contact Me</h2>
          <form className='pt-5'>
            <div className='flex gap-4'>
              {fields.slice(0, 3).map((field, index) => (
                <div key={index} className='flex-1'>
                  <label htmlFor={field.value}>
                    {field.field}
                    {field.required && <span className='text-red-500'> *</span>}
                  </label>
                  <input type='text' id={field.value} name={field.value} className='w-full p-2 bg-white border border-gray rounded' required={field.required}/>
                </div>
              ))}
            </div>
            <div className='pt-5'>
              <label htmlFor='message'>
                Message
                {fields.find(field => field.value === 'message').required && (
                  <span className='text-red-500'> *</span>
                )}
              </label>
              <textarea id='message' name='message' className='w-full p-2 h-32 bg-white border border-gray rounded' required={fields.find(field => field.value === 'message').required}></textarea>
            </div>
            <button type='submit' className='bg-dark_blue text-back_light_blue p-2 mt-5'>Submit</button>
          </form>
        </div>
      </ContentContainer>
    </>
  )
}

export default ContactMe