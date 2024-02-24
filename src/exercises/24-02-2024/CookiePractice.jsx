import HomePage from "./cookiePractice/HomePage";
import LoginPage from "./cookiePractice/LoginPage";
import { CookiesProvider, useCookies } from "react-cookie";

export default function CookiePractice() {
  const [cookies, setCookies] = useCookies(['user']);

  function handleLogin(user) {
    setCookies('user', user, {path: '/'})
  }

  return(
  <div>
    <CookiesProvider>
      <div>
        {cookies.user ? <HomePage user={cookies.user} /> : <LoginPage onLogin={handleLogin} />}
      </div>
    </CookiesProvider>
  </div>);
}