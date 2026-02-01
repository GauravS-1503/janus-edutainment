import logo from "../assets/logo.png";

type Props = {
  title: string;
  subtitle?: string;
};

export default function Header({
  title,
  subtitle = "Clinical Biochemistry Educational Program",
}: Props) {
  return (
    <header className="header">
      <div className="headerInner">
        <div className="headerLeft">
          <div className="logoWrap">
            <img src={logo} alt={`${title} logo`} className="brandLogo" />
          </div>

          <div className="brandText">
            <div className="brandTitle">{title}</div>
            <div className="brandSubtitle">{subtitle}</div>
          </div>
        </div>

        <div className="headerRight">
          <input className="headerSearch" placeholder="Search topics..." />
          <button className="headerBtn" type="button">
            Admin
          </button>
        </div>
      </div>
    </header>
  );
}
