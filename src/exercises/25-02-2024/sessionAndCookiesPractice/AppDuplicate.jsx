import Login from "./Login";
import Signup from "./Signup";
import Home from "../Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {createClient} from "@supabase/supabase-js";

const supabase = createClient("https://hrpqwxtbdnbqfggznqlm.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhycHF3eHRiZG5icWZnZ3pucWxtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDg4NTYwMzUsImV4cCI6MjAyNDQzMjAzNX0.5W-e5lX6nMu2vlWIp-eEuY30nl9Y__cOQiJnjWpjrRA");

export default function AppDuplicate() {

  return(
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}