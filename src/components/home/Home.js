import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

function Home() {
    const [registers, setRegisters] = useState([]);

    function fetchCycling() {
        const mockarooApiKey = '1f8e6d30';
        const url = `https://cors-anywhere.herokuapp.com/https://my.api.mockaroo.com/registers.json?key=${mockarooApiKey}`;
        fetch(url)
            .then(response => response.json())
            .then(data => setRegisters(data))
            .catch(error => console.error(error));
    }

    useEffect(() => fetchCycling(), []);

    return (
        <div>
            <Container className="overflow-y-auto" style={{ height: "80vh" }}>
                <Row>
                    <Col className="col-4 d-flex flex-wrap column-gap-2 row-gap-2">
                        {registers.slice(0, 10).map((register, index) => (
                            <Card className="bg-dark text-white" style={{ width: "48%" }}>
                                <Card.Img src="https://www.zellamsee-kaprun.com/bilder/bike/gravel-bike/7840/image-thumb__7840__auto_50aa5baf05281f6b6988b9abf8a8824f/gravelbike-tour-c-salzburg-land-tourismus.jpg" alt="Card image" />
                                <Card.ImgOverlay>
                                    <Card.Title className="fs-6">Cycling Session</Card.Title>
                                    <Card.Text className="fs-6">
                                        Recorrido alrededor de la bahia de {register.city}
                                    </Card.Text>
                                    <Card.Text className="fs-6">{register.distance} - {register.time}h</Card.Text>
                                </Card.ImgOverlay>
                            </Card>
                        ))}
                    </Col>
                    <Col className="col-4 d-flex flex-wrap column-gap-2 row-gap-2">
                        {registers.slice(0, 10).map((register, index) => (
                            <Card className="bg-dark text-white" style={{ width: "48%" }}>
                                <Card.Img src="https://lanoticiasv.com/wp-content/uploads/2023/04/running.jpg" alt="Card image" />
                                <Card.ImgOverlay>
                                    <Card.Title className="fs-6">Running Session</Card.Title>
                                    <Card.Text className="fs-6">
                                        Recorrido alrededor de la bahia de {register.city}
                                    </Card.Text>
                                    <Card.Text className="fs-6">{register.distance} - {register.time}h</Card.Text>
                                </Card.ImgOverlay>
                            </Card>
                        ))}
                    </Col>
                    <Col className="col-4 d-flex flex-wrap column-gap-2 row-gap-2">
                        {registers.slice(0, 10).map((register, index) => (
                            <Card className="bg-dark text-white" style={{ width: "48%" }}>
                                <Card.Img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCXSW1wLUmb8Eddlc-rwRTVXwe0D3x8ck5mA&s" alt="Card image" />
                                <Card.ImgOverlay>
                                    <Card.Title className="fs-6">Swimming Session</Card.Title>
                                    <Card.Text className="fs-6">
                                        Recorrido alrededor de la bahia de {register.city}
                                    </Card.Text>
                                    <Card.Text className="fs-6">{register.distance} - {register.time}h</Card.Text>
                                </Card.ImgOverlay>
                            </Card>
                        ))}
                    </Col>
                </Row>
            </Container>
            <div style={{ height: "20vh", border: "1px solid black" }}></div>
        </div>
    );
}

export default Home;