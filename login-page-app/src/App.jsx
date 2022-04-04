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

            <div className="wrap-input">
              <input type="email"/>
              <span className="focus-input" data-placeholder='Email'></span>
            </div>

            <div className="wrap-input">
              <input type="password"/>
              <span className="focus-input" data-placeholder='Password'></span>
            </div>

            <div className="container-login-form-btn">
              <button className="login-form-btn">Sign In</button>
            </div>

            <div className="text-center">
              <span className="text1">Não possuí conta?</span>
              <a href="#" className="text2">Criar conta!</a>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}
export default App;