import React from 'react'
import { Link } from "react-router-dom";

export default function About() {
  return (
    <>
      <div>About component</div>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <Link to="/Home">Home</Link> |{" "}
      </nav>
    </>
  )
}
