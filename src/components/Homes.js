import React from 'react';
import '../styles/Homes.css'; // Import your CSS file
import Carousel from 'react-bootstrap/Carousel';
import img1 from '../images/img1.jpg';
import img2 from "../images/img2.jpg";
import img3 from "../images/img3.jpg";
import img4 from "../images/img4.jpg";
import img5 from "../images/img5.jpg";
import img6 from "../images/img6.jpg";
// import img7 from "../images/img7.jpg";
// import img8 from "../images/img8.jpg";
import img0 from "../images/img0.jpg";

const Homes = () => {
  return (
    <section className="homes-section">
      <div className='main'>
      <Carousel>

      <Carousel.Item interval={2500}>
          <img src={img0} alt="Fourth slide" />
          <Carousel.Caption>
            {/* <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item interval={2500}>
          <img src={img1} alt="First slide" />
          <Carousel.Caption>
            {/* <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item interval={2500}>
          <img src={img2} alt="Second slide" />
          <Carousel.Caption>
            {/* <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item interval={2500}>
          <img src={img3} alt="Third slide" />
          <Carousel.Caption>
            {/* <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item interval={2500}>
          <img src={img4} alt="Fourth slide" />
          <Carousel.Caption>
            {/* <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item interval={2500}>
          <img src={img5} alt="Fourth slide" />
          <Carousel.Caption>
            {/* <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item interval={2500}>
          <img src={img6} alt="Fourth slide" />
          <Carousel.Caption>
            {/* <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel> 
      </div>
    </section>
  );
}

export default Homes;
