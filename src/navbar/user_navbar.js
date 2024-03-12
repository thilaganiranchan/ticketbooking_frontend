import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../css/navbar.css";

function Usernavbar() {
  const navigate = useNavigate();
  const navFunction = () => {
    localStorage.clear();
    navigate("/");
  };
  return (
    <div>
      <nav className="navbar navbar-inverse ">
        <div className="container-fluid">
          <div className="navbar-header">
            <button
              type="button"
              className="navbar-toggle"
              data-toggle="collapse"
              data-target="#myNavbar"
            >
              <span className="icon-bar" />
              <span className="icon-bar" />
              <span className="icon-bar" />
            </button>
            <a class="navbar-brand" href="#">
      <img src="https://static.vecteezy.com/system/resources/previews/019/997/832/original/comedy-and-tragedy-theatrical-masks-theatre-or-drama-school-logo-design-symbol-vector.jpg" alt="Bootstrap" width="120" height="80"/>
    </a>
  
      <a className="navbar-brand" href="#" style={{marginTop:"35px",paddingLeft:"20px"}}>
     BOOKING TICKETS</a>
          </div>
          <div className="collapse navbar-collapse" id="myNavbar">
            <ul className="nav navbar-nav navbar-right">
              <li>
                <Link to="/moviespage">
                  <span className="glyphicon glyphicon-home" />&nbsp;&nbsp;Home
                </Link>
              </li>
              <li>
                <Link to="/userprofile">
                  <span className="glyphicon glyphicon-user" />&nbsp;&nbsp;Profile
                </Link>
              </li>
              <li>
                <Link to="/" onClick={navFunction}>
                  <span className="glyphicon glyphicon-log-in" />&nbsp;&nbsp;Logout
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Usernavbar;
