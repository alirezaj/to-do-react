import { useState, useEffect } from "react";
import { IoLogoApple, IoLogoFacebook, IoLogoGoogle } from "react-icons/io5";
import { AuthModel } from "../../models/auth.model";
import { useNavigate } from "react-router-dom";
import { fetchUser } from "../../helpers/fetchUser";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.currentTarget.value);
    setEmail(e.currentTarget.value);
  };

  const loginUser = async () => {
    setIsLoading(true);
    const response = (await fetchUser(email)) as AuthModel;
    localStorage.setItem("user", JSON.stringify(response));
    setIsLoading(false);
    setTimeout(() => {
      navigate("/");
    }, 100);
  };

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      navigate("/");
    }
  }, [navigate]);

  return (
    <div className="flex flex-col w-3/5 m-auto p-3 mt-3 gap-3">
      <div>
        <h1 className="capitalize text-header text-2xl font-bold">
          Your todos list
        </h1>
      </div>
      <div className="mt-16 w-96">
        <h2 className="capitalize text-2xl font-bold">Login</h2>
        <div className="flex flex-col gap-6  mt-6">
          <button className="flex p-2 bg-white hover:bg-gray-200 border rounded-md capitalize gap-2 justify-center items-center transition-all duration-150">
            <IoLogoGoogle className="w-7 h-7 text-[#ea4335]" />
            <span>continue with google</span>
          </button>
          <button className="flex p-2 bg-white hover:bg-gray-200 border rounded-md capitalize gap-2 justify-center items-center transition-all duration-150">
            <IoLogoFacebook className="w-8 h-8 text-[#0000FF]" />
            <span>continue with facbook</span>
          </button>
          <button className="flex p-2 bg-white hover:bg-gray-200 border rounded-md capitalize gap-2 justify-center items-center transition-all duration-150">
            <IoLogoApple className="w-8 h-8 text-black" />
            <span>continue with apple</span>
          </button>
        </div>
        <div className="mt-3">
          <hr />
        </div>
        <div className="flex flex-col mt-3 gap-4">
          <div className="flex flex-col border rounded-md p-1">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              className="p-1 outline-none"
              value={email}
              onChange={onChangeHandler}
            />
          </div>
          <button
            className="bg-header text-white capitalize p-3 rounded-md"
            onClick={loginUser}
          >
            {isLoading ? "loading..." : "log in"}
          </button>
        </div>
      </div>
    </div>
  );
};
