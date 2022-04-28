import React from 'react';
import coverImage from '../../assets/images/me2.jpg';
import Footer from '../Footer';

function About() {
  return (
    <div>
    <section className="my-5">
      <h1 id="about">About Me</h1>
      <img src={coverImage} className="my-2" style={{ width: "50%" }} alt="cover" />
      <div className="my-2">
        <p>
        Born in Cleveland, OH, I was raised in multiple other cities across the country until July of 2014 when I came back to my homestate. I first spent 2 years learning to become a machinist while living in Youngstown, OH and shortly after started working in the trade. Eventually I landed a job in the Cleveland area and moved there working at a total of 3 companies. 
        However, after being laid off from two of those jobs, I figured that a more dependable trade would be more suitable for me and my lifestyle. The COVID-19 pandemic also made me realize that a lockdown proof career would come in handy for any future crisis. Interestingly enough, I came across and advertisement for a cyber security coding bootcamp at Case Western Reserve University . The idea of remote working in the technological field had always been enticing to me. After a I was laid of from my second job, I decided to make the call.
        Now I am currently in the program and am dedicated to learn everything I need to become a sufficient full stack developer. By May 5th of 2022 I shall obtain my certificate of completion and start competing in the web developer's job market. Throughout my progression my work done during and possibly outside of my schooling will be listed and updated on a regular basis. Enjoy watching me walk down this new path to success!
        </p>
      </div>
    </section>
    <Footer/>
    </div>
  );
}

export default About;