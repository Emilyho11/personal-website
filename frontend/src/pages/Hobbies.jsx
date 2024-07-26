import React from 'react'
import ContentContainer from '../components/ContentContainer'

const Hobbies = () => {
  const hobby = [
    {
      hobby: 'Piano',
      description: 'Piano is one of my favorite hobbies since I was little. I have been taking lessons at the age of 6, and I am continuing my playing to this day. I enjoy performing in front of others at school concerts, recitals, and retirement homes, as seeing others smile makes me happy. Playing piano not only brings me joy, but it helps me relax during stressful times.',
      extraInfo: 'Some Songs I play:\nEndless Love - Lionel Richie and Diana Ross\nNight Changes - One Direction\nRight Here Waiting\nWhat a Wonderful World\nMoon Represents my Heart - Teresa Teng\nI Want It That Way - Backstreet Boys\nRiver Flows In You - Yiruma\nColors of the Wind - Pocahontas (Disney)',
      date: 'Since I was 6',
      image: ''
    }
  ]

  return (
    <ContentContainer classname='grid grid-cols-4 gap-4 p-4'>
        <h3 className="text-2xl">{hobby}</h3>
        <p className="text-m font-semibold">{date}</p>
        <div className='flex gap-6 items-start'>
            <div className='flex-1 pt-4'>
                <p className="mt-2">{description}</p>
            </div>
            {image && (
              <img
                src={image}
                alt="Hobby image"
                className="w-1/2 h-auto lg:max-h-[450px] object-cover border border-slate-400"
                style={{ aspectRatio: 16/9 }}
              />
            )}
        </div>
    </ContentContainer>
  )
}

export default Hobbies