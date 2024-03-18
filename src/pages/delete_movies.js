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
                    Axios.delete("https://ticketbooking-backend-atiw.onrender.com/api/deletemovie/", {
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

export default Deletemovies;
