// import React from "react";
// import "./Background.css";
// function Background() {
//   return (
//     <>
//       <div className="background">
//         <div className="col">
//           {/* <div className="postion">
//             <h1>We make a vey good food </h1>
//             <button>Show More</button>
//           </div> */}
//         </div>
//       </div>
//       <div className="title-menu">
//         <h1 className="show">Our Menu</h1>
//       </div>
//     </>
//   );
// }

// export default Background;
import Carousel from "react-bootstrap/Carousel";
import "./Background.css";

function Background() {
  return (
    <div>
      <Carousel id="home" data-bs-theme="dark" className="container-Carousel">
        <Carousel.Item>
          <img
            className="d-block  image-edit"
            src="images/bg1.jpg"
            alt="First slide"
          />
          <Carousel.Caption className="text">
            <h5>Delicious Food</h5>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block image-edit"
            src="images/bg2.jpg"
            alt="Third slide"
          />
          <Carousel.Caption className="text">
            <h5>Pizza</h5>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block  image-edit"
            src="images/bg.jpg"
            alt="Second slide"
          />
          <Carousel.Caption className="text">
            <h5>Smach Burger </h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <div className="title-menu">
        <h1 className="show">Our Menu</h1>
      </div>
    </div>
  );
}

export default Background;
