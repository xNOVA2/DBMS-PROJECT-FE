import "./signup.css";

function Signup() {
  return (
    <div className="container">
      <div className="header">
        <div className="text">Sign Up</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        <div className="input">
          <input type="text" placeholder="Username" />
        </div>
        <div className="input">
          <input type="email" placeholder="Email" />
        </div>
        <div className="input">
          <input type="password" placeholder="Password" />
        </div>
        <div className="input">
          <input type="password" placeholder="Confirm password" />
        </div>
      </div>
      <div className="short-text">
        Already have an account? <span>Click here!</span>
      </div>
      <div className="submit-container">
        <div className="submit">Sign Up</div>
      </div>
    </div>
  );
}

export default Signup;
