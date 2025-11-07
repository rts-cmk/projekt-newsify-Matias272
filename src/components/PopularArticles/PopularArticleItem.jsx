import { motion } from "motion/react";
//import { useState, useEffect } from "react";

export default function PopularArticleItem({ article, isArchivePage }) {
  // const [isSaved, setIsSaved] = useState(false);
  // useEffect(() => {
  //   const stored = JSON.parse(localStorage.getItem("articles") || "[]");
  //   const alreadySaved = stored.some((a) => a._id === article._id);
  //   setIsSaved(alreadySaved);
  // }, [article._id]);

  // const handleSave = () => {
  //   const stored = JSON.parse(localStorage.getItem("articles") || "[]");
  //   if (isSaved) {
  //     const updated = stored.filter((a) => a._id !== article._id);
  //     localStorage.setItem("articles", JSON.stringify(updated));
  //     setIsSaved(false);
  //   } else {
  //     const updated = [...stored, article];
  //     localStorage.setItem("articles", JSON.stringify(updated));
  //     setIsSaved(true);
  //   }
  // };

  return (
    <motion.li
      drag="x"
      dragElastic={0.1}
      dragConstraints={{ left: -115, right: 0 }}
      className="article__item"
      key={article._id}
    >
      <figure className="article__content">
        <img src="" alt="w" />
        <figcaption>
          <h3></h3>
          <p>{article.snippet}</p>
          <a target="_blank" rel="noreferrer" href="">
            Read more
          </a>
        </figcaption>
      </figure>
      <button className="article__box">
        {isArchivePage ? (
          <svg
            width="35"
            height="35"
            viewBox="0 0 24 24"
            fill="none"
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
        ) : (
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
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
