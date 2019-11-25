import React from "react";
import { Card, CardBody, CardTitle, CardSubtitle, Col } from "reactstrap";

const StarWarsCard = ({ name, height, mass, hair, skin, eyes, birth, gender }) => {
  return (
    <Col>
      <Card>
        <CardBody>
          <Entry>
            <Div>
              <CardTitle></CardTitle>
            </Div>
            <CardSubtitle>
              {name} was born on {birth} and grew to be a {gender}. Was {height} tall, and {mass}
              weight. With an appearance of Big Beautiful {eyes} eyes, {hair} hair and {skin} skin.
            </CardSubtitle>
          </Entry>
        </CardBody>
      </Card>
    </Col>
  );
};

export default StarWarsCard;
