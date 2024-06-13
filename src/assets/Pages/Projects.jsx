
import React from 'react';


// Importing Images
import project1 from '/src/project1.jpg';
import project2 from '/src/project2.jpg';
import project3 from '/src/project3.jpg';

const Project = () => {

  return (
<div>

{/* Cards section */}
    <div className="bg-[#CD8C8C] text-[#866C69] p-5 ">
      <h2 className="text-6xl md:text-6xl  mb-6 flex justify-center p-3  font-['Debazneu']">My Projects</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 pt-[50px] lg:pl-[100px] ">
        {/* Project 1 */}
  
        <div className="bg-[#D4B8B1] p-1 rounded-lg shadow-lg flex flex-col items-center transform transition duration-500 hover:scale-105 hover:shadow-2xl w-[300px] h-[500px] ">
          <div className="w-full h-64 md:h-80 lg:h-96 mb-4 bg-gray-700 rounded-lg overflow-hidden transition duration-500">
            <img src={project1} alt="Project 1" className="w-full h-full " />
          </div>
         <a href="https://github.com/Jaisinghbhati/ToDo-App"> <h3 className="text-l font-semibold mb-2 transition duration-500 text-black transform hover:scale-105 underline ">TODO LIST PROJECT</h3></a>
          <p className="text-black transition duration-500 transform hover:scale-105 p-2">A productivity-enhancing application built with React and Tailwind CSS, empowering users to manage tasks efficiently. Seamlessly organize, prioritize, and track tasks with intuitive features for a streamlined workflow.

</p>
        </div>
      

        {/* Project 2 */}
      
        <div className="bg-[#D4B8B1] p-1 rounded-lg shadow-lg flex flex-col items-center transform transition duration-500 hover:scale-105 hover:shadow-2xl w-[300px] h-[500px] ">
          <div className="w-full h-64 md:h-80 lg:h-96 mb-4 bg-gray-700 rounded-lg overflow-hidden transition duration-500">
            <img src={project2} alt="Project 2" className="w-full h-full  " />
          </div>
        <a href="https://github.com/Jaisinghbhati/Weather-App">  <h3 className="text-l font-semibold mb-2 transition duration-500 transform  text-black hover:scale-105 underline ">WEATHER APP</h3></a>
          <p className="text-black transition duration-500 transform hover:scale-105 p-2">A weather forecasting tool crafted with React and Tailwind CSS, delivering real-time weather updates. Empowers users with accurate weather information, aiding in planning and decision-making with detailed forecasts at their fingertips..</p>
        </div>


        {/* Project 3 */}
    
   
        <div className="bg-[#D4B8B1] p-1 rounded-lg shadow-lg flex flex-col items-center transform transition duration-500 hover:scale-105 hover:shadow-2xl w-[300px] h-[500px] ">
          <div className="w-full h-64 md:h-80 lg:h-96 mb-4 bg-gray-700 rounded-lg overflow-hidden transition duration-500">
            <img src={project3} alt="Project 3" className="w-full h-full  " />
          </div>
         <a href="https://github.com/Jaisinghbhati/StikcyNotes-App"> <h3 className="text-l font-semibold mb-2 transition duration-500  text-black transform hover:scale-105 underline ">STICKY NOTES</h3></a>
          <p className="text-black transition duration-500 transform hover:scale-105 p-2">An interactive note-taking platform leveraging React, Tailwind CSS, and Framer Motion. Transforming digital note-taking with dynamic animations, users can effortlessly create, organize, and personalize their notes for enhanced productivity and creativity.</p>
        </div>
      
      </div>
      
      
   

    


   
   
    </div>
    </div>
  
  );
};


export default Project;