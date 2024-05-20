import styles from "./Item.module.css";

const Item = ({ foodItems }) => {
  return (
    <li className="list-group-item">
      <span className={styles["kg-span"]}>{foodItems}</span>
      <button
        className={`${styles.button} btn btn-info`}
        onClick={() => {
          alert("you clicked");
        }}
      >
        Buy
      </button>
    </li>
  );
};

export default Item;

