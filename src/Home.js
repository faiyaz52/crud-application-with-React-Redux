import React, { Component } from 'react';
import App from './App';
import NavBar from './NavBar';
import Page from './Page';
import { render } from 'react-dom';
import {BrowserRouter as Router , Route,Switch} from 'react-router-dom';
import Header from './Header';
import HomePage from './Containner/HomePage';
import Account from './Containner/Account';
import Notification from './Containner/Notification';
import DaskBoard from './Containner/DaskBoard';
class Home extends Component{

    render(){
        return(
          <div>
            <Router >
                <div>
                   <NavBar/>
                   <Header/>
                   <Switch>
                   <Route exact path="/"component={HomePage}/>
                     <Route exact path="/App"component={App}/>
                     <Route exact path="/Account"component={Account}/>
                     <Route exact path="/Notification"component={Notification}/>
                     <Route exact path="/DaskBoard"component={DaskBoard}/>
                  </Switch>
               </div>
            </Router>
           </div>
        );
    }
}

export default Home;