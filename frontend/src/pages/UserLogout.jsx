import axios from "axios";
import { useNavigate } from "react-router-dom";

const UserLogout = () => {
  const token = localStorage.getItem("token");

  const navigate = useNavigate();

  axios
    .get(`${import.meta.env.VITE_BASE_URL}/users/logout`, {
      headers: {
        Authorization: `token ${JSON.parse(token)}`,
      },
    })
    .then((response) => {
      if (response.status === 200 || response.status === 201) {
        localStorage.removeItem("token");
        navigate("/login");
      }

      if (response.status === 401) {
        navigate("/login");
      }
    });

  return <div>UserLogout</div>;
};

export default UserLogout;
