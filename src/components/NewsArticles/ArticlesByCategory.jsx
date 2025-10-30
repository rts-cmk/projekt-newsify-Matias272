import ArticleItem from "./ArticleItem";
export default function ArticlesByCategory({
  category,
  articles,
  isLoading,
  type,
  setType,
}) {
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
        <img className={"news__arrow"} src="../img/icons/flecha.svg" alt="" />
      </summary>

      <ul className="articles__ul">
        {isLoading && type === category ? (
          <li>Loading...</li>
        ) : articles.length > 0 ? (
          articles.map((article) => (
            <ArticleItem
              isArchivePage={false}
              key={article._id}
              article={article}
            />
          ))
        ) : (
          type === category && <li>No articles found.</li>
        )}
      </ul>
    </details>
  );
}
