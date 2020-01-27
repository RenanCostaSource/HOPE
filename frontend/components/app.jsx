import React from 'react';
import { Route, Redirect, Switch, Link, HashRouter }
  from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

import NavbarContainer from './nav/navbar_container';
import LoginFormContainer from './session_form/login_container';
import SignupFormContainer from './session_form/signup_container';
import PhotoFeedContainer from './photo_feed/photo_feed_container';
import UserProfileContainer from './user_profile/user_profile_container';
import ModalContainer from './modal/modal_container';
import PhotoDetailContainer from './photo_detail/photo_detail_container';
import EditUserContainer from './edit_user/edit_user_container';
import DiscoverContainer from './discover/discover_container';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showMenu: false
    };
    this.handleShow = this.handleShow.bind(this);
  }

  handleShow(bool) {
    return (e) => {
      e.stopPropagation();
      this.setState({showMenu: bool});
    };
  }

  render() {
    return (
      <div onClick={ this.handleShow(false) }>
        <ModalContainer />
        <header>
          <NavbarContainer
            showMenu={this.state.showMenu}
            handleShow={ this.state.showMenu ? this.handleShow(false) : this.handleShow(true) }/>
        </header>

        <Switch>
          <Route exact path='/users/:id' component={ UserProfileContainer }/>
          <AuthRoute exact path="/login" component={LoginFormContainer} />
          <AuthRoute exact path="/signup" component={SignupFormContainer} />
          <ProtectedRoute exact path="/users/:id/edit" component={EditUserContainer} />
          <ProtectedRoute exact path="/discover" component={DiscoverContainer} />
          <ProtectedRoute exact path="/photos/:id" component={PhotoDetailContainer} />
          <ProtectedRoute path="/" component={PhotoFeedContainer} />
        </Switch>

        <section className="main-footer">
          <footer>
           
          </footer>
        </section>
      </div>
    );
  }
}


export default App;
