import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Login from './Login';
import Home from './Home';


const TempApp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/unprotected" element={<Unportectect />} />
      </Routes>
    </BrowserRouter>
  );
};

export default TempApp;





const Unportectect = () => {
  return(<h1>Unprotected</h1>)
}