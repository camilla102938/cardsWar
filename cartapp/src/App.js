import {BrowserRouter,Routes,Route} from 'react-router-dom'
import {useState} from 'react'
import './App.css';
import Header from './component/Header';
import Menu from './component/Menu';
import ProductList from './component/ProductList';
import CartList from './component/CartList';
import { Provider } from './contextApi';
import MyComp from './component/MyComp';


function App() {

const [products , setProducts] =useState([{product:'phone', price:1000}, {product:'tablet' , price:400} , {product:'pc' , price:2000}])
const [carts, setCarts] =useState([])


const addToCart = (i) => {
  setCarts([...carts, products[i]])
}


const deleteFromCart = (index)=>{
  let temp = [...carts];
  temp.splice(index,1)
  setCarts([...temp])
}


let userName = 'cam'


  return (
    <div className="App">
      <Header/>

      <Provider value={userName}>
        <MyComp />
      </Provider>

      <BrowserRouter>
      <Menu/>

      <Routes>
        <Route path='/' element={<ProductList  addToCart={addToCart} products={products}/>}/>
        <Route path='/cartPage' element={<CartList carts={carts} deleteFromCart={deleteFromCart}/>}/>
      </Routes>

      </BrowserRouter>

    </div>
  );
}

export default App;
