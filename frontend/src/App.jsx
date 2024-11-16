import "./App.css";
import Login from "./components/auth/Login.jsx";
import SignUp from "./components/auth/Signup.jsx";
import Home from "./components/Pages/Home.jsx";
import { Routes, Route, Navigate } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { useAuthContext } from "./context/AuthContext";
function App() {
  const { authUser } = useAuthContext();
  return (
    <div className="h-screen flex justify-center items-center">
      <Routes>
      <Route path='/' element={authUser ? <Home /> : <Navigate to={"/login"} />} />
      <Route path='/login' element={authUser ? <Navigate to='/' /> : <Login />} />
        <Route path="/signup" element={authUser ? <Navigate to={"/"}/> : <SignUp/>}/>
      </Routes>
      <Toaster/>
    </div>
  );
}

export default App;
