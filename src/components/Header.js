import "../styles/Header.css";
const Header = () => {
  return (
    <div className="header">
      <div></div>
      <div className="logo">
        <img
          src="https://s3.amazonaws.com/cdn.looka.com/images/logos/looka_logo_black.svg"
          alt="logo"
        />
      </div>
      <div className="menu-list">
        <img src="/data/list.svg" alt="list" />
      </div>
    </div>
  );
};

export default Header;
