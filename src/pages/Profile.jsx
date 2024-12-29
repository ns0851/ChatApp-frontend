import { useEffect, useState } from "react";
import { useAuthStore } from "../store/useAuthStore";

const Profile = () => {
  // const authUser = useAuthStore((state) => state.authUser);
  const { authUser, isUpdatingProfile, updateProfile, checkAuth } =
    useAuthStore();
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    checkAuth(); // Fetch auth data if not already available
  }, []);

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();

    reader.readAsDataURL(file);

    reader.onload = async () => {
      const base64Image = reader.result;
      setSelectedImage(base64Image);
      await updateProfile({ profilePic: base64Image });
    };
  };

  return (
    <div className="flex items-start mt-[6%] justify-center h-screen bg-none relative md:bottom-24">
      <div className="w-[70%] md:w-[40%] h-[87%] md:bg-base-100 flex flex-col items-center rounded-lg md:shadow-lg">
        <h1 className="text-center font-bold text-2xl mt-4">Profile</h1>
        <h1 className="text-center mt-2">Your profile information</h1>
        <div className="w-[50%] md:w-[30%] bg-white rounded-full flex items-center relative justify-center mt-3">
          <div className="relative w-full h-full aspect-square overflow-hidden rounded-full">
            <img
              className="absolute top-0 left-0 w-full h-full object-cover"
              src={selectedImage || authUser.profilePic || "../../UserLogo.png"}
              alt="User Logo"
            />
          </div>

          <div className="bg-base-300 absolute bottom-0 right-5 z-10 p-2 rounded-[50%] cursor-pointer">
            <label
              htmlFor="profile-picture-upload"
              className={`flex items-center justify-center w-full h-full cursor-pointer ${
                isUpdatingProfile ? "animate-pulse pointer-events-none" : ""
              }`}
            >
              <img src="../../svg/camera.svg" alt="Camera Icon" />
            </label>
            <input
              type="file"
              accept="image/*"
              id="profile-picture-upload"
              className="hidden"
              onChange={handleImageUpload}
              disabled={isUpdatingProfile}
            />
          </div>
        </div>
        <h1 className="text-center mt-2">
          {isUpdatingProfile
            ? "Uploading..."
            : "Click on camera icon to Update your profile picture"}
        </h1>

        {/* USER INFORMATION SECTION */}

        <div className="mt-10">
          <div>
            <div>Name</div>
            <div className="cursor-not-allowed flex py-2 rounded px-4 border-[1px] mt-1 border-solid items-center justify-center border-gray-500">
              <div>
                <img src="../../svg/user.svg" alt="" />
              </div>
              <h1 className="cursor-not-allowed md:w-[28vw] w-[60vw] bg-transparent md:m-0 md:py-2 py-1 px-2 text-lg font-sans focus:outline-none">
                {authUser?.name}
              </h1>
            </div>
          </div>

          <div className="mt-2">
            <div>Email</div>
            <div className="cursor-not-allowed flex py-2 rounded px-4 border-[1px] mt-1 border-solid items-center justify-center border-gray-500">
              <div>
                <img src="../../svg/email.svg" alt="" />
              </div>
              <h1 className="cursor-not-allowed md:w-[28vw] w-[60vw] bg-transparent md:m-0 md:py-2 py-1 px-2 text-lg font-sans focus:outline-none">
                {authUser?.email}
              </h1>
            </div>
          </div>
          {/* MEMBER SINCE SECTION  */}

          <div className="py-10 px-3 ">
            <h1 className="text-2xl ">Account Information</h1>
            <div className="flex flex-col gap-3">
              <div className="flex justify-between mt-10">
                <h1>Member Since</h1>
                <h1>{authUser.createdAt?.slice(0, 10)}</h1>
              </div>
              <div className="flex justify-between mt-3">
                <h1>Account Status</h1>
                <h1 className="text-green-500">Active</h1>
              </div>
              <div></div>
            </div>
          </div>

          {/* END OF MEMBER SINCE SECTION  */}
        </div>

        {/* END OF USER INFORMATION SECTION */}
      </div>
    </div>
  );
};

export default Profile;
