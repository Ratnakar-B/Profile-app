import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function Info() {
  return (
    <div className="main-container">
      <Navbar className="nav-bar" collapseOnSelect expand="lg">
        <Container className="brandName">
          <Navbar.Brand className="name" href="#home">
            Ratnakar B.
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto"></Nav>
            <Nav className="nav-link">
              <Nav.Link className="link" href="/">
                Home
              </Nav.Link>
              <Nav.Link className="link" href="#about">
                About
              </Nav.Link>
              <Nav.Link className="link" href="#education">
                Education
              </Nav.Link>
              <Nav.Link className="link" href="#skills">
                Skills
              </Nav.Link>
              <Nav.Link className="link" href="#contact">
                Contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className="profile-container">
        <div className="sub-container">
          <h1>Hi There!</h1>
          <h2>I am Ratnakar Baalkundhi.</h2>
          <p className="text">MERN Full Stack & React-Native Developer.</p>

          <button type="button">
            <a href="#about">About Me 💻</a>
          </button>
        </div>
        <div>
          <img
            className="profilePic"
            src="./images/Ratnakar.jpeg"
            title="Ratnakar Baalkundhi"
            alt=""
          ></img>
        </div>
      </div>

      <div className="about-container" id="about">
        <div>
          <img
            className="pic"
            src="./images/Ratnakar.jpeg"
            alt="Ratnakar Baalkundhi"
            title="Ratnakar Baalkundhi"
          ></img>
        </div>
        <div className="about">
          <details>
            <summary>
              <h1>A Bit about Myself</h1>
            </summary>
            <p>
              <strong>I am Ratnakar Baalkundhi</strong>, from Hyderabad, and I
              graduated with a Bachelor's in Mechanical Engineering in 2017. I
              have developed skills in HTML5, CSS3, JavaScript, React.js, Redux,
              TypeScript, Bootstrap, MERN stack, Sass, Git, GitHub, and React
              Native. My soft skills include effective communication, attention
              to detail, a strong willingness to learn, and the ability to work
              both independently and in teams.
              <br></br>
              <br></br>
              <p>
                I've completed personal projects like a Pulse application,
                portfolio and music websites, e-commerce sites, and a fitness
                app. I am fluent in English, Kannada, Hindi, and Telugu. My
                career goal is to apply my technical skills in a dynamic
                environment where I can contribute to innovative projects and
                continuously grow. I am motivated, hardworking, and eager to
                make a positive impact in the field of technology.
              </p>
            </p>
          </details>
        </div>
      </div>
      <div className="education-container" id="education">
        <div className="education">
          <h1>Education</h1>
          <h3>B.E (Mechanical Engineering).</h3>
          <p>Basavakalyan Engineering College.</p>
          <p>2013-2017 </p>
          <p>Basavakalyan,India.</p>
        </div>
        <div>
          <img
            className="pic"
            src="https://media.tenor.com/tsZlEZXGhCIAAAAi/graduation-cap-graduation.gif"
            alt=""
          ></img>
        </div>
      </div>
      <div className="skills-container" id="skills">
        <div className="skills">
          <img
            className="logo"
            src="https://www.logobird.com/wp-content/uploads/2011/01/New-HTML5_Logo.png"
            alt=""
          ></img>
          <img
            className="logo"
            src="https://1000logos.net/wp-content/uploads/2020/09/CSS-Logo.jpg"
            alt=""
          ></img>
          <img
            className="logo"
            src="https://repository-images.githubusercontent.com/657736250/efe020c3-cfc2-41f9-be41-ad581ffc9969"
            alt=""
          ></img>
          <img
            className="logo"
            src="https://miro.medium.com/v2/resize:fit:1400/1*MF5V_dkybUTcfzwHFh0VSw.jpeg"
            alt=""
          ></img>
          <img
            className="logo"
            src="https://juststickers.in/wp-content/uploads/2019/07/nodejs.png"
            alt=""
          ></img>
          <img
            className="logo"
            src="https://cdn.hashnode.com/res/hashnode/image/upload/v1675637255386/f3a9a38b-116d-4b35-8f46-8d8abb78166f.png"
            alt=""
          ></img>
          <img
            className="logo"
            src="https://findlogovector.com/wp-content/uploads/2022/04/mongodb-logo-vector-2022.png"
            alt=""
          ></img>
          <img
            className="logo"
            src="https://media.licdn.com/dms/image/D4E12AQHSQrXRbBED4g/article-cover_image-shrink_720_1280/0/1692661495642?e=2147483647&v=beta&t=XD87dkuBcU3wpyHuAqNumI2BhIm0PByatzcrETcYvD0"
            alt=""
          ></img>
          <img
            className="logo"
            src="https://logovectorseek.com/wp-content/uploads/2019/10/bootstrap-logo-vector.png"
            alt=""
          ></img>
          <img
            className="logo"
            src="https://repository-images.githubusercontent.com/657740231/7a6b015e-0013-4f20-990e-01fa1f8e2968"
            alt=""
          ></img>
          <img
            className="logo"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSad1TEoz0P6Unce--qLovawByqIDv3kmJrVu3Q9i6eGdku2XBQks5fuvqI26C9veqi8ic&usqp=CAU"
            alt=""
          ></img>

          <img
            className="logo"
            src="https://www.svgrepo.com/show/303251/mysql-logo.svg"
            alt=""
          ></img>
          <img
            className="logo"
            src="https://miro.medium.com/v2/resize:fit:1400/1*mtsk3fQ_BRemFidhkel3dA.png"
            alt=""
          ></img>
          <img
            className="logo"
            src="https://miro.medium.com/v2/resize:fit:770/1*1jBJ9rwUuTZ09mSmFLFpoQ.jpeg"
            alt=""
          ></img>
          <img
            className="logo"
            src="https://miro.medium.com/v2/resize:fit:800/1*ulCspc56K_swYE1uuel_TA.png"
            alt=""
          ></img>
        </div>
        <div>
          <h1>Technical Skills</h1>
        </div>
      </div>
      <div className="contact-container" id="contact">
        <div className="contact">
          <h1>Contact</h1>
          <p>Email : ratnakarbaalkundhi@gmail.com</p>
          <p>Mobile # : +91- 7760604716 </p>
          <p>Location : Hyderabad,Telangana</p>
        </div>
        <div>
          <form>
            <h1>Send me a message</h1>
            <div>
              <label>
                First Name <span>*</span>
              </label>
            </div>
            <div>
              <input type="text" placeholder="First Name"></input>
            </div>
            <div>
              <label>
                Last Name <span>*</span>
              </label>
            </div>
            <div>
              <input type="text" placeholder="Last Name"></input>
            </div>
            <div>
              <label>
                Email Address <span>*</span>
              </label>
            </div>
            <div>
              <input type="email" placeholder="Email"></input>
            </div>
            <div>
              <label>
                Message <span>*</span>
              </label>
            </div>
            <div>
              <textarea
                className="textArea"
                cols="40"
                rows="5"
                placeholder="Type your message here..."
              ></textarea>
            </div>
            <div>
              <button className="submit-btn" type="submit">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
      <p className="footer">
        copyright 2024. All rights reserved. Ratnakar Baalkundhi
      </p>
    </div>
  );
}

export default Info;
