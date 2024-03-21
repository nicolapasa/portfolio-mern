import React from 'react'

const About = () => {
  return (
    <div id='about' className='flex sm:flex-row flex-col-reverse container mx-auto justify-center items-center sm:py-32 py-16'>

<div className='flex flex-col sm:w-1/2'>
      <img src={'https://res.cloudinary.com/devjy7hwv/image/upload/v1711027720/f25a4138-0e83-4926-a6ae-fb860430d99d_c2a4jg.jpg'} alt="" className='w-full p-8 rounded-bl-[50%] rounded-tr-[50%]' />
</div>
        <div className='flex flex-col sm:w-1/2'>

            <h1 className='text-4xl'>
            About Me
            </h1>
            <p>
            As a passionate Full Stack Developer, I thrive on designing and building exceptional web applications that deliver a seamless user experience. With a strong foundation in both front-end and back-end technologies, I bring a holistic approach to software development, ensuring efficient functionality and captivating user interfaces.

I'm expertise in a wide range of programming languages and frameworks, including HTML/CSS, JavaScript, Node.js, Express.js, React, and MongoDb.

Passionate about staying up-to-date with the latest industry trends and advancements, I am committed to learning and expanding my skill set to exceed client expectations. Whether working independently or within a dynamic team environment, I bring a proactive and collaborative approach, fostering open communication and delivering innovative solutions. Let's connect and explore how my expertise can contribute to your organization's success in achieving robust and user-centric web applications.
            </p>

        </div>
      
        </div>
  )
}

export default About