import Button from "@mui/material/Button";
import "../css/Homepage.css";
import Linkform from "./LinkForm";
import Stepper from "./Steppers";
import 'animate.css';
import { AnimationOnScroll } from "react-animation-on-scroll";



export default function Homepage() {
  return (
    <div className="contianer">
      <div className="welcome-container">
        <div className="text-section">
          <p className="main-title animate__animated animate__fadeInLeft" >More than just shorter links</p>
          <p className="quote-title animate__animated animate__fadeInLeft animate__delay-1s">
            Build your brand's recognition and get detailed insights on how your
            links are performing.
          </p>
          <Button className="get-start-btn animate__animated animate__fadeInLeft animate__delay-2s" variant="text">
            Get Started
          </Button>
        </div>
        <div className="img-div animate__animated animate__fadeInRight">
          <img
            className="office-img"
            src="/assets/icons/illustration-working.svg"
            alt="office"
          />
        </div>
      </div>
      <div className="form-statistics-container">
        {<Linkform />}
        <div className="advanced-statis-container ">
        <AnimationOnScroll animateIn="animate__fadeIn">
          <p className="advanced-title ">Adnaced Statistics</p>
          </AnimationOnScroll>
          <AnimationOnScroll animateIn="animate__fadeIn">
          <p className="advanced-quote">
            Track how your links are performing across the web
          </p>
          </AnimationOnScroll>
          <AnimationOnScroll animateIn="animate__fadeIn">
          <p className="advanced-quote ">
            {" "}
            with our advanced statistics dashboard.
          </p>
          </AnimationOnScroll>
          {<Stepper />}
        </div>
        <div className="boost-wave-section">
          <img
            className="boost-wave"
            src="/assets/icons/bg-boost-desktop.svg"
            alt="wave"
          />
          <div className="boost-wave-div">
          <AnimationOnScroll animateIn="animate__flipInX">
            <p className="boost-wave-title">Boost your links today</p>
            </AnimationOnScroll>
            <AnimationOnScroll animateIn="animate__fadeIn">
            <Button className="get-start-btn" variant="text">
              Get Started
            </Button>
            </AnimationOnScroll>

          </div>
        </div>
      </div>
    </div>
  );
}
