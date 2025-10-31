import { useState, useEffect } from "react";
import Header from "../components/Header";
import NavBar from "../components/NavBar";
//
import ArticlesByCategory from "../components/NewsArticles/ArticlesByCategory";
export default function Home() {
  const [isLoading, setLoading] = useState(false);
  const [type, setType] = useState(null);
  const [dataByCategory, setDataByCategory] = useState({});
  const apiKey = "IL9vHKRQvBHfMhjnmGHPTBAytpedrcX6";

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
  }, [type, apiKey, dataByCategory]);

  const categories = ["europe", "health", "sport", "business", "travel"];

  return (
    <>
      <Header isShowing />
      {categories.map((category) => {
        const articles = dataByCategory[category] || [];

        return (
          <ArticlesByCategory
            key={category}
            category={category}
            articles={articles}
            isLoading={isLoading}
            type={type}
            setType={setType}
          />
        );
      })}
      <NavBar />
    </>
  );
}
