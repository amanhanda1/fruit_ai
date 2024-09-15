import { useNavigate } from 'react-router-dom';

function LoginPage() {
  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();
    const userId = event.target.elements.userId.value;
    const password = event.target.elements.password.value;

    if (userId === 'user' && password === 'pass') {
      navigate('/home'); // Use navigate instead of history.push
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <input type="text" name="userId" placeholder="User ID" required />
      <input type="password" name="password" placeholder="Password" required />
      <button type="submit">Login</button>
    </form>
  );
}

export default LoginPage;
