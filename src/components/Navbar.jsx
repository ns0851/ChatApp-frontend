import React from "react";
import { useAuthStore } from "../store/useAuthStore";
import { Link, useNavigate } from "react-router-dom";


const Navbar = () => {
  const authUser = useAuthStore((state) => state.authUser);
  const logout = useAuthStore((state) => state.logout);
  const navigate = useNavigate()
  return (
    <div className="flex justify-between z-10 bg-base-100 items-center py-5 px-5 sticky top-0 text-xl">
      <div className="left flex items-center gap-2">
        <img onClick={()=>navigate('/')} className="md:w-[4%] w-[18%]" src="../../ChatLogo.png" alt="" />
        <div className="text-xl">
        <Link className="cursor-default focus:outline-none" to={"/"}>howsApp</Link>
        </div>
      </div>
      <div className="flex gap-0 md:gap-6">
        <div className="flex gap-2 size-20 justify-center items-center cursor-pointer py-2 px-6 rounded-md hover:bg-base-300">
            <img onClick={()=>{navigate("/settings")}} className="" src="../../svg/settings.svg" alt="" />
            <Link to={"/settings"}> <h1 className="md:block hidden focus:outline-none">Settings</h1> </Link>

        </div>
        {authUser && (
          <>
            <div className="flex gap-2 justify-center items-center cursor-pointer py-2 px-4 rounded-md hover:bg-base-300">
              <img onClick={()=>{navigate("/profile")}} className="" src="../../svg/user.svg" alt="" />
              <div>
              <Link className="md:block hidden focus:outline-none" to={"/profile"}>Profile</Link>
              </div>
            </div>
            <div onClick={()=>logout()} className=" flex gap-2 justify-center items-center py-2 px-4 bg-base-100 rounded-md cursor-pointer hover:bg-base-300 active:scale-95 transition-transform duration-150">
              <img src="../../svg/logout.svg" alt="" />
              <div> <h1 className="md:block hidden">Logout</h1></div>
            </div>
          </>
        )}
        {!authUser && (
          <div className="py-2 px-4 bg-[#171c20] rounded-md cursor-pointer text-center hover:bg-[#12161a] active:scale-95 transition-transform duration-150">
            SignUp
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
