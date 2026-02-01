import { useMemo, useState } from "react";
import Layout from "./components/Layout";
import type { SidebarItem, SidebarItemKey } from "./types/navigation";
import LiveLectures from "./pages/LiveLectures";


export default function App() {
  const items = useMemo<SidebarItem[]>(
    () => [
      { key: "live", label: "Live Lectures" },
      { key: "recorded", label: "Recorded Lectures" },
      { key: "assignments", label: "Assignments" },
      { key: "flashcards", label: "Flash Cards" },
      { key: "reference", label: "Reference Material" },
    ],
    []
  );

  const [active, setActive] = useState<SidebarItemKey>("live");

  return (
    <Layout
      title="Edutainment"
      items={items}
      activeKey={active}
      onSelect={setActive}
    >
      {active === "live" ? (
      <LiveLectures />
    ) : (
      <SectionPlaceholder activeKey={active} />
    )}
    </Layout>
  );
}

function SectionPlaceholder({ activeKey }: { activeKey: SidebarItemKey }) {
  const titleMap: Record<SidebarItemKey, string> = {
    live: "Live Lectures",
    recorded: "Recorded Lectures",
    assignments: "Assignments",
    flashcards: "Flash Cards",
    reference: "Reference Material",
  };

  return (
    <div className="card">
      <h2 className="cardTitle">{titleMap[activeKey]}</h2>
      <p className="muted">
        Placeholder screen. We’ll keep this flexible and build each section
        later once requirements settle.
      </p>
    </div>
  );
}
