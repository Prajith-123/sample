import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import Courses from "./Courses";
import Register from "./Register";
import Login from "./Login";
import StudentDashboard from "./components/Student_Dashboard";
import MentorDashboard from "./components/Mentor_Dashboard";
import Training from "./Training/Training";
import Day1 from "./Training/Day1/Day1";
import Day2 from "./Training/Day2/Day2";
import Day3 from "./Training/Day3/Day3";
import Day4 from "./Training/Day4/Day4";
import Day5 from "./Training/Day5/Day5";
import Test from "./Training/Test/Test";
import Final from "./Training/Final-Assessment/Final";

import Care from "./Homepage/Care";
import Connect from "./Homepage/Connect";
import Consult from "./Homepage/Consult";

function Root() {
  const [token, setToken] = useState(sessionStorage.getItem("token") || "")

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/register" element={<Register />} />

        <Route path="/care" element={<Care />} />
        <Route path="/connect" element={<Connect />} />
        <Route path="/consult" element={<Consult />} />

        <Route path="/login" element={<Login setToken={setToken} />} />
        <Route path="/dashboard/student" element={<StudentDashboard token={token} />} />
        <Route path="/dashboard/mentor" element={<MentorDashboard token={token} />} />
        <Route path="/courses/5g-training" element={<Training />} />
        <Route path="courses/5g-training/day1" element={<Day1 />} />
        <Route path="courses/5g-training/day2" element={<Day2 />} />
        <Route path="courses/5g-training/day3" element={<Day3 />} />
        <Route path="courses/5g-training/day4" element={<Day4 />} />
        <Route path="courses/5g-training/day5" element={<Day5 />} />
        <Route path="courses/5g-training/day1/test" element={<Test />} />
        <Route path="courses/5g-training/day2/test" element={<Test />} />
        <Route path="courses/5g-training/day3/test" element={<Test />} />
        <Route path="courses/5g-training/day4/test" element={<Test />} />
        <Route path="courses/5g-training/day5/test" element={<Test />} />
        <Route path="courses/5g-training/final-assessment" element={<Final />} />
      </Routes>
    </Router>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Root />);