import React, { useState, useEffect } from "react";
import axios from "axios";

function ChangeThis() {
  // Add your function name here
  const [info, setInfo] = useState([]);

  useEffect(() => {
    axios
      .get(" Your API Goes Here  ") // Your API goes here
      .then(res => {
        console.log("API Is Here: ", res.data); // This will print out a message
        setInfo(res.data);
      })

      .catch(error => {
        console.log("Whoops go back, thats an error!", error);
      });
  }, []);

  console.log(info);

  return <div>This Page Is Left Blank Intentionally</div>; //This is make sure to show something on the screen
}

export default ChangeThis;
