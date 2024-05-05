import styles from "./ButtonsContainer.module.css";
const ButtonContainer = () => {
  const ButtonNames = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "9",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];

  return (
    <div className={styles.buttonsContainer}>
      {ButtonNames.map((ButtonNames) => {
        return <button className={styles.button}> {ButtonNames}</button>;
      })}
    </div>
  );
};

export default ButtonContainer;

// 450 time
