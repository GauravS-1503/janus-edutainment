import type { SidebarItem, SidebarItemKey } from "../types/navigation";

type Props = {
  items: SidebarItem[];
  activeKey: SidebarItemKey;
  onSelect: (key: SidebarItemKey) => void;
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
              {item.label}
            </button>
          );
        })}
      </nav>
    </aside>
  );
}
