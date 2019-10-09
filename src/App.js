import React from "react";
import "./App.scss";
import AOS from "aos";
import Cube from "./3D";

AOS.init({
  offset: 100,
  duration: 2000
});

function App() {
  return (
    <div className='App'>
      <div className='Nav'>
        <header className='App-header'>UI Design</header>
        <button className='btn btn-gradient'>Sign Up</button>
      </div>
      <div className='showcase'>
        <div className='background'>
          <div className='clip-container'></div>
          <div className='clip-container-2'></div>
          <div className='clip-container-3'></div>
          <div className='overlay'></div>
        </div>

        <div className='content'>
          <div className='left-container'>
            <div className='text-container'>
              An app for easily creating designs and animations
            </div>
            <div className='icon-container'>
              <div className='icon-item'>
                <i className='fab fa-google-play fa-2x'></i>{" "}
                <span>
                  GET IT ON <h4>Google Play</h4>
                </span>
              </div>
              <div className='icon-item'>
                <i className='fab fa-apple fa-2x'></i>{" "}
                <span>
                  Download on the <h4>App Store</h4>
                </span>
              </div>
            </div>
          </div>
          <div className='graphic-container'>
            <div className='phone'>
              <div className='screen'>
                <span>Insert Design Here</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='overview'>
        <h2>
          <span className='strong'>How</span> does it Work?
        </h2>
        <div className='icons-container'>
          <div className='icon-item' data-aos='fade-in'>
            <i className='fas fa-search search'></i>
            <p>
              <span className='strong'>Search</span> through hundreds of
              templates to draw inspiration
            </p>
          </div>
          <div className='icon-item' data-aos='fade-in'>
            <i className='fas fa-user-edit edit'></i>
            <p>
              <span className='strong'>Edit</span> and combining existing themes
            </p>
          </div>
          <div className='icon-item' data-aos='fade-in'>
            <i className='fas fa-heart create'></i>
            <p>
              <span className='strong'>Create</span> your own style
            </p>
          </div>
        </div>
      </div>
      <div id='animation-container'>
        <p>
          <span className='strong'>Animate</span> and implement
        </p>
        <Cube />
      </div>
    </div>
  );
}

export default App;
