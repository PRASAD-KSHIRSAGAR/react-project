import React from 'react';
import './App.css';

function App() {
  return (
    <>
      <div className="container">
        <ul className="Nav-bar">
          <li><a href="">Home</a></li>
          <li><a href="">About</a></li>
          <li><a href="">News</a></li>
          <li><a href="">Contact Us</a></li>
        </ul>

        <ul>
          <li><a className="active" href="#home">Home</a></li>
          <li><a href="#news">News</a></li>
          <li><a href="#contact">Contact</a></li>
          <li><a href="#about">About</a></li>
        </ul>

        <div style={{ marginLeft: '25%', padding: '1px 16px', height: '1000px' }}>
          <h2>Fixed Full-height Side Nav</h2>
          <h3>Try to scroll this area, and see how the sidenav sticks to the page</h3>
          <p>Notice that this div element has a left margin of 25%. This is because the side navigation is set to 25% width. If you remove the margin, the sidenav will overlay/sit on top of this div.</p>
          <p>Also notice that we have set overflow:auto to sidenav. This will add a scrollbar when the sidenav is too long (for example if it has over 50 links inside of it).</p>
          <p>Some text..</p>
          <p>Some text..</p>
          <p>Some text..</p>
          <p>Some text..</p>
          <p>Some text..</p>
          <p>Some text..</p>
          <p>Some text..</p>
        </div>
      </div>
    </>
  );
}

export default App;
