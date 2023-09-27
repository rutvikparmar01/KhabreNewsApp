import React, { Component } from 'react'
import {  Link } from 'react-router-dom';

export class Navbar extends Component {
 
  render() {
    let {mode,toggleMode,edit,color}=this.props
    return (
      <div >
        <nav className={`navbar navbar-expand-lg navbar-${mode} bg-${mode}`}>
          <Link className="navbar-brand" to="/" >Khabre</Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
         <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <Link className="nav-link" to="/">Home<span className="sr-only">(current)</span></Link>
              </li>
              <li className="nav-item"><Link className="nav-link" to="/business">business</Link> </li>
              <li className="nav-item"><Link className="nav-link" to="/entertainment">entertainment</Link> </li>
              <li className="nav-item"><Link className="nav-link" to="/health">health</Link> </li>
              <li className="nav-item"><Link className="nav-link" to="/science">science </Link> </li>
              <li className="nav-item"><Link className="nav-link" to="/sports">sports </Link> </li>
              <li className="nav-item"><Link className="nav-link" to="/technology">technology </Link> </li>
              

                
              
                
             
            </ul>
          </div>
          {/* <div className="form-group form-check"> */}
    {/* <input onClick={toggleMode} type="checkbox" className="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label" htmlFor="exampleCheck1">Click to dark mode!</label>
  </div> */}
  <div className="custom-control custom-switch">
  <input type="checkbox" onClick={toggleMode} className="custom-control-input" id="customSwitch1"/>
  <label className="custom-control-label" style={{color:"#E25E3E"}} htmlFor="customSwitch1">{edit}</label>
</div>
      
        </nav>
      </div>
    )
  }
}

export default Navbar
