import React from "react";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";

const Home = () =>
    <div>
        <Container style={{ marginTop: 30 }}>
            <Row>
                <Col size="md-12">
                    <h1>Click it brah</h1>
                </Col>
            </Row>
            <Row>
                <Col size="md-12">
                    <p>
                        Placeholder content
            </p>
                </Col>
            </Row>
        </Container>
    </div>

export default Home;