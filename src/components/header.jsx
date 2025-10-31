export default function Header({ isShowing = false }) {
  return (
    <header className="header">
      <div className="header_top">
        <img className="credit" src="https://media.discordapp.net/attachments/1342460779060002846/1433780980090536006/poweredby_nytimes_200c.png?ex=6905f018&is=69049e98&hm=44a451dd04ca9ec01c920a1d365bfb9aa647c181fd46add4641fd92c60328a5a&=&format=webp&quality=lossless" alt="" />
        <img src="../img/newsify_logo.svg" alt="Newsify_logo" />
        <h1>Newsify</h1>
      </div>

      {isShowing && <input placeholder="Search news" type="text" />}
    </header>
  );
}
