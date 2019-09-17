import React from 'react';

import About from '../container/aboutus';
import Work from '../container/workwithus';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from '../component/header/Header';


const AppRouter=()=> {
    return (
        <Router>
            <Header/>
            <Switch>
                <Route exact path="/about" component={About}/>
                <Route path="/work" component={Work}/>
            </Switch>
        </Router>
    )
}

export default AppRouter;
