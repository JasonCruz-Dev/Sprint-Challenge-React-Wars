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
            <CardSubtitle></CardSubtitle>
          </Entry>
        </CardBody>
      </Card>
    </Col>
  );
};

export default StarWarsCard;
