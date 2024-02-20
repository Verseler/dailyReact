import { Link } from "react-router-dom";

export default function Home() {
  return(<>
    <h1>Home</h1>
    <p >Move to <Link className="text-blue-500" to="Profile">Profile</Link></p>
  </>)
}