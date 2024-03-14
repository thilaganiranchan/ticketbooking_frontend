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
      <img src="https://in.bmscdn.com/webin/static/offers/rbloffer/rbl-banner-3.jpg"  class="img-fluid responsive" height="300"  style={{padding:"0",margin:"0",marginTop:"15px"}}  alt="Responsive image"></img> 
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
      <footer >
        <div style={{backgroundImage:"url('https://png.pngtree.com/thumb_back/fh260/background/20230617/pngtree-empty-cinema-ticket-with-popcorn-filmstrip-clapper-board-and-movie-camera-image_3623913.jpg')", backgroundSize:"cover",backgroundPosition:"center",backgroundRepeat:"no-repeat",marginTop:"40px",paddingTop:"20px",width:"100%"}} >
          <div >
          
          <div> <h1 style={{textAlign:"left",paddingLeft:"20px",color:"wheat"}}>Contact us</h1><br/>
        <p style={{textAlign:"left",paddingLeft:"20px",fontFamily:"sans-serif",fontSize:"20px",color:"whitesmoke"}}>
          Thilagavathi.S<br/>
          Mern Stack Developer<br/>
          Entri Elevate<br/>
          thilaganiranchan@gmail.com
        </p></div>
        {/* <div>
          <img src="https://png.pngtree.com/thumb_back/fh260/background/20230617/pngtree-empty-cinema-ticket-with-popcorn-filmstrip-clapper-board-and-movie-camera-image_3623913.jpg" width={500} height={200} class="img-fluid"   alt="Responsive image"></img>
          </div> */}
        </div>
       

        <br/><br/><br/>
        <p>&copy; 2024 Booking Tickets</p>

        </div>
         
        </footer>
        </div>
    </div>
  );
}

export default Moviespage;
