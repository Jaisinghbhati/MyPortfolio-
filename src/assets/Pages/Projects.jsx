 import React from 'react'
 import photoo from '/src/project1.jpg'
 import pic from'/src/project2.jpg'
 import img from'/src/project3.jpg'
 
 const Projects = () => {
   return (
     <div>
       <div className='bg-[#d6d3d1] w-full py-[40px] '>

       <section className='container mx-auto flex flex-col md:flex-row flex justify-center space-x-8'>
        {/* link here also on # */}
        <a href="https://github.com/Jaisinghbhati/ToDo-App">
        <div>
  <div className="max-w-sm rounded overflow-hidden shadow-lg">
  <img className="w-full" src={photoo}/>
  <div className="px-6 py-4">
    <a  className="font-bold text-xl mb-2 text-[#292524] underline" href="https://github.com/Jaisinghbhati/ToDo-App" > TO DO APP </a>
  
    <p className="text-[#404040] text-base">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
    </p>
  </div>
 
</div>
        </div>
        </a>
             {/* link here also on # */}
        <a href="https://github.com/Jaisinghbhati/Weather-App">
        <div>
  <div className="max-w-sm rounded overflow-hidden shadow-lg">
  <img className="w-full" src={pic} />
  <div className="px-6 py-4">
  <a  className="font-bold text-xl mb-2 text-[#292524] underline" href="https://github.com/Jaisinghbhati/Weather-App" >WEATHER APP</a>
    <p className="text-[#404040] text-base">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
    </p>
  </div>
 
</div>

        </div>
        </a>

     {/* link here also on # */}
     <a href="https://github.com/Jaisinghbhati/StikcyNotes-App">
        <div>
  <div className="max-w-sm rounded overflow-hidden shadow-lg">
  <img className="w-full" src={img} />
  <div className="px-6 py-4">
  <a  className="font-bold text-xl mb-2 text-[#292524] underline" href="https://github.com/Jaisinghbhati/StikcyNotes-App" >StickyNotes App </a>
    <p className="text-[#404040] text-base">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
    </p>
  </div>
 
</div>

        </div>
        </a>
       
        </section>
      
       </div>
  
     </div>
   )
 }
 
 export default Projects
 