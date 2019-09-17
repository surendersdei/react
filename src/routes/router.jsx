import React from 'react';

import About from '../container/aboutus';
import Work from '../container/workwithus';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from '../component/Header/Header';

const AppRouter=()=> {
    return (
       
           <Router>
                <Header/>
                <Route path="/about" component={About}/>
                <Route path="/work" component={Work}/>
           </Router>
       
    )
}

export default AppRouter;
