import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="h-screen w-full bg-cover bg-center bg-[url(https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/c5310f182519763.652f3606b64b0.jpg)] pt-8 flex flex-col items-start justify-between bg-red-400">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
        alt="Uber Logo"
        className="w-16 ml-8"
      />
      <div className="bg-white p-4 pb-7 w-full">
        <h2 className="text-3xl font-bold">Get Started with Uber</h2>
        <Link
          to={"/login"}
          className="flex items-center justify-center w-full bg-black text-white py-3 rounded-lg mt-5">
          Continue
        </Link>
      </div>
    </div>
  );
};

export default Home;
