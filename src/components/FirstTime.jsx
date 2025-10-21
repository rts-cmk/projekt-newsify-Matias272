import { useState, useEffect } from "react";
export default function FirstTime() {
  const [isFirstVisit, setIsFirstVisit] = useState(false);

  useEffect(() => {
    const visited = localStorage.getItem("visited");
    if (!visited) {
      setIsFirstVisit(true);
      localStorage.setItem("visited", "true");
    }
  }, []);

  return (
    <div>
      {isFirstVisit && (
        <figure className="introduction">
          <img src="" alt="" />
          <figcaption>
            <h2>Stay Connected, Everywhere, Anytime</h2>
            <p>
              Welcome to Newsify, your ultimate destination for breaking news,
              exclusive stories, and tailored content
            </p>
            <div>
              <button>Skip</button>
              <button>Continue</button>
            </div>
          </figcaption>
        </figure>
      )}
    </div>
  );
}
