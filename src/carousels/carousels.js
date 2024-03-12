import Carousel from 'react-bootstrap/Carousel';
import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import ExampleCarouselImage from 'components/ExampleCarouselImage';

function IndividualIntervalsExample() {
  return (
    <Carousel>
      <Carousel.Item interval={1500}>
      <img src="https://media.istockphoto.com/id/1401019613/photo/movie-tickets-online-booking-app.webp?b=1&s=170667a&w=0&k=20&c=CoE9sFDDR8vt56WJ3YJmI44z4ygNif2K68jWl79ZSmE=" height={300} width={1000} class="d-block w-100" alt="..."/>
       
      </Carousel.Item>
      <Carousel.Item interval={1500}>
      <img src="https://in.bmscdn.com/webin/static/offers/rbloffer/rbl-banner-3.jpg" height={300}  class="d-block w-100" alt="..."/>
       
      </Carousel.Item>
      <Carousel.Item interval={1500}>
      <img src="https://png.pngtree.com/thumb_back/fh260/background/20230617/pngtree-empty-cinema-ticket-with-popcorn-filmstrip-clapper-board-and-movie-camera-image_3623913.jpg" height={300} width={1500} class="d-block w-100" alt="..."/>
       
      </Carousel.Item>
      <Carousel.Item interval={1500}>
      <img src="https://i.pinimg.com/736x/47/30/76/47307699f89d0fbb969fc931c5f74c4f.jpg" height={300} width={1500} class="d-block w-100" alt="..."/>
       
      </Carousel.Item>
      <Carousel.Item interval={1500}>
      <img src="https://v3img.voot.com/resizeMedium,w_1090,h_613/jioimage/94/42/133b1470f1be11e9971715bd626539d2_1571414403131_l_medium.jpg" height={300} width={1500} class="d-block w-100" alt="..."/>
       
      </Carousel.Item>
    </Carousel>
  );
}

export default IndividualIntervalsExample;