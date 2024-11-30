import { useState } from "react";
import { Link } from "react-router-dom";

const UserSignup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firtname, setfirtname] = useState("");
  const [lastname, setlastname] = useState("");
  const [captainData, setcaptainData] = useState({
    email: "",
    password: "",
    firtname: "",
    lastname: "",
  });

  const submitHandler = (e) => {
    e.preventDefault();

    setcaptainData({
      email: email,
      password: password,
      firtname: firtname,
      lastname: lastname,
    });

    console.log(captainData);

    // setEmail("");
    // setPassword("");
    // setfirtname("");
    // setlastname("");
  };
  return (
    <div>
      <div className="p-7 w-full h-screen flex flex-col justify-between">
        <div>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
            alt="Uber Logo"
            className="w-16 mb-8"
          />
          <form onSubmit={submitHandler}>
            <h3 className="text-lg  font-medium  mb-2">What's your Name</h3>
            <div className="flex items-center justify-center gap-4 mb-7">
              <input
                type="text"
                placeholder="First Name"
                className="bg-[#eee]  w-1/2 rounded px-4 py-2 border text-lg placeholder:text-base "
                required
                value={firtname}
                onChange={(e) => setfirtname(e.target.value)}
              />

              <input
                type="text"
                placeholder="Last Name"
                className="bg-[#eee]  w-1/2 rounded px-4 py-2 border  text-lg placeholder:text-base "
                value={lastname}
                onChange={(e) => setlastname(e.target.value)}
              />
            </div>

            <h3 className="text-lg font-medium mb-2">What's your Email</h3>

            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-[#eee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base "
              placeholder="email@example.com"
              required
            />

            <h3 className="text-lg  font-medium mb-2">Enter Password</h3>

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
              Sign up
            </button>

            <p className="text-center">
              Already have a account?{" "}
              <Link to="/login" className="text-blue-400">
                Login
              </Link>
            </p>
          </form>
        </div>

        <div>
          <p className="text-base">
            By creating an account, you agree to our{" "}
            <span className="text-blue-400">Terms of Service</span> and{" "}
            <span className="text-blue-400">Privacy Policy</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserSignup;
