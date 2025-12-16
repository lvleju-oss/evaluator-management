import { useNavigate } from 'react-router-dom'

export default function Login() {
  const navigate = useNavigate()

  const handleLogin = () => {
    localStorage.setItem('loggedIn', 'true')
    navigate('/dashboard')
  }

  return (
    <div style={{ padding: 40 }}>
      <h2>Evaluator Management – Login</h2>
      <input placeholder="Utilizator" /><br /><br />
      <input type="password" placeholder="Parolă" /><br /><br />
      <button onClick={handleLogin}>Autentificare</button>
    </div>
  )
}
