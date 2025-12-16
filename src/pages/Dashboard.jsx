import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { useState } from "react";

export default function Dashboard() {
  const userEmail = auth.currentUser?.email ?? "utilizator";

  const [evaluari, setEvaluari] = useState([
    { id: 1, titlu: "Casă – Mamaia Sat", status: "Draft" },
    { id: 2, titlu: "Vilă – Constanța", status: "Final" },
  ]);

  const handleLogout = async () => {
    await signOut(auth);
    window.location.href = "/";
  };

  const adaugaEvaluare = () => {
    const nouaEvaluare = {
      id: Date.now(),
      titlu: "Evaluare nouă",
      status: "Draft",
    };
    setEvaluari([...evaluari, nouaEvaluare]);
  };

  return (
    <div style={{ padding: 24 }}>
      {/* HEADER */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h1>Dashboard</h1>

        <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
          <span style={{ fontSize: 14 }}>
            Logat ca: <b>{userEmail}</b>
          </span>
          <button onClick={handleLogout}>Logout</button>
        </div>
      </div>

      <hr style={{ margin: "16px 0" }} />

      {/* BUTON ADAUGARE */}
      <button onClick={adaugaEvaluare}>Adaugă evaluare</button>

      {/* LISTA EVALUĂRI */}
      <div style={{ marginTop: 20 }}>
        {evaluari.length === 0 ? (
          <p>Nu există evaluări.</p>
        ) : (
          <table border="1" cellPadding="8">
            <thead>
              <tr>
                <th>Titlu</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {evaluari.map((e) => (
                <tr key={e.id}>
                  <td>{e.titlu}</td>
                  <td>{e.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
