import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CaptainDataContext } from "../context/CaptainContext.jsx";
import axios from "axios";

const CaptainSignup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firtname, setfirtname] = useState("");
  const [lastname, setlastname] = useState("");
  const [vehicleColor, setVehicleColor] = useState("");
  const [vehiclePlate, setVehiclePlate] = useState("");
  const [vehicleCapacity, setVehicleCapacity] = useState("");
  const [vehicleType, setVehicleType] = useState("");
  const { captain, setCaptain } = useContext(CaptainDataContext);

  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();

    const captainData = {
      fullname: {
        firstname: firtname,
        lastname: lastname,
      },
      email: email,
      password: password,
      vehicle: {
        color: vehicleColor,
        plate: vehiclePlate,
        capacity: vehicleCapacity,
        vehicleType: vehicleType,
      },
    };

    const response = await axios.post(
      `${import.meta.env.VITE_BASE_URL}/captains/register`,
      captainData
    );

    if (response.status === 201 || response.status === 200) {
      const data = response.data;

      setCaptain(data.captain);
    }

    setEmail("");
    setPassword("");
    setfirtname("");
    setlastname("");
    setVehicleCapacity("");
    setVehicleColor("");
    setVehiclePlate("");
    setVehicleType("");
  };
  return (
    <div>
      <div className="py-7 px-5 w-full h-screen flex flex-col justify-between">
        <div>
          <img
            src="https://static.vecteezy.com/system/resources/previews/027/127/451/non_2x/uber-logo-uber-icon-transparent-free-png.png"
            alt="Uber Logo"
            className="w-32 mb-8"
          />
          <form onSubmit={submitHandler}>
            <h3 className="text-lg  font-medium  mb-2">
              What's Our Captains Name
            </h3>
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

            <h3 className="text-lg font-medium mb-2">
              What's Our Captain Email
            </h3>

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

            <h3 className="text-xl mb-4 font-medium ">Vehicle Information</h3>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <h3 className="text-lg font-medium mb-2">Vehicle Color</h3>

                <input
                  className="bg-[#eee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base "
                  type="text"
                  placeholder="Color"
                  value={vehicleColor}
                  onChange={(e) => setVehicleColor(e.target.value)}
                  required
                />
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2">Vehicle Plate</h3>
                <input
                  className="bg-[#eee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base "
                  type="text"
                  placeholder="Vehicle Plate"
                  value={vehiclePlate}
                  onChange={(e) => setVehiclePlate(e.target.value)}
                  required
                />
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2">Vehicle Capacity</h3>
                <input
                  className="bg-[#eee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base "
                  type="text"
                  placeholder="Capacity"
                  value={vehicleCapacity}
                  onChange={(e) => setVehicleCapacity(e.target.value)}
                  required
                />
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2">Vehicle Type</h3>
                <select
                  name="vehicle"
                  id="vehicle"
                  onChange={(e) => setVehicleType(e.target.value)}
                  className="bg-[#eee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base ">
                  <option value="car">car</option>
                  <option value="auto">auto</option>
                  <option value="motorcycle">motorcycle</option>
                </select>
              </div>
            </div>

            <button
              type="submit"
              className="bg-black text-white font-semibold mb-4 rounded-lg w-full px-3 py-3">
              Sign up
            </button>

            <p className="text-center">
              Already have a account?{" "}
              <Link to="/captain-login" className="text-blue-400">
                Captain Login
              </Link>
            </p>
          </form>
        </div>

        <div>
          <p className="text-base">
            This site is protected by reCAPTCHA and the Google{" "}
            <span className="text-blue-400">Terms of Service</span> and{" "}
            <span className="text-blue-400">Privacy Policy</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CaptainSignup;
