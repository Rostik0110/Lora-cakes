import React, { Component } from 'react';
import Home from './Components/Home/Home.js';
import Biography from './Components/Biography/Biography.js';
import Orders from "./Components/Orders/Orders";
import Gallery from "./Components/Gallery/Gallery";
import Contacts from "./Components/Contacts/Contacts";
import { BrowserRouter,Route} from 'react-router-dom';
import Config from './Firebase/Config';

const App = () => {
    Config.initializeFirebase();

    return(         
        <BrowserRouter>
            <Route path='/' exact={true} component={Home} />
            <Route path="/Home" component={Home}/>
            <Route path="/Biography" component={Biography}/>
            <Route path="/Orders" component={Orders}/>
            <Route path="/Gallery" component={Gallery}/>
            <Route path="/Contacts" component={Contacts}/>
        </BrowserRouter>
    )
}

export default App;