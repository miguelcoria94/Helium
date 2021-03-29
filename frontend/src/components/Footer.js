import React from 'react'
import { Container, Row, Col } from "react-bootstrap/";

const Footer = () => {
    return (
      <footer>
        <Container>
          <Row>
            <Col className="text-center py-3">
              <i class="fab fa-linkedin"></i> LinkedIn
            </Col>
            <Col className="text-center py-3">
              <i class="fab fa-github-square"></i> Github
            </Col>
            <Col className="text-center py-3">
              <i class="fas fa-folder-open"></i> Other Projects
            </Col>
          </Row>
          <Row>
            <Col className="text-center py-3">
              Copyright &copy; Beauty Empire
            </Col>
          </Row>
        </Container>
      </footer>
    );
}

export default Footer
