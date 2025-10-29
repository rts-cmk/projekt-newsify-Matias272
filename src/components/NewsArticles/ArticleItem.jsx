export default function ArticleItem({ article }) {
  return (
    <li className="article__item" key={article._id}>
      <figure className="article__content">
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
  );
}
