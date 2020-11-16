import React from 'react'

function Navbar(){
    return (
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
    <a class="navbar-brand" href="#">Home</a>
    <ul class="navbar-nav mr-auto mt-2 mt-lg-0">        
        <li className="nav-item">
            <a className="nav-link" href="/#/about">About</a>
        </li>
        <li className="nav-item">
            <a className="nav-link" href="/#/create-post">Create Post</a>
        </li>

    </ul>
  </div>
</nav>
    )
}

export default Navbar
