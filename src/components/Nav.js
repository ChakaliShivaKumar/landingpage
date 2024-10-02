import React from 'react'

export default function Nav() {
  return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <a class="navbar-brand" href="/">
              <img src={require('../images/TItle.png')} alt="" width="80" height="34"/>
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="/">Home</a>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="/services" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Services
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a class="dropdown-item" href="/services">Person (Passenger) transportation</a></li>
                  <li><a class="dropdown-item" href="/services">Goods transportation</a></li>
                </ul>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Business</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Contact us</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Query</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Feedback</a>
              </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
