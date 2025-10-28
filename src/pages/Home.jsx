import { useState, useEffect } from "react";
import Header from "../components/header";
import NavBar from "../components/NavBar";

export default function Home() {
  const [isLoading, setLoading] = useState(false);
  const [type, setType] = useState(null);
  const [dataByCategory, setDataByCategory] = useState({});
  const apiKey = import.meta.env.VITE_API_KEY;

  useEffect(() => {
    if (!type) return;

    if (dataByCategory[type]) return;

    async function fetchData() {
      setLoading(true);
      try {
        const response = await fetch(
          `/nyt/svc/search/v2/articlesearch.json?q=${type}&api-key=${apiKey}`
        );
        const result = await response.json();
        setDataByCategory((prev) => ({
          ...prev,
          [type]: result.response.docs,
        }));
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [type]);
  console.log(dataByCategory);

  const categories = ["europe", "health", "sport", "travel", "business"];

  return (
    <>
      <Header isShowing />
      <ul className="news__wrapper">
        {categories.map((category) => {
          const articles = dataByCategory[category] || [];

          return (
            <details
              key={category}
              className="news__details"
              onToggle={(e) => {
                if (e.target.open) setType(category);
              }}
            >
              <summary className="news__summary">
                <span className="news__summary__title">
                  <img src="../img/newsify_logo.svg" alt="" />
                  {category}
                </span>
                <img
                  className={`news__arrow ${type === category ? "active" : ""}`}
                  src="../img/icons/flecha.svg"
                  alt=""
                />
              </summary>

              <ul className="news__ul">
                {isLoading && type === category ? (
                  <li>Loading...</li>
                ) : articles.length > 0 ? (
                  articles.map((article) => (
                    <li className="article__li" key={article._id}>
                      <figure className="article__left">
                        <img
                          src={article.multimedia.thumbnail.url}
                          alt={article.headline.main}
                        />
                        <figcaption>
                          <h3>{article.headline.main}</h3>
                          <p>{article.snippet}</p>
                          <a target="_blank" href={article.web_url}>
                            Read more
                          </a>
                        </figcaption>
                      </figure>
                    </li>
                  ))
                ) : (
                  type === category && <li>No articles found.</li>
                )}
              </ul>
            </details>
          );
        })}
      </ul>
      <NavBar />
    </>
  );
}
