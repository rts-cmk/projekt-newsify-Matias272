import { useState, useEffect } from "react";
import Header from "../components/Header";
import NavBar from "../components/NavBar";
import PopularArticlesByCategory from "../components/PopularArticles/PopularArticlesByCategory";
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
          `https://api.nytimes.com/svc/mostpopular/v2/viewed/${type}.json?api-key=${apiKey}`
        );
        const result = await response.json();
        setDataByCategory((prev) => ({
          ...prev,
          [type]: result.results,
        }));
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [type, apiKey, dataByCategory]);

  const categories = [
    { label: "recent", value: "1" },
    { label: "past week", value: "7" },
    { label: "past month", value: "30" },
  ];

  return (
    <>
      <Header isShowing />
      {categories.map((category) => {
        const articles = dataByCategory[category.value] || [];

        return (
          <PopularArticlesByCategory
            key={category.value}
            category={category.value}
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
