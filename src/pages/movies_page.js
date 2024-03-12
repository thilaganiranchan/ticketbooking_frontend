import Axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Usernavbar from "../navbar/user_navbar";
import "../css/movielist.css";

function Moviespage() {
  const [movielist, setmovielist] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    Axios.get("https://ticketbooking-backend-atiw.onrender.com/api/movielist").then(response => {
      setmovielist(response.data);
    });
  }, []);

  return (
    <div>
      <Usernavbar />
      <br />
      <img src="https://in.bmscdn.com/webin/static/offers/rbloffer/rbl-banner-3.jpg"  class="img-fluid" height="300" width={1200} style={{padding:"0",margin:"0",marginTop:"100px"}}  alt="Responsive image"></img> 
      {/* <h1
        style={{
          textAlign: "left",
          paddingLeft: "112px",
          color: "white",
          fontFamily: "cursive"
        }}
      >
        New Releases
      </h1> */}
      <br />
      <br />
      <div className="row" style={{ paddingLeft: "50px",paddingTop:"10px" }}>
        {movielist.map(val => {
          return (
            <div className="column"style={{paddingTop:"40px"}}>
              <div class="card" >
                <img src={val.movieimageurl} width="260px" height="350px" />
                <br />
                <button
                  className="btn btn-warning"
                  style={{ width: "80%" }}
                  onClick={() => {
                    navigate("/moviedetails", {
                      state: {
                        viedourl: val.movievideourl,
                        moviename: val.moviename,
                        description: val.moviedescription,
                        actorname: val.actorname,
                        directorname: val.directorname,
                        releasedate: val.startdate,
                        outdate: val.enddate
                      }
                    });
                  }}
                >
                  View Details
                </button>
                <br />
                <button
                  className="btn btn-success"
                  style={{ width: "80%" }}
                  onClick={() => {
                    navigate("/bookingform", {
                      state: {
                        releasedate: val.startdate,
                        outdate: val.enddate,
                        moviename: val.moviename,
                        ticketcost: val.ticketcost
                      }
                    });
                  }}
                >
                  Book Now
                </button>
              </div>
            </div>
          );
        })}
      </div>
      <div>
        <footer>
        <div style={{backgroundColor:"black", marginTop:"40px",paddingTop:"20px"}}>
        <h1 style={{textAlign:"left",paddingLeft:"20px"}}>Contact us</h1><br/>
        <p style={{textAlign:"left",paddingLeft:"20px",fontFamily:"sans-serif",fontSize:"20px"}}>
          Thilagavathi.S<br/>
          Mern Stack Developer<br/>
          Entri Elevate<br/>
          thilaganiranchan@gmail.com
        </p><br/><br/><br/>
        <p>&copy; 2024 Booking Tickets</p>

        </div>
         
        </footer>
        </div>
    </div>
  );
}

export default Moviespage;
