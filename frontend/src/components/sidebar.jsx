"use client";
import { React, useState } from "react";
import dp from "@/assets/sidebar/dp.png";
import home from "@/assets/sidebar/Home.png";
import message from "@/assets/sidebar/Message.png";
import settings from "@/assets/sidebar/Settings.png";
import notification from "@/assets/sidebar/Notification.png";
import logout from "@/assets/sidebar/Logout.png";
import Image from "next/image";

function Sidebar() {
  const [selected, setSelected] = useState("");

  const handleClick = (e) => {
    setSelected(e);
  };

  return (
    <div className="bg-[#6E00FF] h-full py-5 rounded-[20px] flex flex-col justify-between items-center">
      <div className="flex flex-col gap-10 items-center w-full mx-3">
        <div className="profile w-16 h-16 rounded-full bg-[#5322BC] flex justify-center items-center">
          <Image src={dp} alt="User Name" className="rounded-full w-14" />
        </div>

        <div className="flex flex-col items-center w-full">
          {/* Home Menu Item */}
          <div
            className={`home hover:bg-[#612DD1]/90 w-full flex items-center justify-center rounded-lg transition-all duration-300 ease-in-out py-5 ${
              selected === "home"
                ? "relative before:w-[6px] bg-[#612DD1]/90 before:bg-[#F3B559] before:h-full before:right-0 before:absolute"
                : ""
            }`}
            onClick={() => handleClick("home")}
          >
            <Image src={home} alt="home" className="rounded w-12" />
          </div>

          {/* Messages Menu Item */}
          <div
            className={`messages hover:bg-[#612DD1]/90 w-full flex items-center justify-center rounded-lg transition-all duration-300 ease-in-out p-5 ${
              selected === "message"
                ? "relative before:w-[6px] bg-[#612DD1]/90 before:bg-[#F3B559] before:h-full before:right-0 before:absolute"
                : ""
            }`}
            onClick={() => handleClick("message")}
          >
            <Image src={message} alt="message" className="rounded w-12" />
          </div>

          {/* Notifications Menu Item */}
          <div
            className={`notifications hover:bg-[#612DD1]/90 w-full flex items-center justify-center rounded-lg transition-all duration-300 ease-in-out p-5 ${
              selected === "settings"
                ? "relative before:w-[6px] bg-[#612DD1]/90 before:bg-[#F3B559] before:h-full before:right-0 before:absolute"
                : ""
            }`}
            onClick={() => handleClick("settings")}
          >
            <Image src={settings} alt="settings" className="rounded w-12" />
          </div>

          {/* Settings Menu Item */}
          <div
            className={`settings hover:bg-[#612DD1]/90 w-full flex items-center justify-center rounded-lg transition-all duration-300 ease-in-out p-5 ${
              selected === "notification"
                ? "relative before:w-[6px] bg-[#612DD1]/90 before:bg-[#F3B559] before:h-full before:right-0 before:absolute"
                : ""
            }`}
            onClick={() => handleClick("notification")}
          >
            <Image
              src={notification}
              alt="notification"
              className="rounded w-12"
            />
          </div>
        </div>
      </div>

      <div className="block2 logout w-full flex justify-center items-center">
        <Image src={logout} alt="logout" className="rounded w-12" />
      </div>
    </div>
  );
}

export default Sidebar;
