import { useNavigate } from "react-router-dom";
import { useState, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
const Home = () => {
  const [pickup, setPickup] = useState("");
  const [destination, setDestination] = useState("");
  const [panelOpen, setPanelOpen] = useState(false);
  const panelRef = useRef(null);
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(e);
  };

  useGSAP(() => {
    if (panelOpen) {
      gsap.to(panelRef.current, {
        height: "70%",
      });
    } else {
      gsap.to(panelRef.current, {
        height: "0%",
      });
    }
  }, [panelOpen]);

  return (
    <div className="h-screen relative">
      {/* <h4 className="my-10">Home</h4>

      <button
        className="bg-black text-white font-semibold mb-4 rounded-lg mx-auto  w-full px-3 py-3"
        onClick={() => navigate("/user/logout")}>
        User Logout
      </button> */}

      <img
        src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
        alt=""
        className="w-16 absolute left-5 top-4"
      />

      <div className="w-screen h-screen">
        <img
          src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif"
          alt=""
          className="h-full w-full object-cover"
        />
      </div>
      <div className=" flex flex-col justify-end h-screen absolute top-0 w-full  rounded-t-xl">
        <div className="h-[30%] bg-white p-5">
          <h4 className="text-2xl font-semibold">Find a trip</h4>
          <form onSubmit={(e) => submitHandler(e)} className="relative">
            <div className="line absolute h-16 w-[4px] top-[40%] left-6  bg-gray-700 rounded-full"></div>
            <input
              onClick={() => setPanelOpen(true)}
              type="text"
              value={pickup}
              onChange={(e) => setPickup(e.target.value)}
              className="bg-[#eee] px-12 py-3 border border-[#ccc] text-base focus:outline-none rounded-lg w-full mt-5"
              placeholder="Add a pickup location"
            />
            <input
              onClick={() => setPanelOpen(true)}
              className="bg-[#eee] px-12 py-3 border border-[#ccc] text-base focus:outline-none rounded-lg w-full mt-3"
              type="text"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              placeholder="Enter your destination"
            />
          </form>
        </div>

        <div ref={panelRef} className="h-[0] bg-red-500"></div>
      </div>
    </div>
  );
};

export default Home;
