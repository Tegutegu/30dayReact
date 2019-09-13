import React, { useContext } from "react";
import ReactDOM from "react-dom";
import "./styles.css";

const JediContext = React.createContext();

function Display() {
  const value = useContext(JediContext);
  return <div>{value}, Unlimited POWER!</div>;
}

function App() {
  return (
    <JediContext.Provider value={"Jedi"}>
      <Display />
    </JediContext.Provider>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);