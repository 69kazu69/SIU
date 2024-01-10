import React from "react";

import { logo } from "../assets";

const Hero = () => {
  return (
    <header className='w-full flex justify-center items-center flex-col'>
      <nav className='flex justify-between items-center w-full mb-10 pt-3'>
<p className="head_text">
  SIU
</p>
        <button
          type='button'
          onClick={() =>
            window.open("https://github.com/69kazu69", "_blank")
          }
          className='black_btn'
        >
          GitHub
        </button>
      </nav>

      <h1 className='head_text'>
        Sum It Up by<br className='max-md:hidden' />
        <span className='orange_gradient '>Aanchal Walia</span>
      </h1>
      <h2 className='desc'>
        An open-source article summarizer
        that transforms lengthy articles into clear and concise summaries
      </h2>
    </header>
  );
};

export default Hero;
