import React from 'react'
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <div>Home component</div>
     <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <Link to="/About">About</Link> |{" "}
      </nav>
    </>
  
  )
}
