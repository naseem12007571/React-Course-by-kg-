import Styles from "./Item.module.css";

const handclick = () => {
  alert("you clicked me ok ");
};
const Item = ({ foodItems }) => {
  return (
    <li className="list-group-item  kg-item">
      <span className="kg-font"> {foodItems} </span>
      <button onClick={handclick} className={Styles.button}>
        Buy
      </button>
    </li>
  );
};

export default Item;
