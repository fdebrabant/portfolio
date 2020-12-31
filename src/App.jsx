import './css/main.css'
import '../src/css/title.css';
import BurgerMenu from './components/BurgerMenu';
import Banner from './components/Banner';
import Profil from './components/Profil';


function App() {
  return (
    <div className="App" id="outer-container">
      <BurgerMenu />
      <main id="page-wrap">
        <Banner />
        <Profil />
        <h1 className="title">Fanny Debrabant</h1>
        <h1 className="title">Developpeuse Web Junior</h1>
      </main>
    </div>
  );
}

export default App;
