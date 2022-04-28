import React, { useState } from 'react';
import logo from './logo.svg';
import Header from './components/Header';
import About from './components/About';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';

function App() {
  const [categories] = useState([
    { name: 'About Me', description: 'Short Bio.' },
    { name: 'Portfolio', description: 'My archive of projects.' },
    { name: 'Contact', description: 'Phone number and email.' },
    { name: 'Resume', description: 'Resume displaying my career and academic history.'}
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  const [contactSelected, setContactSelected] = useState(false);

  return (
    <div className="App">
      <Header
      categories={categories}
      setCurrentCategory={setCurrentCategory}
      currentCategory={currentCategory}
      />
      <main>
        {currentCategory.name === "About Me" && <About/>}
        {currentCategory.name === "Portfolio" && <Portfolio/>}
        {currentCategory.name === "Contact" && <Contact/>}
        {currentCategory.name === "Resume" && <Resume/>}
      </main>
    </div>
  );
}

export default App;
