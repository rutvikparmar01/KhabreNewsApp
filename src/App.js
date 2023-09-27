import React, { Component } from 'react'
import Navbar from './Components/Navbar'
import News from './Components/News'
// import {route,router,browserrouter, Router, Routes} from "react-router-dom"
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar'


export class App extends Component {
  state={
    progress:0
  }
  setProgress=(progress)=>{
    this.setState({progress:progress})
  }
  constructor(){
    super();
    this.state={
      mode:"light",
      edit:"Dark mode",
      color:"#053B50"
    }
   
    }
    setMode= async ()=>{
      if(this.state.mode==="dark"){
        this.setState({
          mode:"light",
          edit:"Dark mode",
          color:"#053B50"
        })
        document.body.style.backgroundColor = 'white';
      }
      else{
        this.setState({
          mode:"dark",
          edit:"Light mode",
          color:"#F8F0E5"
        })
        document.body.style.backgroundColor = "#393646";
      }
    
  }
 render() {
  return (
    <Router>
      <div>
        <Navbar mode={this.state.mode} edit={this.state.edit} color={this.state.color} toggleMode={this.setMode}/>
     
      <LoadingBar
        color='#f11946'
        // background="#78C1F3"
        height={2}
        progress={this.state.progress}
        
      />
      
        <Routes>
                <Route exact path='/' element={<News setProgress={this.setProgress} key="general" category="general"/>}></Route>
                <Route  exact path='/business' element={<News setProgress={this.setProgress} key="busii" category="business"/>}></Route>
                <Route  exact path='/entertainment' element={<News setProgress={this.setProgress} key="entr" category="entertainment"/>}></Route>
                <Route  exact path='/health' element={<News setProgress={this.setProgress} key="health" category="health"/>}></Route>
                <Route  exact path='/science' element={<News setProgress={this.setProgress} key="sci" category="science"/>}></Route>
                <Route exact path='/sports' element={<News setProgress={this.setProgress} key="spo"  category="sports"/>}></Route>
                <Route  exact path='/technology' element={<News setProgress={this.setProgress} key="tech"  category="technology"/>}></Route>
        </Routes>
      </div>



      </Router>
    )
  }
}
export default App
