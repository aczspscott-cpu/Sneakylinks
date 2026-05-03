import { useState } from "react";

export default function App() {
  const [profiles] = useState([
    { id: 1, name: "Alex", bio: "Loves travel" },
    { id: 2, name: "Jordan", bio: "Gym life" }
  ]);
  const [matches, setMatches] = useState([]);

  const like = (p) => setMatches([...matches, p]);

  return (
    <div style={{ padding: 20 }}>
      <h1>SneakLinks 💘</h1>

      <h2>Profiles</h2>
      {profiles.map(p => (
        <div key={p.id} style={{ marginBottom: 10 }}>
          <b>{p.name}</b> - {p.bio}
          <br />
          <button onClick={() => like(p)}>Sneak Link 🔥</button>
        </div>
      ))}

      <h2>Matches</h2>
      {matches.map((m, i) => (
        <div key={i}>{m.name}</div>
      ))}
    </div>
  );
}
