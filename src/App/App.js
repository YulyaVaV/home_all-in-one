import './App.scss';
import Catalog from '../components/Catalog/Catalog';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header.jsx'
import Search from '../components/Search/Search.jsx';
import Categories from '../components/Categories/Categories';
import PhoneFooter from '../components/PhoneFooter/PhoneFooter';

export const App = () => {
  return (
    <div className="App">
      <Header />

      <Search />

      <Categories />

      <Catalog />

      <Footer />

      <PhoneFooter />
    </div>
  );
}

export default App;
