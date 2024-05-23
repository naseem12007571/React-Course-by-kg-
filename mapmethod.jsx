import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import FoodItems from "./Fooditems";
import ErrorMessage from "./ErrorMessage";
import Container from "./Container";
import FoodInput from "./FoodInput";

function App() {
  let foodItems = [
    "sabzi",
    "Allu ki sabji",
    "Green vegetable",
    "Roti",
    "Salad",
    "Milk",
    "Ghee",
  ];

  return (
    <Container>
      <h1 className="food-heading">Healthy food</h1>
      {/* parent to child datapass kia h as argument passs kia this is passing data via props */}
      <ErrorMessage datapasskia={foodItems}></ErrorMessage>
      <FoodInput></FoodInput>
      <FoodItems datapasskia={foodItems}></FoodItems>
    </Container>
  );
}

export default App;
