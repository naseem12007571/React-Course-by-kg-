import styles from "./App.module.css";
import ButtonContainer from "./component/ButtonsContainer";
import Display from "./component/Displayy";
function App() {
  return (
    <div className={styles.calculator}>
      <Display></Display>
      <ButtonContainer></ButtonContainer>
    </div>
  );
}

export default App;
