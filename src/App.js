import React from "react";
import Home from './Home'
import Error from './Error'
import About from './About'
import Products from './Products'
import Contact from './Contact';
import Cart from './Cart'
import SingleProduct from './SingleProduct'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import { GlobalStyle } from "./GlobalStyle";
import { ThemeProvider } from "styled-components";
import Header from "./Components/Header";
import Footer from "./Components/Footer";


const App = () => {
const theme={
  colors:{
    heading:"",
    text:"rgba(29,29,29,.8)",
    white:"#fff",
    black:"#4a4946",
    helper:"#b55196",
    bg:"#65abc2",
    footer_bg:"#342c36",
    btn:"rgb(98 84 243)",
    border:"rgba(98,84,243,0.5)",
    hr:"#ffffff",
    gradient:"linear-gradient(0deg,rgb(132 144 255)0%,rgb(98 189 252)100%)",
    shadow:"rgba(0,0,0,0.02)0px 1px 3px 0px,rgba(27,31,35,0.15) 0px 0px 0px 1px",
    shadowSupport:"rgba(0,0,0,0.16)0px 1px 4px"
  },
  media:{
    mobile:"768px",
    tab:"998px",
  },
};
  return(
    <ThemeProvider theme = {theme}>
    <Router>
    <GlobalStyle/>
    <Header/>
    <Routes>
      <Route path="/" element={<Home/>}>Home</Route>
      <Route path="/about" element={<About/>}>About</Route>
      <Route path="/products" element={<Products/>}>Products</Route>
      <Route path="/contact" element={<Contact/>}>Contact</Route>
      <Route path="/singleproduct/:id" element={<SingleProduct/>}>SingleProduct</Route>
      <Route path="/cart" element={<Cart/>}>Cart</Route>
      <Route path="*" element={<Error/>}>Error</Route>
    </Routes>
    </Router>
    <Footer/>
    </ThemeProvider>
    );
};

export default App;
