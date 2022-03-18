import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import icinema from "../../Assets/Projects/icinema.jpg";
import holberton from "../../Assets/Projects/holberton2.jpg";
import car from "../../Assets/Projects/car.jpg";
import quran from "../../Assets/Projects/quran.jpg";
import smile from "../../Assets/Projects/SD-ml.jpg";
import esport from "../../Assets/Projects/esport.jpg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={icinema}
              isBlog={false}
              title="ICinema"
              description=""
              link="https://github.com/AbdelghaniReguragui/ICinema"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={quran}
              isBlog={false}
              title="Quran App"
              description=""
              link="https://github.com/AbdelghaniReguragui/Quran-App"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={car}
              isBlog={false}
              title="Rental Car"
              description=""
              link="https://github.com/AbdelghaniReguragui/Rental-Car"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={esport}
              isBlog={false}
              title="E-Sport Platform"
              description=""
              link="https://github.com/AbdelghaniReguragui/ESport-Platform"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={smile}
              isBlog={false}
              title="AI Smile Detection"
              description=""
              link="https://github.com/AbdelghaniReguragui/Smile-detection"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={holberton}
              isBlog={false}
              title="Holberton ML"
              description=""
              link="https://github.com/AbdelghaniReguragui/mundiapolis-ml"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
