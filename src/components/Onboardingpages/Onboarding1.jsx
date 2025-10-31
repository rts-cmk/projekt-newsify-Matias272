import { useNavigate } from "react-router";
import OnboardingDots from "./OnboardingDots";
export default function FirstTime() {
  const navigate = useNavigate();

  localStorage.setItem("visited", "true");

  return (
    <>
      <figure className="intro">
        <div className="intro__img">
          <img src="../img/Onboarding/Onboarding(3).jpg" alt="" />
        </div>
        <figcaption className="intro__text">
          <h2>Stay Connected, Everywhere, Anytime</h2>
          <p>
            Welcome to Newsify, your ultimate destination for breaking news,
            exclusive stories, and tailored content
          </p>
          <div></div>
        </figcaption>
      </figure>
      <OnboardingDots current={1} />
      <ul className="intro__buttons">
        <li>
          <button className="skip__button" onClick={() => navigate("/Login")}>
            Skip
          </button>
        </li>
        <li>
          <button
            className="continue__button"
            onClick={() => navigate("/Onboarding2")}
          >
            Continue
          </button>
        </li>
      </ul>
    </>
  );
}
