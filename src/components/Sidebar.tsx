import type { SidebarItem, SidebarItemKey } from "../types/navigation";
import {
  Video,
  PlayCircle,
  ClipboardList,
  Layers,
  BookOpen,
} from "lucide-react";

type Props = {
  items: SidebarItem[];
  activeKey: SidebarItemKey;
  onSelect: (key: SidebarItemKey) => void;
};

const iconMap: Record<SidebarItemKey, React.ReactNode> = {
  live: <Video size={18} />,
  recorded: <PlayCircle size={18} />,
  assignments: <ClipboardList size={18} />,
  flashcards: <Layers size={18} />,
  reference: <BookOpen size={18} />,
};

export default function Sidebar({ items, activeKey, onSelect }: Props) {
  return (
    <aside className="sidebar">
      <nav className="nav">
        {items.map((item) => {
          const active = item.key === activeKey;

          return (
            <button
              key={item.key}
              type="button"
              className={`navItem ${active ? "navItemActive" : ""}`}
              onClick={() => onSelect(item.key)}
            >
              <span className={`navIcon ${active ? "navIconActive" : ""}`}>
                {iconMap[item.key]}
              </span>
              <span className="navLabel">{item.label}</span>
            </button>
          );
        })}
      </nav>
    </aside>
  );
}
