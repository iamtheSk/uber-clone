import { useNavigate } from "react-router-dom";
const Home = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h4 className="my-10">Home</h4>

      <button
        className="bg-black text-white font-semibold mb-4 rounded-lg mx-auto  w-full px-3 py-3"
        onClick={() => navigate("/user/logout")}>
        User Logout
      </button>
    </div>
  );
};

export default Home;
