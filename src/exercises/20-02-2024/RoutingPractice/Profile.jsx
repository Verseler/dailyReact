import { Link, Outlet, useParams } from "react-router-dom";
import Spinach from "./Spinach";
import Popeye from "./Popeye";
import DefaultProfile from "./DefaultProfle";

const Profile = () => {
  const name = useParams();

  return(
    <div>
      <h1>Profile</h1>
      <p >Move to <Link className="text-blue-500" to="/">Home</Link></p>
      {/* <Outlet /> */}
      {
        name === 'spinach' ? (<Spinach />) :
        name === 'popeye' ? (<Popeye />) :
        (<DefaultProfile />)
      }
    </div>
  );
}

export default Profile;