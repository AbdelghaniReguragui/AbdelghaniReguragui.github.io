import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am{" "}
            <span className="purple">REGURAGUI Abdelghani </span>
            from <span className="purple"> Casablanca, Morocco.</span>
            <br />I am a
            <span className="purple"> software engineer student </span>
            in the 3rd year of the engineering cycle in
            <span className="purple"> Mundiapolis University </span>
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Boxing
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ marginBlockEnd: 0, color: "rgb(155 126 172)" }}>
            "!!!!!!!!!!!!!!!!!"{" "}
          </p>
          <footer className="blockquote-footer">Abdelghani</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
