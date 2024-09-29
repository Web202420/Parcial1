import React, { useState, useEffect } from "react";
import { Container, Row, Col, Modal, Image, Button } from "react-bootstrap";
import RegisterCard from "../card/RegisterCard";
import { FormattedMessage } from "react-intl";

function Home() {
    const [registers, setRegisters] = useState([]);
    const [user, setUser] = useState({});
    const [show, setShow] = useState(false);
    const [currentPost, setCurrentPost] = useState(0);
    const [bestCycling, setBestCycling] = useState("0:00");
    const [bestRunning, setBestRunning] = useState("0:00");
    const [bestSwimming, setBestSwimming] = useState("0:00");
    const images = ["https://www.zellamsee-kaprun.com/bilder/bike/gravel-bike/7840/image-thumb__7840__auto_50aa5baf05281f6b6988b9abf8a8824f/gravelbike-tour-c-salzburg-land-tourismus.jpg", "https://lanoticiasv.com/wp-content/uploads/2023/04/running.jpg", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCXSW1wLUmb8Eddlc-rwRTVXwe0D3x8ck5mA&s"];

    function fetchRegisters() {
        const mockarooApiKey = '1f8e6d30';
        const url = `https://cors-anywhere.herokuapp.com/https://my.api.mockaroo.com/registers.json?key=${mockarooApiKey}`;
        fetch(url)
            .then(response => response.json())
            .then(data => setRegisters(data))
            .catch(error => console.error(error));
    }

    function bestTimes(data) {
        setBestCycling(data.slice(0, 10).reduce((acc, curr) => timeToMinutes(curr.time) > timeToMinutes(acc) ? curr.time : acc, data[0]?.time || "0:00"));
        setBestRunning(data.slice(10, 20).reduce((acc, curr) => timeToMinutes(curr.time) > timeToMinutes(acc) ? curr.time : acc, data[10]?.time || "0:00"));
        setBestSwimming(data.slice(20, 30).reduce((acc, curr) => timeToMinutes(curr.time) > timeToMinutes(acc) ? curr.time : acc, data[20]?.time || "0:00"));
    }
    
    function fetchUser() {
        const url = "https://cors-anywhere.herokuapp.com/https://gist.github.com/wareval0/431dabd2d2c41f49f914f97b6d8b9f8a/raw";
        fetch(url)
            .then(response => response.json())
            .then(data => setUser(data))
            .catch(error => console.error(error));
    }

    function handleClose() {
        setShow(false);
    }

    function handleShow(e) {
        setShow(true);
        setCurrentPost(e.currentTarget.dataset.id);
    }

    useEffect(() => fetchRegisters(), []);
    useEffect(() => fetchUser(), []);
    useEffect(() => bestTimes(registers), [registers]);

    return (
        <div>
            <Container className="overflow-y-auto" style={{ height: "80vh" }}>
                <Row className="py-3">
                    <Col className="col-4">
                        <h2 className="text-center mb-3"><FormattedMessage id="cycling"/></h2>
                        <div className="d-flex flex-wrap column-gap-2 row-gap-2">
                            {registers.slice(0, 10).map((register, index) => (
                                <RegisterCard key={index} index={index} register={register} images={images} title="cyclingSession" handleShow={handleShow} />
                            ))}
                        </div>
                    </Col>
                    <Col className="col-4">
                        <h2 className="text-center mb-3"><FormattedMessage id="running"/></h2>
                        <div className="d-flex flex-wrap column-gap-2 row-gap-2">
                            {registers.slice(10, 20).map((register, index) => (
                                <RegisterCard key={index+10} index={index+10} register={register} images={images} title="runningSession" handleShow={handleShow} />                                
                            ))}
                        </div>
                    </Col>
                    <Col className="col-4">
                        <h2 className="text-center mb-3"><FormattedMessage id="swimming"/></h2>
                        <div className="d-flex flex-wrap column-gap-2 row-gap-2">
                            {registers.slice(20, 30).map((register, index) => (
                                <RegisterCard key={index+20} index={index+20} register={register} images={images} title="swimmingSession" handleShow={handleShow} />
                            ))}
                        </div>
                    </Col>
                </Row>
            </Container>
            <div className="d-flex justify-content-around align-items-center p-3 fw-bold" style={{ height: "20vh", backgroundColor: "#10646c", color: "white", fontSize: "2.5rem" }}>
                <div className="d-flex align-items-center column-gap-3">
                    <Image src={user.image} roundedCircle style={{ width: "110px" }} />
                    <p style={{width: "5rem"}}>{user.fullname}</p>
                </div>
                <span className="d-flex align-items-center">{cyclingIcon()} {bestCycling}</span>
                <span className="d-flex align-items-center">{runningIcon()} {bestRunning}</span>
                <span className="d-flex align-items-center">{swimmingIcon()} {bestSwimming}</span>
            </div>
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Body>
                    <div className="d-flex justify-content-center align-items-center mb-4">
                        <RegisterCard index={currentPost} register={registers[currentPost]} images={images} title={`${Math.trunc(currentPost/10) === 0 ? "cycling" : Math.trunc(currentPost/10) === 1 ? "running" : "swimming"}Session`} w={"100%"} h={"18rem"} />
                    </div>
                    <span className="d-flex justify-content-end">
                        <Button variant="primary" onClick={handleClose}>
                        <FormattedMessage id="close"/>
                        </Button>
                    </span>
                </Modal.Body>
            </Modal>
        </div>
    );
}

export default Home;

function timeToMinutes(time) {
    const [hours, minutes] = time.split(':').map(Number);
    return hours * 60 + minutes;
}

function cyclingIcon() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={80}
            height={80}
            viewBox="0 0 24 24"
            style={{ fill: "rgba(255, 255, 255, 1)", transform: "", msfilter: "" }}
        >
            <path d="M11 15.414V20h2v-4.586c0-.526-.214-1.042-.586-1.414l-2-2L13 9.414l2 2c.372.372.888.586 1.414.586H20v-2h-3.586l-3.707-3.707a.999.999 0 0 0-1.414 0L8 9.586c-.378.378-.586.88-.586 1.414s.208 1.036.586 1.414l3 3z" />
            <circle cx={16} cy={5} r={2} />
            <path d="M18 14c-2.206 0-4 1.794-4 4s1.794 4 4 4 4-1.794 4-4-1.794-4-4-4zm0 6c-1.103 0-2-.897-2-2s.897-2 2-2 2 .897 2 2-.897 2-2 2zM6 22c2.206 0 4-1.794 4-4s-1.794-4-4-4-4 1.794-4 4 1.794 4 4 4zm0-6c1.103 0 2 .897 2 2s-.897 2-2 2-2-.897-2-2 .897-2 2-2z" />
        </svg>
    );
}

function runningIcon() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={80}
            height={80}
            viewBox="0 0 24 24"
            style={{ fill: "rgba(255, 255, 255, 1)", transform: "", msfilter: "" }}
        >
            <circle cx={17} cy={4} r={2} />
            <path d="M15.777 10.969a2.007 2.007 0 0 0 2.148.83l3.316-.829-.483-1.94-3.316.829-1.379-2.067a2.01 2.01 0 0 0-1.272-.854l-3.846-.77a1.998 1.998 0 0 0-2.181 1.067l-1.658 3.316 1.789.895 1.658-3.317 1.967.394L7.434 17H3v2h4.434c.698 0 1.355-.372 1.715-.971l1.918-3.196 5.169 1.034 1.816 5.449 1.896-.633-1.815-5.448a2.007 2.007 0 0 0-1.506-1.33l-3.039-.607 1.772-2.954.417.625z" />
        </svg>
    );
}

function swimmingIcon() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={80}
            height={80}
            viewBox="0 0 24 24"
            style={{ fill: "rgba(255, 255, 255, 1)", transform: "", msfilter: "" }}
            >
            <circle cx="19.003" cy="6.002" r="2.002" />
            <path d="M18.875 13.219c-.567.453-.978.781-1.878.781-.899 0-1.288-.311-1.876-.781-.68-.543-1.525-1.219-3.127-1.219-1.601 0-2.445.676-3.124 1.219-.588.47-.975.781-1.875.781-.898 0-1.286-.311-1.873-.78C4.443 12.676 3.6 12 2 12v2c.897 0 1.285.311 1.872.78.679.544 1.523 1.22 3.123 1.22s2.446-.676 3.125-1.22c.587-.47.976-.78 1.874-.78.9 0 1.311.328 1.878.781.679.543 1.524 1.219 3.125 1.219 1.602 0 2.447-.676 3.127-1.219.588-.47.977-.781 1.876-.781v-2c-1.601 0-2.446.676-3.125 1.219zM16.997 19c-.899 0-1.288-.311-1.876-.781-.68-.543-1.525-1.219-3.127-1.219-1.601 0-2.445.676-3.124 1.219-.588.47-.975.781-1.875.781-.898 0-1.286-.311-1.873-.78C4.443 17.676 3.6 17 2 17v2c.897 0 1.285.311 1.872.78.679.544 1.523 1.22 3.123 1.22s2.446-.676 3.125-1.22c.587-.47.976-.78 1.874-.78.9 0 1.311.328 1.878.781.679.543 1.524 1.219 3.125 1.219 1.602 0 2.447-.676 3.127-1.219.588-.47.977-.781 1.876-.781v-2c-1.601 0-2.446.676-3.125 1.219-.567.453-.978.781-1.878.781zM11 5.419l2.104 2.104-2.057 2.57c.286-.056.596-.093.947-.093 1.602 0 2.447.676 3.127 1.219.588.47.977.781 1.876.781.9 0 1.311-.328 1.878-.781.132-.105.274-.217.423-.326l-2.096-2.09.005-.005-5.5-5.5a.999.999 0 0 0-1.414 0l-4 4 1.414 1.414L11 5.419z" />
        </svg>
    );
}
    