import { useState } from "react";
import Header from "../components/Header";
import NavBar from "../components/NavBar";
import { useNavigate } from "react-router";

import ArticleItem from "../components/NewsArticles/ArticleItem";
import { useEffect } from "react";
export default function Archive() {
  const navigate = useNavigate()
  const [stored, setStored] = useState([]);
  console.log(stored);
  useEffect(() => {
    setStored(JSON.parse(localStorage.getItem("articles") || "[]"));
  }, []);

  return (
    <>
      <Header />

      <ul className="articles__ul">
        {stored.length > 0 ? (
          stored.map((article) => {
            return (
              <ArticleItem
                isArchivePage={true}
                key={article._id}
                article={article}
                updateList={setStored}
              />
            );
          })
        ) : (
          <figure className="no__archive">
            <img src="public/img/icons/no-results.png" alt="Not article" />
            <figcaption>
              <h2>No articles found</h2>
              <button onClick={() => navigate("/home")}>See articles</button>
            </figcaption>
          </figure>
        )}
      </ul>
      <NavBar />
    </>
  );
}
