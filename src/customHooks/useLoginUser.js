import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useCookies } from "react-cookie";

const loginUser = async (user) => {
  const { data } = await axios.post(
    "https://inventory-manager-fglv.onrender.com/api/v1/auth/login",
    user,
    {
      withCredentials: true,
    }
  );
  return data.user;
};

const useLoginUser = () => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: loginUser,
    onSuccess: () => {
      toast.success("User Logged in successfully!!!", {
        position: toast.POSITION.TOP_CENTER,
      });
      const [ cookie ] = useCookies([]);
      console.log(JSON.stringify(cookie));
      console.log(cookie.token);
      console.log("PLEASE WORK :(");
      navigate("/");
    },
    onError: (error) => {
      toast.error(error?.response?.data?.msg, {
        position: toast.POSITION.TOP_CENTER,
      });
      navigate("/login");
    },
  });
};

export default useLoginUser;