// import logo from "./logo.svg";
import "./App.css";

function App({ children }) {
  console.log("children");
  console.log(children);
  console.log("children");

  return (
    <div className="App">
      <header>
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
      {children}
    </div>
  );
}

export default App;
