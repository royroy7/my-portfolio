import React, { Component } from "react";
import './About.css';
import MyPic from '../../assets/me.JPG';

class About extends Component {
  constructor() {
    super()
    this.state = {
      message: <span>
        <Section
          fullname="Russel Roy Y. Garcia"
          age="21 years old"
          address="Gapan City, Nueva Ecija"
        />
      </span>
    }
  }

  changeMessage() {
    if (this.state.isMessageOne) {
      this.setState({
        message: <span>
          <Section
            fullname="Russel Roy Y. Garcia"
            age="21 years old"
            address="Gapan City, Nueva Ecija"
          />
        </span>,
        isMessageOne: false,
      });
    } else {
      this.setState({
        message: <span>
          <SectionTwo
            educ="Currently Studying at"
            educ1="Central Luzon State University"
            bac="Taking Bachelor of "
            bac1="Science in Information Technology"
            hob="Basketball, Baseball, "
            hob1="Wild Rift, Valorant, CS2"
          />
        </span>,
        isMessageOne: true,
      });
    }
  }

  render() {
    return (
      <div>
        <h2>{this.state.message}</h2>
        <button className="learnMore"
          onClick={() => this.changeMessage()}>
          More Info About Me?
        </button>
      </div>
    );
  }
}

const Section = (props) => {
  return (
    <section id="about">
      <h1 className="about-title">Learn More About Me</h1>

      <div className="about-content">
        <span className="firstline">
          Full Name: {props.fullname} <br />
          Age: {props.age} <br />
          Address: {props.address}
        </span>

        <div className="mypic">
          <img className="pic" src={MyPic} />
        </div>
      </div>

    </section>
  );
};

const SectionTwo = (props) => {
  return (
    <section id="about">
      <h1 className="about-title">Learn More About Me</h1>

      <div className="about-content">
        <span className="firstline">
          Educational Background: <br /> {props.educ} <br /> {props.educ1}
          <br /> {props.bac} <br /> {props.bac1} <br /> <br />
          Hobbies: <br /> {props.hob} <br /> {props.hob1}
        </span>

        <div className="mypic">
          <img className="pic" src={MyPic} />
        </div>
      </div>

    </section>
  );
};

export default About;