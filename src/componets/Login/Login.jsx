import "./Login.css";

const Login = () => {
  const handleLogin = (e) => {
    e.preventDefault(); // Prevent form from reloading the page
    alert("Login Successfully...");
  };

  return (
    <div id="login">
      <form onSubmit={handleLogin}>
        <span id="logintitle">Login Page</span>
        <div className="list">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email" // Added ID to match htmlFor in label
            name="email"
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="list">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password" // Added ID to match htmlFor in label
            name="password"
            placeholder="Enter your password"
            required
          />
        </div>
        <button id="loginbtn" type="submit">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
