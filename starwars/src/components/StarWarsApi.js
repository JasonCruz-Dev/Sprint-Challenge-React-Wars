import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Row } from "reactstrap";
import StarWarsCard from "./StarWarsCard";

function StarWarsApi() {
  // Add your function name here
  const [info, setInfo] = useState([]);

  useEffect(() => {
    axios
      .get("https://swapi.co/api/people") // Your API goes here
      .then(res => {
        console.log("API Is Here: ", res.data); // This will print out a message
        setInfo(res.data.results);
      })

      .catch(error => {
        console.log("Whoops go back, thats an error!", error);
      });
  }, []);

  console.log(info);

  return (
    <Container>
      <Row>
        {info.map(attr => {
          return (
            <StarWarsCard
              name={attr.name}
              height={attr.height}
              mass={attr.mass}
              hair={attr.hair_color === "n/a" ? "has no" : attr.hair} // TERNARY OPERATOR
              skin={attr.skin_color}
              eyes={attr.eye_color}
              birth={attr.birth_year}
              gender={attr.gender === "n/a" ? "Hero and" : attr.gender}
            />
          );
        })}
      </Row>
    </Container>
  ); // THIS IS TO MAKE SURE SOMETHING SHOWS ON THE SCREEN
}

export default StarWarsApi;
