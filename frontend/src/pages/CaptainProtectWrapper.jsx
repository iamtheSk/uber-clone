import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CaptainDataContext } from "../context/CaptainContext";
import axios from "axios";
const CaptainProtectWrapper = ({ children }) => {
  const navigate = useNavigate();

  const token = localStorage.getItem("token");

  const { captain, setCaptain } = useContext(CaptainDataContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!token || token === null) {
      navigate("/login");
    }

    axios
      .get(`${import.meta.env.VITE_BASE_URL}/captains/profile`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        if (response.status === 200) {
          setCaptain(response.data.captain);
          setLoading(false);
        }
      });
  }, [token]);

  return <>{children}</>;
};

export default CaptainProtectWrapper;
