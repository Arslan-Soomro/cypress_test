import { useState } from "react";

const Login = ({ onGoBack }) => {
  const [errorMessage, setErrorMessage] = useState();
  const [email, setEmail] = useState('');

  return (
    <div className="login">
      <input
        className="input"
        type="text"
        placheolder="email"
        value={email}
        onChange={(e) => setEmail(e.currentTarget.value)}
        data-testid="email-input"
      />
      {errorMessage && <p>{errorMessage}</p>}
      <button className="btn" onClick={() => {
        if(email?.length === 0) setErrorMessage("Email is required");
        else setErrorMessage(undefined);
      }}>Go in</button>
      <button className="btn" onClick={onGoBack}>
        Go back
      </button>
    </div>
  );
};

export default Login;
