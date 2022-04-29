import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from "./components/Auth/SignUp";
import SignIn from "./components/Auth/SignIn";
import ForgetPassword from "./components/Auth/ForgetPassword";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignIn />}></Route>
          <Route path="/signup" element={<SignUp />}></Route>
          <Route path="/forgetpassword" element={<ForgetPassword />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
