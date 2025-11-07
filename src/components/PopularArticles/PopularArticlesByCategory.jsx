import PopularArticleItem from "./PopularArticleItem";
export default function PopularArticlesByCategory({
  category,
  articles,
  isLoading,
  type,
  setType,
}) {
  return (
    <details
      className="news__details"
      onToggle={(e) => {
        if (e.target.open) setType(category);
      }}
    >
      <summary className="news__summary">
        <span className="news__summary__title">
          <img
            src={new URL("../img/newsify_logo.svg", import.meta.url).href}
            alt=""
          />
          {category}
        </span>
        <img
          className="news__arrow"
          src={new URL("../img/icons/flecha.svg", import.meta.url).href}
          alt=""
        />
      </summary>

      <ul className="articles__ul">
        {isLoading && type === category ? (
          <li>Loading...</li>
        ) : articles.length > 0 ? (
          articles.map((article) => (
            <PopularArticleItem
              isArchivePage={false}
              key={article.id}
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
