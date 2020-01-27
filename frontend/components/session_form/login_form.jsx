import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
    this.displayErrors = this.displayErrors.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDemoLogin = this.handleDemoLogin.bind(this);
  }

  componentDidMount() {
    this.props.unDisplayErrors();
  }

  displayErrors() {
    if (this.props.errors) {
      const errorItems = this.props.errors.map( (errorMsg, idx) => {
        return (
          <li key={ "errorMsg" + idx } >{errorMsg}</li>
        );
      });

      return (
        <ul className="errors">
          {errorItems}
        </ul>
      );
    } else {
      return null;
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.login(user);
  }

  update(field) {
    return e => {
      this.setState({[field]: e.currentTarget.value});
    };
  }

  handleDemoLogin(e) {
   e.preventDefault();

   this.props.login({
     username: 'awesomo',
     password: 'password'
   });
 }


  render() {
    return(
      <section className="auth-page">
        

        <div className='auth-form'>
          <img className='logo' src={window.images.hope} />
          <form onSubmit={this.handleSubmit} className="login-form">

            <label>
              <input
                type='text'
                onChange={this.update("username")}
                placeholder="Username"
                value={this.state.username}
                />
            </label>

            <label>
              <input
                type='password'
                onChange={this.update("password")}
                placeholder="Password"
                value={this.state.password}
                />
            </label>

            <button className='login-button'>Login</button>

            <div className='or-divide'>
              <div className="or-divide-line"></div>
              <div className="or-divide-or">OR</div>
              <div className="or-divide-line"></div>
            </div>

            <div className="demo-login">
              <button
                onClick={this.handleDemoLogin}
                tabIndex> Admin Login
              </button>
            </div>

            {this.displayErrors()}
          </form>

          <div className='dont-have-account'>
            <p>Don't have an account? <Link to="/signup" style={{color:"lightblue"}}><u>Sign up</u></Link> </p>
          </div>

        </div>

      </section>
    );
  }

}

export default withRouter(LoginForm);
