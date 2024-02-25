import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import { useEffect } from 'react';

const Home = () => {

  const isAuthenticated = Cookies.get('auth');
  const navigate = useNavigate();
  const handleLogout = () => { 
    Cookies.remove('auth');
    navigate('/login'); 
  };


  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login'); 
    }
  }, [isAuthenticated]);

  return (
    <div>
      <h1 style={{ fontSize: '24px', color: 'blue' }}>Hello World!</h1>
      <button style={{ marginTop: '10px' }} onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
};

export default Home;