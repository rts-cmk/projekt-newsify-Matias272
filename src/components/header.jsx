export default function Header({ isShowing = false }) {
  return (
    <header className="header">
      <div className="header_top">
        <img src="../img/newsify_logo.svg" alt="Newsify_logo" />
        <h1>Newsify</h1>
      </div>

      {isShowing && <input placeholder="Search news" type="text" />}
    </header>
  );
}
