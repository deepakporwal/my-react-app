import React from 'react'
import { Link } from "react-router-dom";

export default function Contact() {
  return (
    <>
    <div>Contact Component</div>
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
