import React from 'react';
import './css/main.css';
import BurgerMenu from './components/BurgerMenu';
import Header from './views/Header';
import Status from './views/Status';
import Contact from './views/Contact';
import Competences from './views/Competences';
import Projets from './views/Projets';
import Formations from './views/Formations';
import Experiences from './views/Experiences';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App" id="outer-container">
      <BurgerMenu />
      <div id="page-wrap">
        <Header />
        <main>
          <Status />
          <Contact />
          <Competences />
          <Projets />
          <Formations />
          <Experiences />
        </main>
        <Footer /> 
      </div>
    </div>
  );
}

export default App;
