import React from 'react'

const About = () => {
    return (
        <div className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white' name="about">
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold  inline border-b-4 border-gray-500 '>About</p>
                </div>
                <p className='text-xl mt-20'>Hey, I'm Umesh Chandra, currently pursuing a graduate degree in Computer Science at Vellore Institute of Technology. I am passionate about full-stack development, with a keen interest in mastering data structures and algorithms. Problem-solving is my forte, and I am constantly eager to explore new technologies and programming languages.</p>
                <br />
                <p className='text-xl'>Aspiring to be a proficient programmer, I possess skills in both web designing and programming. I derive great satisfaction from connecting the dots in the world of technology.</p>
            </div>
        </div>
    )
}

export default About
