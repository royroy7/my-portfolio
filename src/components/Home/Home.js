import React, { Component } from "react";
import './Home.css'
import mainPic from '../../assets/main-pic.png';
import ReactTyped from "react-typed";

class Home extends Component {
  render() {
    return <section id="home">
      <div className="home-content">

        <span className="hello">Hello
          <span className="wave" role="img" aria-labelledby="wave"> 👋🏻</span>
        </span> <br />
        
        <span className="introText">I'M
          <span className="introName"> RUSSEL ROY</span>
        </span> <br />

        <TypeWriter />

      </div>

      <img src={mainPic} alt="ICON" className="mainPic" />

    </section>
  }
}

const TypeWriter = () => {
  return (
    <div>
      <h5>
        <ReactTyped className="typewriter"
          strings={["Web-Developer", "Front-End Web Developer", "Back-End Web Developer", "Full-Stack Web Developer (lol)"]}
          typeSpeed={100}
          loop
          backSpeed={20}
          cursorChar="}"
          showCursor={true}
        />
      </h5>
    </div>
  );
}

// const TiltEffect = () => {
//   return (
//     <ReactParallaxTilt glareEnable={false} tiltMaxAngleX={10}
//       tiltMaxAngleY={10} perspective={1000}>
//     </ReactParallaxTilt>
//   )
// }


export default Home;