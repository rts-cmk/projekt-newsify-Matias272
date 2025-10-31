import OnboardingDots from "./OnboardingDots";
import { useNavigate } from "react-router";
export default function FirstTime() {
  const navigate = useNavigate();

  return (
    <>
      <figure className="intro">
        <div className="intro__img">
          <img src="../img/Onboarding/Onboarding(2).jpg" alt="" />
        </div>
        <figcaption className="intro__text">
          <h2>Become a Savvy Global Citizen.</h2>
          <p>
            Discover tailored news that aligns with your interests and
            preferences. Your personalized news journey awaits!
          </p>
          <div></div>
        </figcaption>
      </figure>
      <OnboardingDots current={2} />
      <ul className="intro__buttons">
        <li>
          <button className="skip__button" onClick={() => navigate("/Login")}>
            Skip
          </button>
        </li>
        <li>
          <button
            className="continue__button"
            onClick={() => navigate("/Onboarding3")}
          >
            Continue
          </button>
        </li>
      </ul>
    </>
  );
}
