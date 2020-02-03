import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from "./Footer";


function App() {
  return (
    <div className="container">
      <Header />
      <Main nDiv = {20}/>
      <Footer />
    </div>
  );
}

export default App;
