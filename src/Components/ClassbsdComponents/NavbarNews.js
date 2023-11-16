import React, { Component } from 'react'
import {Link, a } from "react-router-dom";

export default class 
 extends Component {
  render() {
    return (
        <nav className="navbar navbar-expand-lg  bg-body-tertiary" data-bs-theme="dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">NewsMoneky</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-a active" aria-current="page" href="/">Home</a>
              </li>
              
              <li className="nav-item"><Link className="nav-a" to="/business">Business</Link></li>
              <li className="nav-item"><Link className="nav-a" to="/entertainment">Entertainment</Link></li>
              <li className="nav-item"><Link className="nav-a" to="/general">General</Link></li>
              <li className="nav-item"><Link className="nav-a" to="/health">Health</Link></li>
              <li className="nav-item"><Link className="nav-a" to="/science">Science</Link></li>
              <li className="nav-item"><Link className="nav-a" to="/sports">Sports</Link></li>
              <li className="nav-item"><Link className="nav-a" to="/technology">Technology</Link></li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}
