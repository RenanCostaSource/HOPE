import React from 'react';
import PhotoFeedIndexItemContainer from './photo_feed_index_item_container';

class PhotoFeed extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      end: 5
    };

    this.parsePhotos = this.parsePhotos.bind(this);
    this.infiniteScroll = this.infiniteScroll.bind(this);
  }

  componentDidMount() {
    window.bottom = false;
    window.addEventListener("scroll", this.infiniteScroll);
    this.props.fetchFeedPhotos();
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.infiniteScroll);
  }

  parsePhotos() {
    const { photos } = this.props.photoFeed;

    let photosList = Object.keys(photos).map( (id) => {
      return (
        <PhotoFeedIndexItemContainer photo={ photos[id]} key={ id } />
      );
    });
    return photosList;
  }

  infiniteScroll() {
    $(window).scroll(function() {
      if ($(window).scrollTop() <= $(document).height() - $(window).height() && $(window).scrollTop() >= $(document).height() - $(window).height() - 200) {
        window.bottom = true;
      }
    });

    if (window.bottom) {
      this.setState({ end: this.state.end + 5 });
      window.bottom = false;
    }
  }

  render() {
     const { currentUser } = this.props;
     let photosList;

     if (this.props.photoFeed.photos.length !== 0) {
       photosList = this.parsePhotos().reverse().slice(0, this.state.end);
     }
     
     if(photosList.length === 0 && currentUser.num_followees > 0) {
       return(
        <div className="rainbow-progress-bar"></div>
      );
     }

    return (
      <div>
        <ul className='photo-feed'>
          { photosList }
        </ul>
      </div>
    );
  }
}



export default PhotoFeed;
