import type { ReactNode } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import type { SidebarItem, SidebarItemKey } from "../types/navigation";

type Props = {
  title: string;
  items: SidebarItem[];
  activeKey: SidebarItemKey;
  onSelect: (key: SidebarItemKey) => void;
  children: ReactNode;
};

export default function Layout({
  title,
  items,
  activeKey,
  onSelect,
  children,
}: Props) {
  return (
    <div className="appShell">
      <Header title={title} />

      <div className="bodyShell">
        <Sidebar items={items} activeKey={activeKey} onSelect={onSelect} />

        <main className="mainContent">
          <div className="contentInner">{children}</div>
        </main>
      </div>
    </div>
  );
}
