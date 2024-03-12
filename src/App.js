import "./App.css";
import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/home_page";
import Userlogin from "./pages/user_login";
import Adminlogin from "./pages/admin_login";
import Signup from "./pages/signup";
import Moviespage from "./pages/movies_page";
import Userprofile from "./pages/user_profile";
import Adminpage from "./pages/admin_page";
import Movieupload from "./pages/movie_upload";
import Adminprofile from "./pages/admin_profile";
import { MovieDetails } from "./pages/movie_details";
import Bookingform from "./pages/booking_form";
import { Seatselection } from "./pages/seat_selection";
import Mybookings from "./pages/my_bookings";
import Deletemovies from "./pages/delete_movies";
import Bookedmovies from "./pages/booked_movies";
import { Bookingdetails } from "./pages/booking_details";
import { Videoscreen } from "./pages/video_screen";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/userlogin" element={<Userlogin />} />
        <Route path="/adminlogin" element={<Adminlogin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/moviespage" element={<Moviespage />} />
        <Route path="/userprofile" element={<Userprofile />} />
        <Route path="/adminpage" element={<Adminpage />} />
        <Route path="/movieupload" element={<Movieupload />} />
        <Route path="/bookingdetails" element={<Bookingdetails />} />
        <Route path="/adminprofile" element={<Adminprofile />} />
        <Route path="/moviedetails" element={<MovieDetails />} />
        <Route path="/bookingform" element={<Bookingform />} />
        <Route path="/pickceat" element={<Seatselection />} />
        <Route path="/mybooking" element={<Mybookings />} />
        <Route path="/deletemovie" element={<Deletemovies />} />
        <Route path="/bookings" element={<Bookedmovies />} />
        <Route path="/videoscreen" element={<Videoscreen />} />
      </Routes>
    </div>
  );
}

export default App;
