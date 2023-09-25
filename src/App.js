import React, { Component } from 'react'
import Navbar from './Components/Navbar'
import News from './Components/News'
// import {route,router,browserrouter, Router, Routes} from "react-router-dom"
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';

export class App extends Component {
  constructor(){
    super();
    this.state={
      mode:"light"
    }
   
    }
    setMode= async ()=>{
      if(this.state.mode==="dark"){
        this.setState({
          mode:"light"
        })
        document.body.style.backgroundColor = 'white';
      }
      else{
        this.setState({
          mode:"dark"
        })
        document.body.style.backgroundColor = "#393646";
      }
    
  }
 render() {
  return (
    <Router>
      <div>
        <Navbar mode={this.state.mode} toggleMode={this.setMode}/>
      
        <Routes>
                <Route exact path='/' element={<News  key="general" category="general"/>}></Route>
                <Route  exact path='/business' element={<News key="busii" category="business"/>}></Route>
                <Route  exact path='/entertainment' element={<News key="entr" category="entertainment"/>}></Route>
                <Route  exact path='/health' element={<News key="health" category="health"/>}></Route>
                <Route  exact path='/science' element={<News key="sci" category="science"/>}></Route>
                <Route exact path='/sports' element={<News key="spo"  category="sports"/>}></Route>
                <Route  exact path='/technology' element={<News key="tech"  category="technology"/>}></Route>
        </Routes>
      </div>



      </Router>
    )
  }
}
export default App
