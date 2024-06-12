import React from 'react'
import photo from '/src/AboutMe.webp'


const About = () => {
  return (
    <div>
   <div className='bg-[#fff7ed] w-full py-[40px]   '>

 
   <section className='container mx-auto flex flex-col md:flex-row items-center  '>


    <div className='text-content md:w-1/2 ' >
    <img src={photo} alt="Example" className=" w-[450px] h-auto rounded-lg"/>

    </div>


    <div className='text-content md:w-1/2 pl-8  mb-8'>
    <h1 className='text-[#d97706] text-center  pb-12 text-5xl pt-5 pr-8'>ABOUT ME </h1>
    <hr />
    <br />
        <h1 className='text-[#d97706] text-4xl'>Hi there! I’m Jai Singh Bhati, a passionate Front-End Developer with a keen eye for detail and a love for creating beautiful, user-friendly web experiences.</h1>
        <br />
      <hr />
<br />
      <h1 className='text-black text-5xl ' > Qualification</h1>
      <br />
      <h1 className='text-black text-xl '> Currently pursuing my Master’s in Computer Applications (MCA) from Manipal University Jaipur.

With a solid grounding in web technologies and a passion for crafting engaging digital experiences, I specialize in bringing designs to life through code. My journey in front-end development is driven by a blend of creativity and technical expertise, always aiming to deliver websites and applications that are both visually appealing and highly functional.</h1>
<br />
<hr />

<br />
<h1 className='text-4xl'>My educational path</h1>
<br />

<h1 className='text-xl'>Studying at Manipal University Jaipur has provided me with a comprehensive understanding of computer science principles and a deep dive into the world of web development. Through my coursework and projects, I’ve honed my skills in:
</h1>
<ul>
<li className='text-xl'>*HTML & CSS: Crafting clean, semantic markup and responsive layouts.</li>
<li className='text-xl'>*JavaScript: Building interactive and dynamic user interfaces with modern ES6+ features.</li>
<li className='text-xl'>*Frameworks: Leveraging tools like React and Vue.js to create scalable, component-based applications.</li>
<li></li>
</ul>
<br />

<br />
<h1 className='text-4xl'>Skills & Tools</h1>
<br />
<hr />
<br />

<ul>
  <li className='text-xl'>*Languages: HTML, CSS, JavaScript (ES6+)</li>
  <li className='text-xl'>*Frameworks & Libraries: React, Vue.js, SASS/SCSS, Bootstrap</li>
  <li className='text-xl'>*Tools: Git, Webpack, VSCode, Figma</li>
  <li className='text-xl'>*Other: Responsive Design, Cross-browser Compatibility, Accessibility (WCAG)</li>
</ul>
<br />

<h1 className='text-4xl'>Beyond Coding</h1>
<br />
<hr />
<br />


<h1 className='text-xl'>
When I’m not coding, you can find me Playing Cricket, "exploring new coffee shops around the city", "hiking", or "diving into the latest tech trends". I believe in continuous learning and am always seeking opportunities to grow both personally and professionally.
</h1>
<br />


<hr />
<br />
<h1 className='text-4xl'>Let's Connect!</h1>
{/* DONT FORGOT TO GIVE GITHUB LINK HERE  */}
<h1 className='text-xl'>I’m always excited to connect with fellow developers, designers, or anyone interested in tech. Feel free to check out my work [link to portfolio or GitHub] or get in touch if you’d like to collaborate or just say hi!</h1>
<br />

    </div>

   </section>
   </div>

      
   

    </div>
  )
}

export default About
