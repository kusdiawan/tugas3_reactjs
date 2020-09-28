import React, { Component }  from 'react';
import './App.css';
import Header from './Page/Header';
import MenuMakanan from './Page/MenuMakanan';
import MenuKontak from './Page/MenuKontak';
import Footer from './Page/Footer';

class App extends Component {
   render() {
    return(
   <div>
   <Header/>
   <MenuMakanan/>
   <MenuKontak/>
   <Footer/> 
   </div>

      )
   }
} 


export default App;
