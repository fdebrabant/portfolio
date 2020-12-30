import React from 'react';
import { push as Menu } from 'react-burger-menu';
import '../css/burgermenu.css'
  

class BurgerMenu extends React.Component {
  showSettings (event) {
    event.preventDefault();
  }

  render () {
    // NOTE: You also need to provide styles, see https://github.com/negomi/react-burger-menu#styling
    return (
      <Menu pageWrapId={ "page-wrap" } outerContainerId={ "outer-container" }>
        <a id="home" className="menu-item" href="/">Home</a>
        <a id="contact" className="menu-item" href="/contact">Contact</a>
        <a id="competences" className="menu-item" href="/competences">Competences</a>
        <a id="projets" className="menu-item" href="/projets">Projets</a>
        <a id="formations" className="menu-item" href="/formations">Formations</a>
        <a id="experiences" className="menu-item" href="/experiences">Experiences</a>     
      </Menu>
    );
  }
}

export default BurgerMenu;