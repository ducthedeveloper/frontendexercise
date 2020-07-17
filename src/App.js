import React, {useState} from 'react';
import './App.css';
import Home from './Home.js';
import Nav from './Nav.js'
import Articles from './Articles.js'
import LogIn from './login.js'
import Register from './Register.js'
import MyArticle from './Myarticles.js'
import About from './About.js'
import {BrowserRouter, Switch, Route} from 'react-router-dom';


function App() {
  
  
return (
    <BrowserRouter>
    
    <Nav/>
    <Route path='/articles' component={Articles}/>
    <Route path='/' exact component={Home}/>
    <Route path='/login' component={LogIn}/>
    <Route path='/register' component={Register}/>
    <Route path='/myarticles' component={MyArticle}/>
    <Route path='/about' component={About}/>
    </BrowserRouter>

)};

export default App;
