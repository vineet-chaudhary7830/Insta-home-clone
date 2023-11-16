

import React, { Component } from 'react'
import NavbarNews from './NavbarNews';
import News from './News';
import { BrowserRouter } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

export default class NewsMain extends Component {
  render() {
    return (
      <div>
    <NavbarNews/>
    {/* <News/> */}
    <Routes>
        
          <Route path="/" element={<News/>}/> 
          <Route path="/health" element={<News key="health" pageSize={5} country="in" category="health"/>}/>
          <Route path="/technology" element={<News key="technology" pageSize={5} country="in" category="technology"/>}/>
          <Route path="/business" element={<News key="business" pageSize={5} country="in" category="business"/>}/>
        
          
          {/* <NavbarNews pageSize={5} country="in" category="business"/> */}
    
          {/* <Route exact path="/entertainment"> <NavbarNews pageSize={5} country="in" category="entertainment"/></Route>
          <Route exact path="/general"> <NavbarNews pageSize={5} country="in" category="genral"/></Route>
          <Route exact path="/health"> <NavbarNews pageSize={5} country="in" category="health"/></Route>
          <Route exact path="/science"> <NavbarNews pageSize={5} country="in" category="science"/></Route>
          <Route exact path="/sports"> <NavbarNews pageSize={5} country="in" category="sports"/></Route>
          <Route exact path="/technology"> <NavbarNews pageSize={5} country="in" category="technology"/></Route> */}
        </Routes> 
    
{/* <News pageSize={4} country="in" category="health"/> */}







        {/* <Router> */}
        
            {/* <News pageSize={5} country="in" category="business"/> */}
            
        {/* A <Routes> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        {/* <Routes>
          <Route exact path="/"> <News pageSize={5} country="in" category="business"/></Route>
          <Route exact path="/entertainment"> <News pageSize={5} country="in" category="entertainment"/></Route>
          <Route exact path="/general"> <News pageSize={5} country="in" category="genral"/></Route>
          <Route exact path="/health"> <News pageSize={5} country="in" category="health"/></Route>
          <Route exact path="/science"> <News pageSize={5} country="in" category="science"/></Route>
          <Route exact path="/sports"> <News pageSize={5} country="in" category="sports"/></Route>
          <Route exact path="/technology"> <News pageSize={5} country="in" category="technology"/></Route>
        </Routes> 
        </Router> */}
      </div>
    )
  }
}
