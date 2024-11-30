import React from 'react'

const Skills = () => {
  return (
    <div id='skills' className='container pt-32'>
        <div className='grid md:grid-cols-2 gap-20 items-center'>
            <div  data-aos="zoom-in-up">
                <h2 className='text-4xl md:text-5xl' >Technology I work with</h2>
                <p className='text-gray-500-5xl'>
                Hello, I am Azan Ahmed, a full-stack web developer and AI enthusiast exploring the cutting-edge realms of Web 3.0, Metaverse, and Artificial Intelligence. My expertise spans modern web technologies, including HTML, CSS, JavaScript, TypeScript, and Next.js, enabling me to craft dynamic and scalable web solutions.

I am passionate about blending my skills in web development with my growing knowledge in AI to build innovative applications. From creating seamless user interfaces to exploring decentralized Web 3.0 solutions and immersive Metaverse experiences, I am dedicated to shaping the future of technology.

Technically proficient, curious, and driven by innovation, I thrive on solving complex challenges and contributing to meaningful advancements in the tech world.
                </p>
            </div>
            <div>
                <div className='grid grid-cols-2 text-accent text-3xl sm:text-4xl'>
                    <div className='space-y-2'>
                        <h2  data-aos="zoom-in-up">Typescript</h2>
                        <h2  data-aos="zoom-in-up">Next.js</h2>
                        <h2  data-aos="zoom-in-up">HTML</h2>
                    </div>
                    <div className='space-y-2'>
                        <h2  data-aos="zoom-in-up">Tailwind</h2>
                        <h2  data-aos="zoom-in-up">Node.js</h2>
                        <h2  data-aos="zoom-in-up">CSS</h2>
                    </div>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Skills
