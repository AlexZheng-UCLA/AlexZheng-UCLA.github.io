import React from "react";
import Card from "react-bootstrap/Card";
// import { MdComputer } from "react-icons/md";
// import {GiPokerHand} from "react-icons/gi";
// import {GiFootprint} from "react-icons/gi";
// import {GrRobot} from "react-icons/gr";
import Type1 from "./Type";

function AboutCard() {
  return (
    <Card className="about-card">
      <Card.Body>
          <ul style={{ textAlign: "justify" }}>
            <li>
            👦🏻 Second year MS student in Computer Engineering
            </li>
            <li>
            ✨ key skills: Backend Software Engineering & Machine Learning
            </li>
            <li>
            🛠️ Proficient in Python, C++, PyTorch, FastAPI, Flask, Cloud Platform, MongoDB
            </li>
            <li>
            🌐 Architected and deployed intricate API services on cloud platforms
            </li>
            <li>
            🧠 Led the training, testing, and inference pipelining of machine learning modules
            </li>
            <li>
            ⚙️ Integrated AI models into autonomous workflow software and autonomous driving systems
            </li>
            <li>
            🎖️ Honored as an 'Outstanding Graduate' for my impactful undergraduate thesis
            </li>
          </ul>
          {/* <ul>
            <li className="about-activity">
              <GrRobot /> Learning newest tech -- Computer vision model, Large Language Model, etc.
            </li>
            <li className="about-activity">
              <MdComputer /> Doing cool machine learning project
            </li>
            <li className="about-activity">
              <GiPokerHand /> Playing piano & boardgames 
            </li>
            <li className="about-activity">
              <GiFootprint /> Exploring the city -- who doesnt like LA
            </li>
          </ul> */}

          <p style={{ textAlign: "center"}}>
            <br/>
            <span className="quote">"We are meant to make a difference to the world!"</span>
          </p>
          
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
