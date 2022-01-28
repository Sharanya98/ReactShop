import React, { Component } from 'react';
import './App.css';
import HomePage from './pages/home.component';
import { Switch ,Route,Link } from 'react-router-dom'


const HatsPage = () =>{
  return(<div>
    
    <h1>Hats Page welcomes you!!!</h1>
   
  </div>)
}
class App extends Component {
  render() {
    return <div className='App'>

    <Route  exact={true} path='/' component={HomePage}/>
    <Route  exact path='/Hats' component={HatsPage} />  
    </div>;
  }
}

export default App;
