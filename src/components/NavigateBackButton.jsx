import { useNavigate } from 'react-router-dom';

const NavigateBackButton = () => {
  const navigate = useNavigate();
  return <button onClick={() => navigate(-1)}>Go Back</button>;
};

export default NavigateBackButton;
