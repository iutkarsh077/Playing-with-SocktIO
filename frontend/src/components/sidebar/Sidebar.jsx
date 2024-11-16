import React from "react";
import Conversations from "./Conversations";

const Sidebar = () => {
  return (
    <div className="border-r border-slate-500 p-4 flex flex-col">
      <Conversations />
    </div>
  );
};

export default Sidebar;
