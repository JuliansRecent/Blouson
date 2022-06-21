import { useEffect, useState } from 'react';
import './App.css';
import NavBar from './Components/NavBar/NavBar';
import WhatsHot from './Components/WhatsHot/WhatsHot';
import Product from './Components/Product/Product';
import SelectClothesByGender from './Components/SelectClothesByGender/SelectClothesByGender';

const useFakeStoreAPI = () => {
  const [products, setProducts] = useState([]);

  const updateProducts = () => {
    fetch('https://fakestoreapi.com/products?limit=4')
      .then(res => res.json())
      .then(json => setProducts(json))
      .catch(error => console.log(`There was an error! ${error}`));
  };

  useEffect(() => {
    updateProducts();
  }, []);

  return products;
};

function App() {
  const products = useFakeStoreAPI();
  console.log(products);
    

  return (
    <div className='app'>
      <header>
        <NavBar />
      </header>
      <main>
        <WhatsHot />
        <SelectClothesByGender />

      </main>
    </div>
  );
}

export default App;
