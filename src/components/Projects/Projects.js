import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ProjectCard from './ProjectCards';
import Particle from '../Particle';
import firstui from '../../Assets/Projects/firstui.png';
import ag from '../../Assets/Projects/ag.png';
import goodshop from '../../Assets/Projects/goodshop.png';
import freshdesign from '../../Assets/Projects/freshdesign.png';
import gd1 from '../../Assets/Projects/gd1.png';
import gd2 from '../../Assets/Projects/gd2.jpg';

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: 'white' }}>
          Here are a few projects I've worked on recently (Web & Graphic Design).
        </p>
        <Row style={{ justifyContent: 'center', paddingBottom: '10px' }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ag}
              isBlog={false}
              title="modern ui (Web)"
              description="An agency website which made use of the most recent technology such as react, css, and many more."
              // ghLink="https://github.com/soumyajit4419/Chatify"
              demoLink="https://agency-x.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={goodshop}
              isBlog={false}
              title="ecommerce shop (Web)"
              description="An ecommerce website which made use of the most recent technology such as react, css, and many more."
              // ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
              demoLink="https://goodshop-hbf4gmt57-johnspinic-gmailcom.vercel.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={firstui}
              isBlog={false}
              title="modern ui design (Web)"
              description="A modern design which makes use of the most recent technology such as react, css, and many more."
              // ghLink="https://github.com/soumyajit4419/Editor.io"
              demoLink="https://firstui.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={freshdesign}
              isBlog={false}
              title="fresh design (Web)"
              description="An ecommerce modern design which makes use of the most recent technology such as nextjs, tailwind, mongodb and many more."
              //ghLink="https://github.com/soumyajit4419/Editor.io"
              demoLink="https://shopy-phi.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={gd1}
              isBlog={false}
              title="potrait banner (Graphic)"
              description="This is a modern graphic design to advertise goods and services on social media. Please, click on the 'link' below to see more Graphic Designs"         
              demoLink="https://www.linkedin.com/in/johnarije/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={gd2}
              isBlog={false}
              title="socialmedia banner (Graphic)"
              description="This is a modern graphic design to advertise goods and services on social media. Please, click on the 'link' below to see more Graphic Designs"         
              demoLink="https://www.linkedin.com/in/johnarije/"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
