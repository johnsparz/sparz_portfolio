import React from 'react';
import Card from 'react-bootstrap/Card';
import { ImPointRight } from 'react-icons/im';

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: 'justify' }}>
            Hi Everyone, I am <span className="purple">John Arije </span> AKA{' '}
            <span className="purple">Johnsparz </span>
            from <span className="purple"> Nigeria.</span>
            <br />I am a Cybersecurity graduate from FUTA,
            Nigeria.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Watching manutd play
            </li>
            <li className="about-activity">
              <ImPointRight /> Chatting with friends & family
            </li>
            <li className="about-activity">
              <ImPointRight /> Praying
            </li>
          </ul>

          <p style={{ color: 'rgb(155 126 172)' }}>
            "Steady development is great development!"{' '}
          </p>
          <footer className="blockquote-footer">Arije</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
