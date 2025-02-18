import PropTypes from 'prop-types';
import NavigateBackButton from '../components/NavigateBackButton';
import celestialData from '../data/celestialData';

export default function ContentPage({ category }) {
  const object = celestialData.find((item) => item.id === category);

  return (
    <div>
      <h2>{object ? object.title : 'Unknown'}</h2>
      <p>{object ? object.content : 'No information available.'}</p>
      <NavigateBackButton />
    </div>
  );
}

// Prop Validation
ContentPage.propTypes = {
  category: PropTypes.string.isRequired,
};
