import React ,{useState,useEffect}from "react";
import { useNavigate } from "react-router-dom";
import Homenavbar from "../navbar/home_navbar";

import '../css/navbar.css'
import Axios from "axios";
// import Carousel from "../carousels/carousels";
// import '../carousels/carousels.css'
// import ImageSlider from '../carousels/ImageSlider';
// import { SliderData } from '../carousels/SlideData';

function Homepage() {
  const navigate = useNavigate();
  const [movielist, setmovielist] = useState([]);
 

  useEffect(() => {
    Axios.get("https://ticketbooking-backend-atiw.onrender.com/api/movielist").then(response => {
      setmovielist(response.data);
    });
  }, []);
  return (
    <div >
      <Homenavbar />
       <img src="https://in.bmscdn.com/webin/static/offers/rbloffer/rbl-banner-3.jpg"  class="img-fluid" height="300" width={1200} style={{padding:"0",margin:"0",marginTop:"100px"}}  alt="Responsive image"></img> 
       
      <div className="banner" style={{paddingTop:"50px", marginRight:"50px"}}>
      {/* <Carousel/> */}

     
        
      </div>
      <div className="row" style={{ paddingLeft: "50px" }}>
        {movielist.map(val => {
          return (
            <div className="column">
              <div class="card">
                <img src={val.movieimageurl} width="260px" height="350px" />
                <br /> <br/>
                <button
                  className="btn btn-warning"
                  style={{ width: "100%" }}
                  onClick={() => {
                    navigate("/MovieDetails", {
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
                <button style={{ width: "100%" }}
          onClick={() => navigate("/userlogin")}
          type="button"
          class="btn btn-success"
        >
          Book Now
        </button>
              </div>
            </div>
          );
        })}
      </div>
    
      {/* <div className="project__title" >


          
        <p
          style={{
            fontFamily: "'Times New Roman', Times, serif",
            fontSize: "40px",
            lineHeight: "1.7",
            color: "white",
            margin: "0px"
            
          }}
        >
         
        Welcome to Booking Tickets

        </p>
        <button
          onClick={() => navigate("/userlogin")}
          type="button"
          class="btn btn-success"
        >
          Book Now
        </button>
      </div> */}
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

export default Homepage;
