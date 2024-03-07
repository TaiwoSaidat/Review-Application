import { Link } from "react-router-dom"
import { FaHouseUser } from "react-icons/fa"
//or use import {FaHouseDamage } from "react-icons/fa"

function About() {
  return (
    <>
       <div className="container">
        <div className="card">
          <h3 className="head" >About</h3>
          <p>This is a basic application for customers to drove their review on the usage on our services</p>
          <p>Version 1.0.0</p>
          <br />
        </div>
        <div className="about-link" >
          <Link to='/'>
            <FaHouseUser size={40} />
          </Link>
        </div>
       </div>
    </>
  )
}

export default About
