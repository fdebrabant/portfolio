import React from 'react';
import './css/main.css';
import BurgerMenu from './components/BurgerMenu';
import Header from './views/Header';
import Status from './views/Status';
import Contact from './views/Contact';


function App() {
  return (
    <div className="App" id="outer-container">
      <BurgerMenu />
      <main id="page-wrap">
        <Header />
        <Status />
        <Contact />
      </main>
    </div>
  );
}

export default App;
