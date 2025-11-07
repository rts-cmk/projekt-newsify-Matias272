import { motion } from "motion/react";
import { useState, useEffect } from "react";

export default function ArticleItem({ article, isArchivePage, updateList }) {
  const [isSaved, setIsSaved] = useState(false);
  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("articles") || "[]");
    const alreadySaved = stored.some((a) => a._id === article._id);
    setIsSaved(alreadySaved);
  }, [article._id]);

  const handleSave = () => {
    const stored = JSON.parse(localStorage.getItem("articles") || "[]");
    if (isSaved) {
      const updated = stored.filter((a) => a._id !== article._id);
      localStorage.setItem("articles", JSON.stringify(updated));

      setIsSaved(false);

      if (isArchivePage) updateList(updated);
    } else {
      const updated = [...stored, article];
      localStorage.setItem("articles", JSON.stringify(updated));
      if (isArchivePage) updateList(updated);

      setIsSaved(true);
    }
  };

  return (
    <motion.li
      drag="x"
      dragElastic={0.1}
      dragConstraints={{ left: -115, right: 0 }}
      className={"article__item"}
      key={article._id}
    >
      <figure className="article__content">
        <img
          src={article.multimedia.thumbnail.url}
          alt={article.headline.main}
        />
        <figcaption>
          <h3>{article.headline.main}</h3>
          <p>{article.snippet}</p>
          <a target="_blank" rel="noreferrer" href={article.web_url}>
            Read more
          </a>
        </figcaption>
      </figure>
      <button
        className={`article__box ${isArchivePage ? "archive" : "home"}`}
        onClick={handleSave}
      >
        {isArchivePage ? (
          <svg
            width="30"
            height="30"
            viewBox="0 0 24 24"
            fill={isSaved ? "white" : "none"}
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3 6H21M19 6V20C19 20.5304 18.7893 21.0391 18.4142 21.4142C18.0391 21.7893 17.5304 22 17 22H7C6.46957 22 5.96086 21.7893 5.58579 21.4142C5.21071 21.0391 5 20.5304 5 20V6M8 6V4C8 3.46957 8.21071 2.96086 8.58579 2.58579C8.96086 2.21071 9.46957 2 10 2H14C14.5304 2 15.0391 2.21071 15.4142 2.58579C15.7893 2.96086 16 3.46957 16 4V6"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        ) : (
          <svg
            width="30"
            height="30"
            viewBox="0 0 24 24"
            fill={isSaved ? "white" : "none"}
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19 21L12 16L5 21V5C5 4.46957 5.21071 3.96086 5.58579 3.58579C5.96086 3.21071 6.46957 3 7 3H17C17.5304 3 18.0391 3.21071 18.4142 3.58579C18.7893 3.96086 19 4.46957 19 5V21Z"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </button>
    </motion.li>
  );
}
