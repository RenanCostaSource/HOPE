import React from 'react';

class PhotoDetailLikes extends React.Component {
  constructor(props) {
    super(props);
  }

  likeButtonToRender() {
    const { isLikedByCurrentUser, createLike, destroyLike, photoId, fetchFeedPhotos, fetchSinglePhoto } = this.props;
    
    if (isLikedByCurrentUser) {
      return (
        <button className='liked-button' onClick={ () => destroyLike(photoId)
          .then(() => fetchSinglePhoto(photoId))
            }>
          <i className="fa fa-heart" aria-hidden="true"></i>
        </button>
      );
    } else {
      return (
        <button className='unliked-button' onClick={ () => createLike(photoId)
          .then(() => fetchSinglePhoto(photoId))
            }>
          <i className="fa fa-heart-o" aria-hidden="false"></i>
        </button>
      );
    }
  }

  render() {
    return (
      <div>
        { this.likeButtonToRender() }
      </div>
    );
  }
}

export default PhotoDetailLikes;
