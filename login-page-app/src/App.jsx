import jsxIMG from './assets/jsx.png';

function App() {
  return (
    <div className="container">
      <div className="container-login">
        <div className="wrap-login">
          <form className="login-form">
            <span className="login-form-title">Sign In!</span>
            <span className="login-form-title">
              <img src={jsxIMG} alt="React Icon" />
            </span>
          </form>
        </div>
      </div>
    </div>
  );
}
export default App;