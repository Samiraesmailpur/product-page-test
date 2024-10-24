import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import watch from '../../assets/images/watch.webp';
import watch2 from '../../assets/images/watch2.webp';
import watch3 from '../../assets/images/watch3.webp';
import watchBlue from '../../assets/images/watchBlue.webp';
import watchBlue2 from '../../assets/images/watchBlue2.webp';
import watchBlue3 from '../../assets/images/watchBlue3.webp';

const Gallery = ({ color }) => {
  const pinkImages = [
    {
      original: watch,
      thumbnail: watch,
    },
    {
      original: watch2,
      thumbnail: watch2,
    },
    {
      original: watch3,
      thumbnail: watch3,
    },
  ];

  const blueImages = [
    {
      original: watchBlue,
      thumbnail: watchBlue,
    },
    {
      original: watchBlue2,
      thumbnail: watchBlue2,
    },
    {
      original: watchBlue3,
      thumbnail: watchBlue3,
    },
  ];

  return (
    <ImageGallery
      showFullscreenButton={false}
      showPlayButton={false}
      thumbnailWidth={'100px'}
      thumbnailHeight={'100px'}
      items={color === 'Pink' ? pinkImages : blueImages}
    />
  );
};

export default Gallery;
