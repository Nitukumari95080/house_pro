import "./Login.css";

const Login = () => {

  return (
    <div id="login" onClick={(e)=>{
        alert('Login Successfully....')
    }}>
      <form action="">
      <span id="logintitle">Login Page</span>
        <div className="list">
          <label htmlFor="email">Email</label>
          <input type="text"  id="email" placeholder="Enter your email" required/>
        </div>
        <div className="list">
          <label htmlFor="password">Password</label>
          <input type="password"  id="password" placeholder="Enter your email" required/>
        </div>
        <button id="loginbtn">Submit</button>
      </form>
    </div>
  );
};

export default Login;
