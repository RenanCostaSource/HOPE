import React from 'react';
import { connect } from 'react-redux';
import UserProfile from './user_profile';
import { fetchSingleUser } from '../../actions/user_actions';
import { openModal } from '../../actions/modal_actions';
import { createFollow, deleteFollow } from '../../actions/follow_actions';

export const mapStateToProps = (state) => {
  return ({
    user: state.user,
    currentUser: state.session.currentUser,
    photos: state.photos,
  });
};

export const mapDispatchToProps = (dispatch) => {
  return ({
    fetchSingleUser: (id) => { return dispatch(fetchSingleUser(id)); },
    openModal: (component) => { return dispatch(openModal(component)); },
    createFollow: (followee_id) => { return dispatch(createFollow(followee_id)); },
    deleteFollow: (followee_id) => { return dispatch(deleteFollow(followee_id)); }
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserProfile);
