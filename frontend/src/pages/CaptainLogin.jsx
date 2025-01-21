import axios from "axios";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CaptainDataContext } from "../context/CaptainContext";

const CaptainLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const { captain, setCaptain } = useContext(CaptainDataContext);

  const submitHandler = async (e) => {
    e.preventDefault();

    const captain = {
      email: email,
      password: password,
    };

    const response = await axios.post(
      `${import.meta.env.VITE_BASE_URL}/captains/login`,
      captain
    );

    if (response.status === 200) {
      const data = response.data;
      setCaptain(data.captain);
      localStorage.setItem("token", data.token);
      navigate("/captain-home");
    }

    setEmail("");
    setPassword("");
  };

  return (
    <div className="p-7 w-full h-screen flex flex-col justify-between">
      <div>
        <img
          src="https://static.vecteezy.com/system/resources/previews/027/127/451/non_2x/uber-logo-uber-icon-transparent-free-png.png"
          alt="Uber Logo"
          className="w-32 mb-8"
        />
        <form onSubmit={submitHandler}>
          <h3 className="text-lg mb-2">What's your email</h3>

          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-[#eee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base "
            placeholder="email@example.com"
            required
          />

          <h3 className="text-lg mb-2">Enter Password</h3>

          <input
            className="bg-[#eee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base "
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button
            type="submit"
            className="bg-black text-white font-semibold mb-4 rounded-lg w-full px-3 py-3">
            Login
          </button>

          <p className="text-center">
            Join a uber team?{" "}
            <Link to="/captain-signup" className="text-blue-400">
              Register as a Captain
            </Link>
          </p>
        </form>
      </div>

      <div>
        <Link
          to="/login"
          className="bg-amber-500  text-white font-semibold mb-7 rounded-lg w-full px-3 py-3 flex items-center justify-center">
          Sign in as User
        </Link>
      </div>
    </div>
  );
};

export default CaptainLogin;
