import './App.css';
import { Link, Outlet } from "react-router-dom";

function App() {
 
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
        <Link to="/ExpenseItem">ExpenseItem</Link> |{" "}
        <Link to="/Home">Home</Link> |{" "}
        <Link to="/About">About</Link> |{" "}
        <Link to="/Sample">Sample</Link>
        <Outlet />
      </nav>
|   </div>
  );
}

export default App;
