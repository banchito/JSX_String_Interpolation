//Create a react app from scratch.
//It should display a h1 heading.
//It should display an unordered list (bullet points).
//It should contain 3 list elements.
import React from "react";
import ReactDOM from "react-dom";

const fName = "Esteban";
const lName = "Ordonez";

ReactDOM.render(
  <div>
    <h1>Hello {`${fName} ${lName} << string interpolation`}</h1>
    <h1>
      hello {fName} {lName}
    </h1>
    <h1>hello {fName + " " + lName}</h1>
    <p>my lucky number is {Math.floor(Math.random() * 10)}</p>
  </div>,
  document.getElementById("root")
);
