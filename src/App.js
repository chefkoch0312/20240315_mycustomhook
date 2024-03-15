import './App.css';
import useAuthentication from './useAuthentication';

function App() {
  const { user, isLoading, login, logout } = useAuthentication();

  const handleLogin = () => {
    login('benutzername', 'passwort');
  };

  const handleLogout = () => {
    logout();
  };

  return (
    <div className="App">

      <div>
        {isLoading ? (
          <p>Authentifizierung läuft...</p>
        ) : user ? (
          <>
            <p>Eingeloggt als: {user.username}</p>
            <button onClick={handleLogout}>Ausloggen</button>
          </>
        ) : (
          <>
            <p>Nicht eingeloggt</p>
            <button onClick={handleLogin}>Einloggen</button>
          </>
        )}
      </div>

    </div>
  );
}

export default App;
