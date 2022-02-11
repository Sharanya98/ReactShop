import React, { Component } from 'react';
import './App.css';
import HomePage from './pages/homepage/home.component';
import { Switch ,Route} from 'react-router-dom'
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import signInSignUP from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component'
import signInSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';

class App extends Component {
  render() {
    return <div className='App'>
    <Header />
      <Switch >

    <Route  exact path='/' component={HomePage}/>
    <Route  path='/shop' component={ShopPage} />  
    <Route path='/signin' component={signInSignUp} />
      </Switch>
    </div>;
  }
}

export default App;
