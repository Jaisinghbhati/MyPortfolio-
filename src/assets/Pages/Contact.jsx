// src/Form.js
import React from 'react';

const Form = () => {
  return (



    <div className="min-h-screen flex items-center justify-center bg-black p-4  ">

      <div className="w-full max-w-md bg-transparent p-6 rounded-lg border border-red-500">
    
        <form action='https://formspree.io/f/mrgnwnlq' method='POST'>
          <h2 className="text-2xl font-bold mb-4 text-white">Feel Free To Talk</h2>
          <div className="mb-4">
            <label className="block text-sm  mb-2 text-white text-xl" htmlFor="username">
              UserName          </label>
            <input
              className="w-full p-2 border border-gray-300 rounded bg-transparent text-white focus:outline-none focus:border-white"
              type="text"
              name='text'
              placeholder="Enter your username"
            />
          </div>
          <div className="mb-4" >
            <label className="block text-sm  mb-2 text-white text-xl" htmlFor="email">
              Email
            </label>
            <input
              className="w-full p-2 border border-gray-300 rounded bg-transparent text-white focus:outline-none focus:border-white"
              type="email"
              name="Email"
              placeholder="Enter your mail"
            />
          </div>
          <div className="mb-4">
            <label className="block  text-xl text-sm  mb-2 text-white" htmlFor="message">
              Message
            </label>
            <textarea
              className="w-full p-2 border border-gray-300 rounded bg-transparent text-white focus:outline-none focus:border-white"
              id="message"
              name='message'
              placeholder="Enter your message"
              rows="4"
            ></textarea>
          </div>
          <div>
            <button
              className="w-full py-2 px-4 border border-white text-white bg-transparent rounded hover:bg-white hover:text-black transition duration-300"
              type="submit"
            >
              SEND
            </button>
          </div>
        </form>
      </div>
    </div>

  );
};

export default Form;
