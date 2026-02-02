import logo from "../assets/logo.png";
import { TestTube2, Dna, FlaskConical } from "lucide-react";

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
          <div className="headerIconRow" aria-hidden="true">
            <span className="headerIcon"><TestTube2 size={18} /></span>
            <span className="headerIcon"><Dna size={18} /></span>
            <span className="headerIcon"><FlaskConical size={18} /></span>
          </div>

          <input className="headerSearch" placeholder="Search topics..." />
          <button className="headerBtn" type="button">
            Admin
          </button>
        </div>
      </div>
    </header>
  );
}
