import { useState, useEffect } from "react";
import Header from "../components/header";
import NavBar from "../components/NavBar";

export default function Home() {
  const [type, setType] = useState(null);
  const [data, setData] = useState(null);
  const apiKey = import.meta.env.VITE_API_KEY;

  useEffect(() => {
    if (!type) return;
    async function fetchData() {
      const response = await fetch(
        `/nyt/svc/search/v2/articlesearch.json?q=${type}&api-key=${apiKey}`
      );
      const result = await response.json();
      setData(result);
    }
    fetchData();
  }, [type, apiKey]);
  
  console.log(data);

  return (
    <>
      <Header isShowing />
      <ul className="news">
        <li onClick={() => setType("health")}>Health</li>
        <li onClick={() => setType("sport")}>Sport</li>
        <li onClick={() => setType("travel")}>Travel</li>
      </ul>

      <NavBar />
    </>
  );
}
