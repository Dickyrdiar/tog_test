import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const history = useNavigate()

  const handleLogin = () => {
    if (username === 'admin' && password === 'password') {
      history('/landing-page')
    }
    localStorage.setItem("username", JSON.stringify(username))
  };

  return (
    // <div className="App">
    <div className="flex justify-center items-center min-h-screen">
       <div className="max-w-sm mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <h1 className="text-2xl font-bold mb-4">Login</h1>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
            Username
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
            Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
            onClick={() => handleLogin()}
          >
            Sign In
          </button>
        </div>
      </div>
    </div>
     
    // </div>
  );
}

export default App;
