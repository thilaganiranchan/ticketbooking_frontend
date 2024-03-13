import React from 'react';
import { Link } from 'react-router-dom';
import '../css/navbar.css';




function Homenavbar() {
  
  return (
    <div>
        <nav className="navbar navbar-inverse nav1 " >
  <div className="container-fluid">
    <div className="navbar-header">
      <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>                        
      </button>
      
    <a class="navbar-brand" href="#">
      <img src="https://static.vecteezy.com/system/resources/previews/019/997/832/original/comedy-and-tragedy-theatrical-masks-theatre-or-drama-school-logo-design-symbol-vector.jpg" alt="Bootstrap" width="120" height="80"/>
    </a>
  
      <a className="navbar-brand" href="#" style={{marginTop:"35px",paddingLeft:"20px"}}>
     BOOKING TICKETS</a>
    </div>
    <div className="collapse navbar-collapse" id="myNavbar">
      <ul className="nav navbar-nav navbar-right">
          <li><Link to="/"><span className="glyphicon glyphicon-home"></span>&nbsp;&nbsp;Home</Link></li>
        <li><Link to="/signup"><span className="glyphicon glyphicon-user"></span>&nbsp;&nbsp;Sign Up</Link></li>
        <li><Link to="/userlogin"><span className="glyphicon glyphicon-log-in"></span>&nbsp;&nbsp;Login</Link></li>
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Homenavbar
