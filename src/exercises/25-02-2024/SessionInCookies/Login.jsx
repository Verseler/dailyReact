import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

const Login = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const navigate = useNavigate();




  const handleInput = (event) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [event.target.name]: [event.target.value],
    }));
  };

  //temporary authentication because we dont have backend server
  //temporary existing credentials
  const testAuthData = {
    username: "1",
    password: "1",
  };

  //check if crendentials matched
  const authenticateUser = (username, password) => {
    if (
      username == testAuthData.username &&
      password == testAuthData.password
    ) {
      const userData = {
        username,
        password,
      };
      //if matched create session using cookies
      const expirationTime = new Date(new Date().getTime() + 1000000);
      Cookies.set("auth", JSON.stringify(userData), {
        expires: expirationTime,
      });
      console.log('authenticated')
      return true;
    }
    console.log('invalid')
    return false;
  };
  const handleLogin = (e) => {
    e.preventDefault();
    const isAuthenticated = authenticateUser(formData.username, formData.password);
    if (isAuthenticated) {
      navigate("/");
    } else {
      // Show error message or perform other actions for failed authentication
      alert("Server Authentication: Invalid Crendentials");
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <input
        type="text"
        placeholder="Username"
        name="username"
        value={formData.username}
        onChange={handleInput}
      />
      <input
        type="password"
        placeholder="Password"
        name="password"
        value={formData.password}
        onChange={handleInput}
      />
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
