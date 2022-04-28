import React from 'react';
import Footer from '../Footer';

function Resume() {
  return (
    <div className='fixed-footer'>
      <h2 className='py-2'>Resume</h2>
      <h4>Skill List</h4>
      <ul className='resume'>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>JQuery</li>
        <li>BootStrap</li>
        <li>Node.js</li>
        <li>Jest</li>
        <li>Express.js</li>
        <li>MySql</li>
        <li>Sequelize</li>
        <li>Handlebars</li>
        <li>Computer Science Fundamentals</li>
        <li>NoSQL (MongoDB)</li>
        <li>React</li>
        <li>GraphQL</li>
      </ul>
      <a href="https://my.indeed.com/p/edwardp-xy0vn6v" target="_blank">Click here for resume!</a>
      <Footer />
    </div>
  )
}

export default Resume;

// Add link to resume and put static text above it (different Dev skills I have)