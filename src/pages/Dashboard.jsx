import { useNavigate } from 'react-router-dom'

export default function Dashboard() {
  const navigate = useNavigate()

  const logout = () => {
    localStorage.removeItem('loggedIn')
    navigate('/login')
  }

  return (
    <div style={{ padding: 40 }}>
      <h1>Dashboard Evaluator</h1>
      <ul>
        <li>Lucrări</li>
        <li>Clienți</li>
        <li>Onorarii</li>
        <li>Rapoarte</li>
      </ul>
      <button onClick={logout}>Logout</button>
    </div>
  )
}
