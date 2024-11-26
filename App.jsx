import React from 'react';
import './App.css'; 

function App() {
  return (
    <>
      <section className="head">
        <div className="logo">
          <span><h2><a href="#index">Make a Web Site</a></h2></span>
        </div>
        <div className="search">
          <a href="search" aria-label="Search">
            <i className="fa-solid fa-magnifying-glass"></i>
          </a>
          <input type="text" />
        </div>
        <div className="icons-container">
          <div className="message" id="contact">
            <a href="message"><i className="fa-solid fa-message"></i></a>
          </div>
        </div>
      </section>

      <section className="nav">
        <h4><i><a href="#index">Home</a></i></h4>
        <h4><i><a href="#developers">Developers</a></i></h4>
        <h4><i><a href="#contact">Contact</a></i></h4>
        <h4><i><a href="#about">About</a></i></h4>
      </section>

      <section className="baground" id="#index">
        <img src="https://i.pinimg.com/736x/c4/2c/d0/c42cd05389799b56f475cba463e9df26.jpg" alt="" loading="lazy" />
        <div className="text-overlay">
          <span><h2>HAVE A PROJECT IN MIND? </h2><h4>GIVE US A SHOUT</h4></span>
          <input type="email" placeholder="Email Address" required />
          <button type="submit" aria-label="Submit Form">Enter</button>
        </div>
      </section>

      <section className="name-space" id="developers">
        <span className="name"><h1><i>Developers</i></h1></span>
      </section>

      <section className="cards-container">
        <div className="card">
          <img src="https://img.freepik.com/photos-premium/illustration-3d-avatar-du-profil-personnage-dessin-anime_1183071-136.jpg" alt="" loading="lazy" />
          <div className="card-content">
            <span className="name">Mohamed</span>
            <p>Passionate frontend developer with a knack for creating stunning, responsive designs.</p>
          </div>
        </div>
        <div className="card">
          <img src="https://i.pinimg.com/736x/62/28/c7/6228c71efa95b0be867a3a955beed6d0.jpg" alt="" loading="lazy" />
          <div className="card-content">
            <span className="name">Khadija</span>
            <p>Expert in modern JavaScript frameworks like React and Vue for building dynamic interfaces.</p>
          </div>
        </div>
        <div className="card">
          <img src="https://i.pinimg.com/originals/b3/1e/87/b31e876ac1381404535b3a7287bf9605.png" alt="" loading="lazy" />
          <div className="card-content">
            <span className="name">Salma</span>
            <p>Creative UI/UX designer specializing in user-friendly web experiences and wireframes.</p>
          </div>
        </div>
        <div className="card">
          <img src="https://3.bp.blogspot.com/-Y096u66r_U8/WHQebMbvCXI/AAAAAAAAEjU/tqCfSi0FZOApfOFMFr1tmwwLv4-NyO_eACLcB/s1600/myAvatar.png" alt="" loading="lazy" />
          <div className="card-content">
            <span className="name">Oussama</span>
            <p>Detail-oriented developer with expertise in CSS animations and performance optimization.</p>
          </div>
        </div>
      </section>

      <section className="contact-form">
        <div className="form-container">
          <h2>Contact Us</h2>
          <p>Any question or remarks? Just write us a message!</p>
          <form className="contact">
            <div className="input-group">
              <input type="email" id="email" placeholder="Enter a valid address" required />
              <input type="text" id="name" placeholder="Enter your Name" required />
            </div>
            <button type="submit" aria-label="Submit Form">Enter</button>
          </form>
        </div>
        <div className="contact-info">
          <div className="info-card">
            <i className="fas fa-envelope"></i>
            <h4>CONTACT EMAIL</h4>
            <p>makewebsite@gmail.com</p>
          </div>
          <div className="info-card">
            <i className="fas fa-phone"></i>
            <h4>Our PHONE</h4>
            <p>+212 604176028</p>
          </div>
        </div>
      </section>

      <section className="about" id="about">
        <img src="https://www.a2hosting.com/blog/content/uploads/2021/01/Website-Design.jpg" alt="about image" />
        <p><b>Welcome to Make Site Web</b><br />
          At Make Site Web, we specialize in front-end development to create visually stunning and highly interactive websites tailored to your specific needs.
          Our skilled developers utilize cutting-edge technologies such as HTML, CSS, and JavaScript, along with the powerful React.js framework, to design responsive and user-friendly web experiences.
          We focus on delivering exceptional front-end solutions that blend creativity with functionality, ensuring your website not only looks great but also performs seamlessly across all devices.
          Let us help you bring your vision to life with a website that truly stands out.
        </p>
      </section>

      <section className="footer">
        <div className="icons-social">
          <div className="instagram">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-square-instagram"></i>
            </a>
          </div>
          <div className="linkedin">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-linkedin"></i></a>
          </div>
          <div className="facebook">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-facebook"></i></a>
          </div>
          <div className="snapchat">
            <a href="https://snapchat.com" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-square-snapchat"></i></a>
          </div>
        </div>
      </section>
      <button className="back-to-top">↑</button>
    </>
  );
}

export default App;
