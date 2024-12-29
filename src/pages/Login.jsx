import React, { useState } from "react";
import { useAuthStore } from "../store/useAuthStore";
import { useNavigate } from "react-router-dom";
import { Loader2 } from "lucide-react";
import toast from "react-hot-toast";

const Login = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { login, isLoggingIn } = useAuthStore();

  const handleSubmit = (e) => {
    e.preventDefault();
      login(formData);
    setFormData({ email: "", password: "" });
  };

  return (
    <div className="min-h-screen w-screen flex">
      {/* left side */}
      <div className=" left-container md:min-w-1/2 min-w-[10vw] relative flex flex-col justify-center items-center">
        {/* Logo and title */}
        <div className="flex flex-col justify-center relative -top-[6vh] md:-top-[5vh] items-center">
          <div className="md:w-[12%] w-[25%]">
            <img src="../../ChatLogo.png" alt="" />
          </div>
          <div className="text-4xl text-white">Login to Account</div>
          <div className="text-[100%] md:w-[80%] w-[70%] text-center text-gray-500 mt-[1%]">
            Everyone ask's "What", we ask "How". <b>Login to explore</b>
          </div>
        </div>

        {/* form */}
        <div>
          <form
            onSubmit={(e) => {
              handleSubmit(e);
            }}
            className="flex flex-col gap-3"
          >
            <div>
              <div>Email</div>
              <div className="flex py-2 rounded px-4 border-[1px] mt-1 border-solid items-center justify-center border-gray-500">
                <div>
                  <img src="../../svg/email.svg" alt="" />
                </div>
                <input
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="md:w-[28vw] w-[60vw] bg-transparent md:py-2 py-1 px-2 text-lg font-sans focus:outline-none"
                  placeholder="Enter Email here"
                  type="email"
                />
              </div>
            </div>

            <div>
              <div>Password</div>
              <div className="flex py-2 rounded px-4 border-[1px] mt-1 border-solid items-center justify-center border-gray-500">
                <div>
                  <img src="../../svg/password.svg" alt="" />
                </div>
                <input
                  value={formData.password}
                  onChange={(e) =>
                    setFormData({ ...formData, password: e.target.value })
                  }
                  className="md:w-[28vw] w-[60vw] bg-transparent md:py-2 py-1 px-2 text-lg font-sans focus:outline-none"
                  placeholder="Enter Password here"
                  type="password"
                />
              </div>
            </div>
            <div className="text-center mt-6">
              <button
                type="submit"
                className="btn text-lg font-semibold btn-primary w-full"
                disabled={isLoggingIn}
              >
                {isLoggingIn ? (
                  <>
                    <Loader2 className="size-5 animate-spin" />
                    Loading...
                  </>
                ) : (
                  "Login"
                )}
              </button>
            </div>
          </form>
          <h1 className="text-center mt-2">
            Don't have an account?{" "}
            <span
              className="hover:text-purple-600 text-blue-600 underline cursor-pointer"
              onClick={() => navigate("/signup")}
            >
              Sign Up
            </span>
          </h1>
        </div>
      </div>

      {/* right side */}
      <div className=" w-0 md:w-1/2 art-container">
        <div className="bubble bubble-1">Hello! 😊</div>
        <div className="bubble bubble-2">Welcome! 💬</div>
        <div className="bubble bubble-3">Let’s connect! 🌍</div>
        <div className="bubble bubble-4">Start chatting! 🚀</div>
        <div className="bubble bubble-5">Stay in touch ❤️</div>
        <div className="bubble bubble-6">Your chat, your way ✨</div>
        <div className="bubble bubble-7">Excited to have you! 🎉</div>
        <div className="bubble bubble-8">Join the fun! 🥳</div>
        <div className="">
          <div className="right-text absolute text-6xl bottom-[55%] right-[20%] font-bold">
            Join our community
          </div>
          <div className="absolute text right-text text-2xl bottom-[47%] right-[32%] font-semibold">
            Connect with friends, share memories and <br></br>Ask How they're
            doing.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
