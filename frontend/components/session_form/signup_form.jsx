import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
    this.displayErrors = this.displayErrors.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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
    this.props.signup(user);
  }

  update(field) {
    return e => {
      this.setState({[field]: e.currentTarget.value});
    };
  }


  render() {
    return(
      <section className='auth-page'>

      

        <div className='auth-form'>
        <img className='logo' src={window.images.hope} />
          <form onSubmit={this.handleSubmit} className='signup-form'>

          

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

            <br></br>

            <button className='signup-button'>Sign Up</button>
            {this.displayErrors()}
          </form>

          <div className='has-account'>
            <p>Have an account? <Link to="/login"  style={{color:"lightblue"}}><u>Log in</u></Link></p>
          </div>
        </div>



      </section>
    );
  }

}

export default withRouter(SignupForm);
