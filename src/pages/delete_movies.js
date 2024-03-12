import Axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Adminnavbar from "../navbar/admin_navbar";


function Deletemovies() {
  const [movielist, setmovielist] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    Axios.get("https://ticketbooking-backend-atiw.onrender.com/api/movielist").then(response => {
      setmovielist(response.data);
    });
  }, []);

  return (
    <div>
      <Adminnavbar />
      <br />
      {/* <h1
        style={{
          textAlign: "left",
          paddingLeft: "73px",
          color: "white",
          fontFamily: "cursive"
        }}
      >
        Theater Movies
      </h1> */}
      <div className="row" style={{ padding: "50px" }}>
        {movielist.map(val => {
          return (
            <div className="column">
              <div className="card" style={{ textAlign: "left" }}>
                <img src={val.movieimageurl} width="260px" height="350px" />
                <br />
                <br />
                {/* <button
                  className="btn btn-warning"
                  style={{ width: "100%" }}
                  onClick={() => {
                    navigate("/Movieupdate", {
                      state: {
                        
                        movieimageurl: val.movieimageurl,
                        movievideourl:val.movievideourl,
                        moviename:val.moviename,
                        ticketcost: val.ticketcost,
                        moviedescription: val.moviedescription,
                        actorname: val.actorname,
                        directorname:val.directorname,
                        startdate: val.startdate,
                        enddate: val.enddate
                      }
                    });
                  }}
                >
                  Update
                </button>
                <br/> */}
                <button
                  className="btn btn-danger"
                  style={{ width: "100%" }}
                  onClick={() => {
                    Axios.delete("https://ticketbooking-backend-atiw.onrender.com/deletemovie/", {
                      params: {
                        moviename: val.moviename
                      }
                    }).then(response => {
                      if (response.data === "Movie Deleted Successfully") {
                        alert("Movie Deleted Successfully");
                      }
                    });
                  }}
                >
                  Delete
                </button>

               
              </div>
              <br />
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

export default Deletemovies;
