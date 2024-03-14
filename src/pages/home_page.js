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
       <img src="https://in.bmscdn.com/webin/static/offers/rbloffer/rbl-banner-3.jpg"  class="img-fluid responsive" height="300"  style={{padding:"0",margin:"0",marginTop:"15px"}}  alt="Responsive image"></img> 
       
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

export default Homepage;
