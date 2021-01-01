import React from 'react';
import './css/main.css';
import BurgerMenu from './components/BurgerMenu';
import Header from './views/Header';
import Status from './views/Status';


function App() {
  return (
    <div className="App" id="outer-container">
      <BurgerMenu />
      <main id="page-wrap">
        <Header />
        <Status />
      </main>
    </div>
  );
}

export default App;
