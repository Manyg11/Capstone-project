import  './LogIn.css';

function LogIn() {
  return (
   <div className='login-container'>
    <div className='login-title'>Log in</div>

    <div className="input-group">
        <label>Email</label>
        <input type="email" placeholder="Enter your email" />
      </div>

      <div className="password-group">
        <div className="password-label">
          <label>Password</label>
          <button className="forgot-password">*forgot password</button>
        </div>
        <input type="password" placeholder="Enter your password" />
      </div>

      <button className="login-button">LOG IN</button>
    </div>
  );
}

export default LogIn;

