import React from 'react';
import journeyImage from '/src/skill1.svg'; 
import skillsImage from '/src/skill2.svg';
import htmlLogo from '/src/HTML.svg';
import cssLogo from '/src/CSS.svg';
import jsLogo from '/src/Javascript.svg';
import bootstrapLogo from '/src/Bootstrap.svg';
import reactLogo from '/src/React.svg';
import tailwindLogo from '/src/Tailwind.svg';
import vscodeLogo from '/src/VsCode.svg';
import githubLogo from '/src/GitHub.svg';
import academicImage from'/src/Acadamic.svg'
import projectsImage from '/src/skill3.svg'
import futureImage from '/src/Future.svg'

const About = () => {
  return (
    <section className="bg-[#B85042] text-gray-300 py-12 px-6 sm:px-10 md:py-20 md:px-24">
      <div className="max-w-5xl mx-auto space-y-16">
        {/* About Me Section */}
        <div className="text-center">
          <h2 className="text-3xl sm:text-5xl md:text-5xl font-bold text-[#E7E8D1] mb-8">
            About Me
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl leading-relaxed max-w-3xl mx-auto text-[#E7E8D1]">
            I am currently pursuing my Master of Computer Applications (MCA) from Manipal University Jaipur.
            Additionally, I am undertaking a 12-month certification course in Full Stack Development at the Ducat Noida branch.
            This combination of academic learning and hands-on training is providing me with a comprehensive understanding of the field.
          </p>
        </div>

        {/* Academic Background Section */}
        <div className="md:flex items-center space-y-8 md:space-y-0 md:space-x-8">
          <div className="md:w-1/2 mb-8 md:mb-0 p-6 bg-transparent border border-blue-600 rounded-lg transform transition hover:scale-105 hover:bg-blue-600 hover:bg-opacity-20 shadow-lg">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-4 text-white">
              Academic Background
            </h3>
            <p className="text-base sm:text-lg md:text-xl leading-relaxed text-justify">
             
              From a young age, I was fascinated by how computers work and the endless possibilities they offer.
              At Manipal University Jaipur, I am delving into advanced topics in software development, algorithms, and system design.
              This academic pursuit is complemented by practical training in full-stack development, where I am gaining hands-on experience with cutting-edge technologies.
            </p>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <img src={academicImage} alt="Academic Background" className="w-full h-auto max-w-md" />
          </div>
        </div>

        {/* Skills Section */}
        <div className="md:flex items-center space-y-8 md:space-y-0 md:space-x-8">
          <div className="md:w-1/2 mb-8 md:mb-0 p-6 bg-transparent border border-indigo-600 rounded-lg transform transition hover:scale-105 hover:bg-indigo-600 hover:bg-opacity-20 shadow-lg">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-4 text-white">
              Skills
            </h3>
            <ul className="list-disc pl-5 space-y-2 text-base sm:text-lg md:text-xl">
              <li>Front-End Development: Proficient in HTML, CSS, and JavaScript, with a focus on creating intuitive and engaging user experiences.</li>
              <li>React Framework: Experienced in building responsive, high-performance web applications using React and its ecosystem.</li>
              <li>Full-Stack Knowledge: Working knowledge of back-end technologies and databases, enabling seamless integration across the stack.</li>
            </ul>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <img src={skillsImage} alt="Skills" className="w-full h-auto max-w-md" />
          </div>
        </div>

        {/* Projects Section */}
        <div className="md:flex md:flex-row-reverse items-center space-y-8 md:space-y-0 md:space-x-8 md:space-x-reverse">
          <div className="md:w-1/2 mb-8 md:mb-0 p-6 bg-transparent border border-purple-600 rounded-lg transform transition hover:scale-105 hover:bg-purple-600 hover:bg-opacity-20 shadow-lg">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-4 text-white">
              Projects
            </h3>
            <p className="text-base sm:text-lg md:text-xl leading-relaxed text-justify">
              Throughout my training and education, I have been involved in numerous projects that have allowed me to apply my skills in real-world scenarios.
              From developing interactive websites to creating complex web applications, each project has been a stepping stone in honing my abilities.
              Working on these projects has not only solidified my understanding of core concepts but also taught me the importance of collaboration, problem-solving, and innovation.
            </p>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <img src={projectsImage} alt="Projects" className="w-full h-auto max-w-md" />
          </div>
        </div>

        {/* Journey Section */}
        <div className="md:flex items-center space-y-8 md:space-y-0 md:space-x-8">
          <div className="md:w-1/2 mb-8 md:mb-0 p-6 bg-transparent border border-green-600 rounded-lg transform transition hover:scale-105 hover:bg-green-600 hover:bg-opacity-20 shadow-lg">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-4 text-white">
              My Journey
            </h3>
            <p className="text-base sm:text-lg md:text-xl leading-relaxed text-justify">
              My journey into technology started with a curiosity about how things work and a drive to create impactful solutions.
              This curiosity has grown into a passion for web development, specializing in front-end development, where I focus on creating interfaces that are both functional and visually appealing.
              My educational background and hands-on experiences have provided me with a solid foundation in computer science principles and a deep understanding of modern web technologies.
            </p>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <img src={journeyImage} alt="Journey" className="w-full h-auto max-w-md" />
          </div>
        </div>

        {/* Future Goals Section */}
        <div className="md:flex md:flex-row-reverse items-center space-y-8 md:space-y-0 md:space-x-8 md:space-x-reverse">
          <div className="md:w-1/2 mb-8 md:mb-0 p-6 bg-transparent border border-red-600 rounded-lg transform transition hover:scale-105 hover:bg-red-600 hover:bg-opacity-20 shadow-lg">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-4 text-white">
              Future Goals
            </h3>
            <p className="text-base sm:text-lg md:text-xl leading-relaxed text-justify">
              Looking forward, I aim to leverage my front-end development skills and React expertise to contribute to innovative projects that make a significant impact.
              I am constantly eager to learn new technologies and enhance my skills, aspiring to become a versatile and adaptive developer in the rapidly evolving tech landscape.
              My goal is to keep pushing the boundaries of what's possible on the web and to bring my ideas to life through code.
            </p>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <img src={futureImage} alt="Future Goals" className="w-full h-auto max-w-md" />
          </div>
        </div>

        {/* Tools and Technologies Section */}
        <div className="text-center">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-8 text-white">
            Tools and Technologies
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 place-items-center">
            {/* HTML Logo */}
            <div className="w-24 h-24 md:w-32 md:h-32 p-4 bg-transparent border border-gray-600 rounded-lg transform transition hover:scale-110 hover:bg-gray-600 hover:bg-opacity-20 shadow-lg">
              <img src={htmlLogo} alt="HTML" className="w-full h-full object-contain" />
            </div>
             {/* CSS Logo */}
             <div className="w-24 h-24 md:w-32 md:h-32 p-4 bg-transparent border border-gray-600 rounded-lg transform transition hover:scale-110 hover:bg-gray-600 hover:bg-opacity-20 shadow-lg">
              <img src={cssLogo} alt="CSS" className="w-full h-full object-contain" />
            </div>
            {/* JavaScript Logo */}
            <div className="w-24 h-24 md:w-32 md:h-32 p-4 bg-transparent border border-gray-600 rounded-lg transform transition hover:scale-110 hover:bg-gray-600 hover:bg-opacity-20 shadow-lg">
              <img src={jsLogo} alt="JavaScript" className="w-full h-full object-contain" />
            </div>
            {/* Bootstrap Logo */}
            <div className="w-24 h-24 md:w-32 md:h-32 p-4 bg-transparent border border-gray-600 rounded-lg transform transition hover:scale-110 hover:bg-gray-600 hover:bg-opacity-20 shadow-lg">
              <img src={bootstrapLogo} alt="Bootstrap" className="w-full h-full object-contain" />
            </div>
            {/* React Logo */}
            <div className="w-24 h-24 md:w-32 md:h-32 p-4 bg-transparent border border-gray-600 rounded-lg transform transition hover:scale-110 hover:bg-gray-600 hover:bg-opacity-20 shadow-lg">
              <img src={reactLogo} alt="React" className="w-full h-full object-contain" />
            </div>
            {/* Tailwind CSS Logo */}
            <div className="w-24 h-24 md:w-32 md:h-32 p-4 bg-transparent border border-gray-600 rounded-lg transform transition hover:scale-110 hover:bg-gray-600 hover:bg-opacity-20 shadow-lg">
              <img src={tailwindLogo} alt="Tailwind CSS" className="w-full h-full object-contain" />
            </div>
            {/* Visual Studio Code Logo */}
            <div className="w-24 h-24 md:w-32 md:h-32 p-4 bg-transparent border border-gray-600 rounded-lg transform transition hover:scale-110 hover:bg-gray-600 hover:bg-opacity-20 shadow-lg">
              <img src={vscodeLogo} alt="Visual Studio Code" className="w-full h-full object-contain" />
            </div>
            {/* GitHub Logo */}
            <div className="w-24 h-24 md:w-32 md:h-32 p-4 bg-transparent border border-gray-600 rounded-lg transform transition hover:scale-110 hover:bg-gray-600 hover:bg-opacity-20 shadow-lg">
              <img src={githubLogo} alt="GitHub" className="w-full h-full object-contain" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;