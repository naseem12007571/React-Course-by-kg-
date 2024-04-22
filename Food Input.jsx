import styles from "./FoodInput.module.css";
const FoodInput = () => {

const handlOneChangeEvent=(Event)=>{
    console.log(Event.target.value);
    
}

  return (
    <input
      type="text"
      placeholder="Enter food item here "
      className={styles.FoodInput}
      onChange={handlOneChangeEvent}
    />
  );
};

export default FoodInput;
