import { useState } from "react";
import Login from "./components/Login";

function App() {
  const [isOnLogin, setIsOnLogin] = useState(false);

  return (
    <div className="App">
      {isOnLogin ? (
        <Login onGoBack={() => setIsOnLogin(false)} />
      ) : (
        <>
          <h1>Welcome To App</h1>
          <button className="btn" onClick={() => setIsOnLogin(true)}>
            Login
          </button>
        </>
      )}
    </div>
  );
}

export default App;
