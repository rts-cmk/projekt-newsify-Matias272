import OnboardingDots from "./OnboardingDots";
import { useNavigate } from "react-router";
export default function FirstTime() {
  const navigate = useNavigate();

  return (
    <>
      <figure className="intro">
        <div className="intro__img">
          <img src="../img/Onboarding/Onboarding(1).jpg" alt="" />
        </div>
        <figcaption className="intro__text">
          <h2>Enhance your News Journey Now!</h2>
          <p>
            Be part of our dynamic community and contribute your insights and
            participate in enriching conversations.
          </p>
          <div></div>
        </figcaption>
      </figure>
      <OnboardingDots current={3} />
      <ul className="intro__buttons">
        <li>
          <button className="skip__button" onClick={() => navigate("/Login")}>
            Skip
          </button>
        </li>
        <li>
          <button
            className="continue__button"
            onClick={() => navigate("/Login")}
          >
            Continue
          </button>
        </li>
      </ul>
    </>
  );
}
