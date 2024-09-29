import { Card } from "react-bootstrap";
import { FormattedMessage } from "react-intl";

function RegisterCard(props) {
    return (
        <Card className="bg-dark text-white" style={{ cursor: "pointer", width: props.w ? props.w : "48%", height: props.h ? props.h : "9rem" }} onClick={props.handleShow}  data-id={props.index} >
            <Card.Img src={props.images[Math.trunc(props.index/10)]} alt="Register Image" className="h-100" />
            <Card.ImgOverlay>
                <Card.Title className={props.w ? "fs-1" : "fs-6"}><FormattedMessage id={props.title}/></Card.Title>
                <Card.Text style={{fontSize: props.w ? "2rem" : ".75rem"}}>
                    <FormattedMessage id="cardText"/>{props.register.city}
                </Card.Text>
                <Card.Text style={{fontSize: props.w ? "2rem" : ".8rem"}}>{props.register.distance}k - {props.register.time}h</Card.Text>
            </Card.ImgOverlay>
        </Card>
    );
}

export default RegisterCard;