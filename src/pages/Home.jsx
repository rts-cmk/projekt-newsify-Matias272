import { useState, useEffect } from "react";
import Header from "../components/header";
import NavBar from "../components/NavBar";

export default function Home() {
  const [type, setType] = useState(null);
  const [data, setData] = useState([]);
  const apiKey = import.meta.env.VITE_API_KEY;

  useEffect(() => {
    if (!type) return;
    async function fetchData() {
      const response = await fetch(
        `/nyt/svc/search/v2/articlesearch.json?q=${type}&api-key=${apiKey}`
      );
      const result = await response.json();
      setData(result.response.docs);
    }
    fetchData();
  }, [type, apiKey]);
  console.log(data);

  const categories = ["health", "sport", "travel"];

  return (
    <>
      <Header isShowing />
      <ul className="news__wrapper">
        {categories.map((category) => {
          return (
            <li key={category} className="news__li">
              <div className="news__top" onClick={() => setType(category)}>
                <figure>
                  <img src="../img/newsify_logo.svg" alt="" />
                  <figcaption>{category}</figcaption>
                </figure>
                <img
                  className="news__top__arrow"
                  src="../img/icons/flecha.svg"
                  alt=""
                />
              </div>
              <ul className="news__bottom">
                {type === category &&
                  data.map((article) => (
                    <li key={article._id}>
                      <a
                        href={article.web_url}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {article.headline.main}
                      </a>
                    </li>
                  ))}
              </ul>
            </li>
          );
        })}
      </ul>

      <NavBar />
    </>
  );
}
