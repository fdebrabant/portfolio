import './css/main.css'
import BurgerMenu from './components/BurgerMenu';
import Banner from './components/Banner';
import Profil from './components/Profil';
import Title from './components/Title';


function App() {
  return (
    <div className="App" id="outer-container">
      <BurgerMenu />
      <main id="page-wrap">
        <Banner />
        <Profil />
        <Title text='Fanny Debrabant' color='green' />
        <Title text='Developpeuse Web Junior' color='green' outline='hidden'/>
      </main>
    </div>
  );
}

export default App;
