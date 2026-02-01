type Lecture = {
  id: string;
  date: string;     // YYYY-MM-DD
  time?: string;    // optional for now
  speaker: string;
  topic: string;
};

const demoLectures: Lecture[] = [
  {
    id: "L1",
    date: "2026-02-05",
    time: "18:00",
    speaker: "Dr. A. Sharma",
    topic: "LFT Interpretation: AST/ALT Patterns",
  },
  {
    id: "L2",
    date: "2026-02-05",
    time: "19:00",
    speaker: "Dr. P. Mehta",
    topic: "Bilirubin Metabolism & Jaundice Workup",
  },
  {
    id: "L3",
    date: "2026-02-08",
    time: "18:00",
    speaker: "Dr. N. Iyer",
    topic: "Electrolytes: Sodium Disorders (Hyponatremia)",
  },
  {
    id: "L4",
    date: "2026-02-12",
    time: "18:30",
    speaker: "Dr. S. Khan",
    topic: "RFT: AKI vs CKD – Lab Clues",
  },
];

function formatDate(dateISO: string) {
  const d = new Date(dateISO + "T00:00:00");
  return d.toLocaleDateString(undefined, {
    weekday: "short",
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}

export default function LiveLectures() {
  // group lectures by date
  const grouped = demoLectures.reduce<Record<string, Lecture[]>>((acc, lec) => {
    (acc[lec.date] ||= []).push(lec);
    return acc;
  }, {});

  const datesSorted = Object.keys(grouped).sort(); // earliest -> latest

  return (
    <div>
      <div className="pageHeader">
        <div>
          <h2 className="pageTitle">Live Lectures</h2>
          <p className="pageSubtitle">
            Date-wise schedule of upcoming sessions.
          </p>
        </div>

        <button className="primaryBtn" type="button">
          + Add Lecture (later)
        </button>
      </div>

      <div className="dateGrid">
        {datesSorted.map((date) => (
          <section key={date} className="dateCard">
            <div className="dateCardHeader">
              <div className="datePill">{formatDate(date)}</div>
              <div className="dateCount">{grouped[date].length} session(s)</div>
            </div>

            <div className="lectureList">
              {grouped[date].map((lec) => (
                <div key={lec.id} className="lectureItem">
                  <div className="lectureTop">
                    <div className="lectureTopic">{lec.topic}</div>
                    {lec.time ? <div className="lectureTime">{lec.time}</div> : null}
                  </div>
                  <div className="lectureSpeaker">Speaker: {lec.speaker}</div>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
