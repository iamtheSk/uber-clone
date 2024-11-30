import { useState } from "react";
import { Link } from "react-router-dom";

const UserLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const submitHandler = (e) => {
    e.preventDefault();

    setUserData({
      email: email,
      password: password,
    });

    console.log(userData);

    setEmail("");
    setPassword("");
  };

  return (
    <div className="p-7 w-full h-screen flex flex-col justify-between">
      <div>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
          alt="Uber Logo"
          className="w-16 mb-8"
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
            placeholder="password"
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
            New here?{" "}
            <Link to="/signup" className="text-blue-400">
              Create New Account
            </Link>
          </p>
        </form>
      </div>

      <div>
        <Link
          to="/captain-login"
          className="bg-green-600 text-white font-semibold mb-7 rounded-lg w-full px-3 py-3 flex items-center justify-center">
          Sign in as Captain
        </Link>
      </div>
    </div>
  );
};

export default UserLogin;