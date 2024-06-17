import React from 'react'
import Picture from '/src/MyImage3.jpg'
import { Typewriter } from 'react-simple-typewriter'
import resume from '/src/MyResume.pdf'


const Home = () => {
  return (
    <div className='bg-[#A7BEAE] py-[100px] '>
     <div className="  lg:pl-[180px] flex justify-center ">

   <section className="container mx-auto flex flex-col lg:flex-row items-center">
        <div className="text-content md:w-1/2 pl-30  ">
        <h1 className='text-[ #31473A] text-7xl lg:text-9xl font-bold' >Welcome </h1>
            <h1 className='text-gray-600 text-4xl lg:text-6xl font-bold'>To my Portfolio</h1>

<br />
 
<h1 className='text-gray-500  text-8xl sm:text-5xl font-bold'>Expert on</h1>
          <h1 style={{   fontSize:50 }}>
            <span style={{ color: '', fontWeight: 'bold' }}>
        
          <Typewriter
            words={['HTML5','CSS', 'Javascrip',  'ES6 ', 'Tailwind', 'BootStrap','ReactJs']}
            loop={50}
            cursor
            cursorStyle='/>'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}    
          />
     </span>
      </h1>
     
<br />
        
        </div>

        <div className="image-content md:w-1/2 p-4">
        <img src={Picture} alt="Example" className="w-full h-auto rounded-[300px] w-[400px] sm:pt-4" />
       <br />
       <br />


  

        </div>

      </section>

     

      </div>

      <div className='flex  justify-center'>
      <button className="flex items-center text-gray-700 underline">
 

 <a href={resume} download="Resume">Download CV</a>
 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"strokeWidth="1.5" stroke="currentColor" className="size-6">
<path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
</svg>
</button>
    </div>

    </div>
  )
}

export default Home



