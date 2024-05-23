import "./forgotpassword.css";

function ForgotPassword() {
  return (
    <div className="container">
      <div className="header">
        <div className="text">Find Your Account</div>
        <div className="underline"></div>
      </div>
      <div className="short-text">
        Please enter your email address or mobile number to search for your
        account.
      </div>
      <div className="inputs">
        <div className="input">
          <input type="email" placeholder="Email" />
        </div>
      </div>
      <div className="submit-container">
        <div className="submit">Cancel</div>
        <div className="submit">Search</div>
      </div>
    </div>
  );
}

export default ForgotPassword;
