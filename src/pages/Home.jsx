// import React from 'react'
import Sidebar from "../components/Sidebar";
import NoChatSelected from "../components/NoChatSelected";
import ChatContainer from "../components/ChatContainer";
import { useChatStore } from "../store/useChatStore";

const Home = () => {
  const { selectedUser } = useChatStore();
  return (
    <div className="h-screen bg-base-200">
      <div className="flex items-center justify-center px-4  pt-20">
        <div className="bg-base-100 rounded-lg shadow-xl w-full max-x-6xl h-[cal(100vh-8rem)]">
          <div className="flex rounded-lg h-full overflow-hidden">
            <Sidebar />

            {!selectedUser ? <NoChatSelected /> : <ChatContainer />}
          </div>
        </div>
      </div>
      {/* <div className='w-[70vw]'>Chat Screen</div> */}
    </div>
  );
};

export default Home;
