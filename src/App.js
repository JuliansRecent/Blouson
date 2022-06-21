import { useEffect, useState } from 'react';
import './App.css';
import NavBar from './Components/NavBar/NavBar';
import Product from './Components/Product/Product';

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
    <div>
      <header>
        <NavBar />
      </header>
      <main>
        <Product product={products}/>
      </main>
    </div>
  );
}

export default App;
