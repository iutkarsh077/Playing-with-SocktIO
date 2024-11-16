import React from "react";
import { useAuthContext } from "../../context/AuthContext";
import { extractTime } from "../../utils/extractTime";
import useConversation from "../../zustand/useConversation";

const Message = ({ message }) => {
  const { authUser } = useAuthContext();
  const { selectedConversation } = useConversation();
  const fromMe = message.senderId === authUser._id;
  const formattedTime = extractTime(message.createdAt);
  const chatClassName = fromMe ? "chat-end" : "chat-start";
  const profilePic = fromMe
    ? authUser.profilePic
    : selectedConversation?.profilePic;
  const bubbleBgColor = fromMe ? "bg-blue-500" : "";
  return (
    <div className={`chat ${chatClassName} flex items-start gap-3 p-3`}>
      {/* Chat Image */}
      <div className="chat-image avatar">
        <div className="w-12 h-12 rounded-full overflow-hidden shadow-lg">
          <img
            alt="Profile"
            src={profilePic || "https://via.placeholder.com/150"}
            className="object-cover w-full h-full"
          />
        </div>
      </div>

      {/* Chat Content */}
      <div className="flex flex-col max-w-[75%]">
        {/* Chat Bubble */}
        <div
          className={`chat-bubble  ${bubbleBgColor} p-3 rounded-lg shadow-md`}
        >
          {message.message || "No message available."}
        </div>

        {/* Footer */}
        <div className="chat-footer text-xs text-gray-400 mt-1 flex gap-2 items-center">
          <span>{formattedTime || "Just now"}</span>
        </div>
      </div>
    </div>
  );
};

export default Message;
