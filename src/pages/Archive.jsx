import Header from "../components/header";
import NavBar from "../components/NavBar";

import ArticleItem from "../components/NewsArticles/ArticleItem";
export default function Archive() {
  const stored = JSON.parse(localStorage.getItem("articles") || "[]");
  console.log(stored);

  return (
    <>
      <Header />
      <ul className="articles__ul">
        {stored.map((article) => {
          return (
            <ArticleItem
              isArchivePage={true}
              key={article._id}
              article={article}
            />
          );
        })}
      </ul>
      <NavBar />
    </>
  );
}
