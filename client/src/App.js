import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';

import Home from './pages/Home';
import Jumbotron from './components/Jumbotron';
import SavedBooks from './pages/SavedBooks';






function App() {
  
  
  
  return (
    <div className="App">
       
        <Jumbotron/>
        <Router>    
        <Route  exact path="/" component={Home}/>
        <Route exact path='/savedBooks' component={SavedBooks}/>
        </Router>
      
    </div>
  );
}

export default App;
