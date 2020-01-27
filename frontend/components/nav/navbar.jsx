import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import Search from '../search/search_container';

import UploadPhotoContainer from '../upload_photo/upload_photo_container';

class navbar extends React.Component {
  constructor(props) {
    super(props);
    this.handleLogOut = this.handleLogOut.bind(this);
  }

  handleLogOut() {
    const { logout } = this.props;
    logout();
    this.props.history.push('/');
  }

  render() {
    const { currentUser, openModal, handleShow, showMenu } = this.props;
    console.log(currentUser);
    if(currentUser!==null && currentUser.id!==2){
    return (
      currentUser ? (
        <header className="header">
          <hgroup className="nav-group">
            <div >
              <Link to="/"><img className="logonav" src={window.images.hopenav} /></Link>
            </div>

            

            <div className="menu-links">
              <button className="menu-icon"
                onClick={ handleShow } >
                <img src={window.images.menu} />
              </button>

              <div className="dropdown" style={{display: showMenu ? 'flex' : 'none'}}>
               
                <Link to={`/users/${currentUser.id}`}>Profile</Link>
                <button onClick={ this.handleLogOut } >Logout</button>
              </div>
            </div>

            <div className="nav-links">
            
              <Link className="user-icon" to={`/users/${currentUser.id}`}><img className="icon"  src={window.images.profile_icon} /></Link>
              <button className="logout-icon" onClick={ this.handleLogOut } ><img className="icon"  src={window.images.logout_icon} /></button>
            </div>
          </hgroup>
        </header>
      ) : null
    );}else{
      return (
        currentUser ? (
          <header className="header">
            <hgroup className="nav-group">
              <div >
                <Link to="/"><img className="logonav" src={window.images.hopenav} /></Link>
              </div>
  
              <div className='search-bar'>
                <Search />
              </div>
  
              <div className="menu-links">
                <button className="menu-icon"
                  onClick={ handleShow } >
                  <img src={window.images.menu} />
                </button>
  
                <div className="dropdown" style={{display: showMenu ? 'flex' : 'none'}}>
                  <Link to="/discover">Discover</Link>
                  <button onClick={ () => openModal(<UploadPhotoContainer />) }>Upload</button>
                  <Link to={`/users/${currentUser.id}`}>Profile</Link>
                  <button onClick={ this.handleLogOut } >Logout</button>
                </div>
              </div>
  
              <div className="nav-links">
                <Link className="discover-icon" to="/discover"><img className="icon"  src={window.images.discover_icon} /></Link>
                <button className="upload-icon"  onClick={ () => openModal(<UploadPhotoContainer />) }><img className="icon"  src={window.images.upload_icon} /></button>
                <Link className="user-icon" to={`/users/${currentUser.id}`}><img className="icon"  src={window.images.profile_icon} /></Link>
                <button className="logout-icon" onClick={ this.handleLogOut } ><img className="icon"  src={window.images.logout_icon} /></button>
              </div>
            </hgroup>
          </header>
        ) : null
      );
    }
  }
}

export default navbar;
