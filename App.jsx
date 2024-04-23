import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import FoodItems from "./component/FoodItems";
import ErrorMessage from "./component/ErrorMassage"; 
import "./App.css";
import Container from "./component/Container";
import FoodInput from "./component/FoodInput";

function App() {
  let foodItems = ["Chickens", "Biryanis", "Muttons", "Butters", "Fruits"]; 

  return (
    <Container>
      <h1 className="heading">Healthy food</h1> 
      <FoodInput></FoodInput>
      <FoodItems items={foodItems}></FoodItems>
      <ErrorMessage items={foodItems}></ErrorMessage> 
    </Container>
  );
}

export default App;


// basice method
// function App() {
//   let foodlist = ["Chikens", "Biryanis", " Muttons", " buttors ", "Fruths"];
//   return (
//     <React.Fragment>
//       <h1>healthy food</h1>

//       <ul class="list-group">
//         <li class="list-group-item">Chiken</li>
//         <li class="list-group-item">Biryani</li>
//         <li class="list-group-item">mutton</li>
//         <li class="list-group-item"> buttor chicken</li>
//         <li class="list-group-item"> fruth </li>
//       </ul>
//     </React.Fragment>
//   );
// }

// export default App;
