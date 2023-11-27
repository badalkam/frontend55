import React from "react";
import Card from "react-bootstrap/Card";
import { FaLocationArrow } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function Cards(props) {
  const navigate = useNavigate();

  const handlebuynow = () => {
    navigate("/contact");
  };
  return (
    <div>
      <div className="cardleft overflow ">
        <Card style={{ width: "20rem" }} onClick={handlebuynow}>
          <img src={props.imgsrc} alt="" className="imgsrc" />
          <Card.Body>
            <Card.Title>{props.Title}</Card.Title>
            <Card.Text>{props.Text}</Card.Text>
            <div className="location">
              <FaLocationArrow />
              <Card.Text>{props.Location}</Card.Text>
            </div>

            <span className="price">{props.Price}</span>
            <span className="discount">{props.Discount}</span>
            <br />
            <button className="buynowbutton">Buy Now</button>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

