import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';

import Home from './pages/Home';
import Jumbotron from './components/Jumbotron';
import SavedBooks from './pages/SavedBooks';
import NoMatch from './pages/NoMatch';
import Footer from './components/Footer';





function App() {
  
  
  
  return (
    <div className="App">S
       
        <Jumbotron/>
        <Router>    
        <Route  exact path="/" component={Home}/>
        <Route exact path='/savedBooks' component={SavedBooks}/>
        <Route exact path = '/noMatch' component={NoMatch} />
        </Router>
        <Footer/>
    </div>
  );
}

export default App;
