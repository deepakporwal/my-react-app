import './App.css';
import { useEffect, useState } from 'react';
import { Link, Outlet } from "react-router-dom";

// array destructuring
const [first, second] = ["Tokyo", "London", "Paris"];

function App() {

  // use State Hook
  const [color, setColor] = useState('blue');

  // fetch API data using useState hook
  const [data, setData] = useState(null);

  // use Effect
  useEffect(() => {
    console.log(`color is ${color}`);
  });

  const fetchData = () => {
    fetch("https://api.github.com/users/deepakporwal17").then((res) => {
      res.json().then((data) => {
        setData(data);
        console.log(data);
      });
    })
  };

  return (
    <div className="App">
      <header>
        <p>Welcome to react</p>
      </header>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <Link to="/Home">Home</Link> |{" "}
        <Link to="/About">About</Link>
        <Outlet />
      </nav>
      <div>
        {first} | {second}
        <br />
        Color is {color}
        <button onClick={() => {
          setColor('red');
        }} >Red</button>
        <button onClick={() => {
          setColor('green');
        }} >Green</button>
        <br />
        <button onClick={fetchData}>fetch data</button>
        <br />
        <p>{JSON.stringify(data)}</p>
      </div>
    </div>
  );
}

export default App;
