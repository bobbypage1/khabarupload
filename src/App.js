import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {
  
  Route,
  Routes,
 
  BrowserRouter,
} from "react-router-dom";

export default class App extends Component {
  pageSize=5;
  render() {
    return ( <BrowserRouter>
      <div>
        <Navbar/>
        




        <Routes>
        {/* <News pageSize={this.pageSize} country="in" category='general'/> */}
        <Route exact path="/home" element={<News key="general" pageSize={this.pageSize} country="in" category='general'></News>}/>;         
        {/* <Route exact path="/general" element={<News key="general" pageSize={this.pageSize} country="in" category='general'></News>}/>;          */}
        <Route exact path="/business" element={<News key="business" pageSize={this.pageSize} country="in" category='business'></News>}/>;
        <Route exact path="/entertainment" element={<News key="entertainment" pageSize={this.pageSize} country="in" category='entertainment'></News>}/>;
        {/* <Route exact path="/general" element={<News key="general" pageSize={this.pageSize} country="in" category='general'></News>}/>; */}
        <Route exact path="/health" element={<News key="health" pageSize={this.pageSize} country="in" category='health'></News>}/>;
        <Route exact path="/science" element={<News key="science" pageSize={this.pageSize} country="in" category='science'></News>}/>;
        <Route exact path="/sports" element={<News key="sports" pageSize={this.pageSize} country="in" category='sports'></News>}/>;
        <Route exact path="/technology" element={<News key="technology" pageSize={this.pageSize} country="in" category='technology'></News>}/>;
        
    
  

 </Routes>   
       

      </div>
      </BrowserRouter>
      
      
    )
  }
}

