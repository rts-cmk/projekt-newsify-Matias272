import { useNavigate } from "react-router";


export default function Login() {
  const navigate = useNavigate();

  return (
    <div className="loginwrapper">
      <header className="loginheader">
        <figure className="loginfigure">
          <img
            className="logginheader"
            src="../img/newsify_logo.svg"
            alt="logo"
          />
        </figure>
        <figcaption>
          <h2>Newsify</h2>
          <p>Welcome! Lets dive into you account!</p>
        </figcaption>
      </header>
      <nav className="navigate">
        <ul>
          <li>
            <button
              className="navigatefacebook"
              onClick={() => {
                navigate("/home");
              }}
            >
              Continue with Facebook
            </button>
          </li>
          <li>
            <button
              className="navigategoogle"
              onClick={() => {
                navigate("/home");
              }}
            >
              Continue with Google
            </button>
          </li>
        </ul>
        <h3>
          <span>or</span>
        </h3>
        <ul>
          <li>
            <button
              className="navigatepassword"
              onClick={() => {
                navigate("/home");
              }}
            >
              Sign in with password
            </button>
          </li>
        </ul>
        <div className="logindiv">
          <p>Don't have an account?</p>
          <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">Sign up</a>
        </div>
      </nav>
    </div>
  );
}