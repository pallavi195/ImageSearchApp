import React from "react";

function Login() {
  const backendURL = "http://localhost:5000/api/auth";

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h1>Login with</h1>
      <div style={{ marginTop: "30px" }}>
        <a href={`${backendURL}/google`}>
          <button style={{ margin: "10px", padding: "10px 20px" }}>Google</button>
        </a>
        <a href={`${backendURL}/facebook`}>
          <button style={{ margin: "10px", padding: "10px 20px" }}>Facebook</button>
        </a>
        <a href={`${backendURL}/github`}>
          <button style={{ margin: "10px", padding: "10px 20px" }}>GitHub</button>
        </a>
      </div>
    </div>
  );
}

export default Login;
