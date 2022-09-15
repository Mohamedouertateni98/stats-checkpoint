


import "./App.css";
import React from "react";
import img from "../src/assets/profpic.jpg";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import LastUpTime from "./components/LastUpTime";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      person: {
        fullName: "",
        bio: "",
        imgSrc: "",
        profession: "",
      },

      show: false,
    };
  }


  handleClick = () => {
    this.setState({
      person: {
        fullName: "Mohamed Ouertateni",
        bio: "Back-end dev & pro Gamer",
        imgSrc: img,
        profession: "Back-End Dev",
      },

      show: !this.state.show,
    });
  };

  render() {
    return (
      <>
        <br></br>
        <Button
          type="button"
          onClick={() => this.handleClick()}
          // variant="danger"
        >
          {this.state.show ? " Hide Profile" : "Show Profile"}
        </Button>
        <br></br>
        <img src={this.state.show && this.state.person.imgSrc} alt="" />
        <div className="desc">
          <h2>{this.state.show && this.state.person.fullName}</h2>
          <h6>{this.state.show && this.state.person.bio}</h6>
          <h6>{this.state.show && this.state.person.profession}</h6>
        </div>
        {this.state.show && <LastUpTime />}
      </>
    );
  }
}

export default App;
