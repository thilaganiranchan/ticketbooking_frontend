// import Axios from "axios";
// import React, { useState } from "react";
// import { Navigate, useLocation } from "react-router-dom";
// import "../css/movie_upload.css";
// import Adminnavbar from "../navbar/admin_navbar";

// function Movieupdate() {
//   const location = useLocation();
//   var movieimageurl=location.state.movieimageurl;
//   var viedourl = location.state.viedourl;
//   var moviename = location.state.moviename;
//   var description = location.state.description;
//   var actorname = location.state.actorname;
//   var directorname = location.state.directorname;
//   var releasedate = location.state.releasedate;
//   var outdate = location.state.outdate;
//   // const [movieimageurl, setmovieimageurl] = useState("");
//   // const [movievideourl, setmovievideourl] = useState("");
//   // const [moviename, setmoviename] = useState("");
//   // const [ticketcost, setticketcost] = useState("");
//   // const [moviedescription, setmoviedescription] = useState("");
//   // const [actorname, setactorname] = useState("");
//   // const [directorname, setdirectorname] = useState("");
//   // const [startdate, setstartdate] = useState("");
//   // const [enddate, setenddate] = useState("");

//   const handleSubmit = e => {
//     e.preventDefault();
//     if (
//       movieimageurl === "" ||
//       movievideourl === "" ||
//       moviename === "" ||
//       ticketcost === "" ||
//       moviedescription === "" ||
//       actorname === "" ||
//       directorname === "" ||
//       startdate === "" ||
//       enddate === ""
//     ) {
//       alert("please fill all fields");
//     } else {
//       Axios.put("http://localhost:3001/api/movieupdate", {
//         movieimageurl: movieimageurl,
//         movievideourl: movievideourl,
//         moviename: moviename,
//         ticketcost: ticketcost,
//         moviedescription: moviedescription,
//         actorname: actorname,
//         directorname: directorname,
//         startdate: startdate,
//         enddate: enddate
//       }).then(response => {
//         if (response.data == "Movie Update Successfully") {
//           alert("Movie Update Successfully");
//         }
//         // setmovieimageurl("");
//         // setmovievideourl("");
//         // setmoviename("");
//         // setticketcost("");
//         // setmoviedescription("");
//         // setactorname("");
//         // setdirectorname("");
//         // setstartdate("");
//         // setenddate("");
//       });
//     }
//   };

//   return (
//     <div>
//       <Adminnavbar />
//       <div class="limiter" style={{ marginTop: "2%" }}>
//         <div
//           class="container-login100"
//           style={{ backgroundColor: "transparent", marginTop: "-2%" }}
//         >
//           <div class="wrap-login100" style={{ height: "950px" }}>
//             <form class="login100-form validate-form p-l-55 p-r-55 p-t-178">
//               <span class="login100-form-title">Update Movie </span>

//               <div
//                 class="wrap-input100 validate-input m-b-16"
//                 data-validate="Please enter username"
//               >
//                 <input
//                   class="input100"
//                   type="text"
//                   name="username"
//                   value={movieimageurl}
//                   onChange={e => setmovieimageurl(e.target.value)}
//                   placeholder="Movieimageurl"
//                 />
//                 <span class="focus-input100" />
//               </div>

//               <div
//                 class="wrap-input100 validate-input m-b-16"
//                 data-validate="Please enter username"
//               >
//                 <input
//                   class="input100"
//                   type="text"
//                   name="username"
//                   value={movievideourl}
//                   onChange={e => setmovievideourl(e.target.value)}
//                   placeholder="Movievideourl"
//                 />
//                 <span class="focus-input100" />
//               </div>

//               <div
//                 class="wrap-input100 validate-input"
//                 data-validate="Please enter password"
//               >
//                 <input
//                   class="input100"
//                   type="text"
//                   value={moviename}
//                   onChange={e => setmoviename(e.target.value)}
//                   placeholder="Moviename"
//                 />
//                 <span class="focus-input100" />
//               </div>
//               <br />
//               <div
//                 class="wrap-input100 validate-input m-b-16"
//                 data-validate="Please enter username"
//               >
//                 <input
//                   class="input100"
//                   type="text"
//                   name="username"
//                   value={ticketcost}
//                   onChange={e => setticketcost(e.target.value)}
//                   placeholder="Ticketcost"
//                 />
//                 <span class="focus-input100" />
//               </div>
//               <div
//                 class="wrap-input100 validate-input m-b-16"
//                 data-validate="Please enter username"
//               >
//                 <input
//                   class="input100"
//                   type="text"
//                   name="username"
//                   value={moviedescription}
//                   onChange={e => setmoviedescription(e.target.value)}
//                   placeholder="Description"
//                 />
//                 <span class="focus-input100" />
//               </div>
//               <div
//                 class="wrap-input100 validate-input m-b-16"
//                 data-validate="Please enter username"
//               >
//                 <input
//                   class="input100"
//                   type="text"
//                   name="username"
//                   value={actorname}
//                   onChange={e => setactorname(e.target.value)}
//                   placeholder="Actorname"
//                 />
//                 <span class="focus-input100" />
//               </div>
//               <div
//                 class="wrap-input100 validate-input m-b-16"
//                 data-validate="Please enter username"
//               >
//                 <input
//                   class="input100"
//                   type="text"
//                   name="username"
//                   value={directorname}
//                   onChange={e => setdirectorname(e.target.value)}
//                   placeholder="Directorname"
//                 />
//                 <span class="focus-input100" />
//               </div>
//               <div
//                 class="wrap-input100 validate-input m-b-16"
//                 data-validate="Please enter username"
//               >
//                 <input
//                   class="input100"
//                   type="date"
//                   name="username"
//                   value={startdate}
//                   onChange={e => setstartdate(e.target.value)}
//                 />
//                 <span class="focus-input100" />
//               </div>
//               <div
//                 class="wrap-input100 validate-input m-b-16"
//                 data-validate="Please enter username"
//               >
//                 <input
//                   class="input100"
//                   type="date"
//                   name="username"
//                   value={enddate}
//                   onChange={e => setenddate(e.target.value)}
//                 />
//                 <span class="focus-input100" />
//               </div>
//               <br />
//               <div class="container-login100-form-btn">
//                 <button class="login100-form-btn" onClick={handleSubmit}>
//                   Update Movie
//                 </button>
//               </div>

//               <div class="flex-col-c p-t-40 p-b-40" />
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Movieupdate;
