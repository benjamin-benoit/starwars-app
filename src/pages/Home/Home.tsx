import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  return <a onClick={() => navigate(`/peoplelist`)}></a>;
};

export default Home;
