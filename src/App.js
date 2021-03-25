import { Link, Switch, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Intro from "./components/Intro/Intro";
import Work from "./components/Work/Work";
import About from "./components/About/About";

function App() {
  return (
    <>
      <Navbar />
      <div className="main-component">
        <Intro />
        <Work />
        <About />
        <div className="contact-component" id="contact">
          <h2>Contact</h2>
          <form className="contact-form">
            <div>
              <input type="text" placeholder="Full name*" />
            </div>
            <div>
              <input type="email" placeholder="Email*" />
            </div>
            <div>
              <textarea id="message" rows="8" placeholder="Message*"></textarea>
            </div>
          </form>
        </div>
        <footer>
          <h2>Sreejan Chaudhury</h2>
          <h5>&#169; All rights reserved | {new Date().getFullYear()}</h5>
        </footer>
      </div>
      {/* <Switch>
        <Route path="/">
          <Home />
        </Route>
      </Switch> */}
    </>
  );
}

export default App;
