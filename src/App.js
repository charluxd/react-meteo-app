import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
        <footer>
          This project is coded by{" "}
          <a href="https://www.linkedin.com/in/charlottelhm/" target="_blank">
            Charlotte Lee
          </a>{" "}
          and it is open-sourced on{" "}
          <a href="https://github.com/charluxd/react-meteo-app" target="_blank">
            Github
          </a>
          .
        </footer>
      </div>
    </div>
  );
}

export default App;
