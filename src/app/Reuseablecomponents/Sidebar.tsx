"use client";
import { useState } from "react";
import { BiArrowFromRight, BiArrowFromLeft, BiHome, BiPhone, BiBaguette, BiMessage, BiCalendar, BiLogOut } from "react-icons/bi";
import { AiFillContacts } from "react-icons/ai";
import { GiCupcake, GiTeamDowngrade, GiTeamUpgrade, GiSettingsKnobs } from "react-icons/gi";
import { FaFileInvoice, FaFileShield, FaPlaneArrival } from "react-icons/fa6";
import Link from "next/link";

const Sidebar = () => {
  const [expanded, setExpanded] = useState(true);
  return (
    <div className={`w-fit min-h-screen font-thin py-5 flex flex-col justify-start bg-primary rounded-md text-blue-200 items-center ${expanded ? "px-16": "px-5"}`}>
      <div className="w-full flex justify-between mb-5 items-center">
        <div>
          {expanded ? (
            <BiArrowFromRight onClick={()=>setExpanded(false)} className="text-2xl text-white cursor-pointer" />
          ) : (
            <BiArrowFromLeft onClick={()=>setExpanded(true)} className="text-2xl text-white cursor-pointer" />
          )}
        </div>
        <h1 className={`uppercase text-2xl overflow-hidden ${!expanded && "w-0"}`}>Logo</h1>
      </div>
      <div className="space-y-3">
        <Link href="/" className="flex justify-start items-center gap-5">
            <BiHome className="text-2xl"/>
            <h1 className={`overflow-hidden ${!expanded && "w-0"}`}>Dashboard</h1>
        </Link>
        <Link href="/" className="flex justify-start items-center gap-5">
            <BiPhone className="text-2xl"/>
            <h1 className={`overflow-hidden ${!expanded && "w-0"}`}>Reservations</h1>
        </Link>
        <Link href="/" className="flex justify-start items-center gap-5">
            <BiBaguette className="text-2xl"/>
            <h1 className={`overflow-hidden ${!expanded && "w-0"}`}>Trips</h1>
        </Link>
        <Link href="/" className="flex justify-start items-center gap-5">
            <FaFileInvoice className="text-2xl"/>
            <h1 className={`overflow-hidden ${!expanded && "w-0"}`}>Invoices</h1>
        </Link>
        <Link href="/" className="flex justify-start items-center gap-5">
            <FaPlaneArrival className="text-2xl"/>
            <h1 className={`overflow-hidden ${!expanded && "w-0"}`}>Planes</h1>
        </Link>
        <Link href="/" className="flex justify-start items-center gap-5">
            <GiCupcake className="text-2xl"/>
            <h1 className={`overflow-hidden ${!expanded && "w-0"}`}>Amenities</h1>
        </Link>
        <Link href="/" className="flex justify-start items-center gap-5">
            <AiFillContacts className="text-2xl"/>
            <h1 className={`overflow-hidden ${!expanded && "w-0"}`}>Contacts</h1>
        </Link>
        <Link href="/" className="flex justify-start items-center gap-5">
            <GiTeamDowngrade className="text-2xl"/>
            <h1 className={`overflow-hidden ${!expanded && "w-0"}`}>Team</h1>
        </Link>
        <Link href="/" className="flex justify-start items-center gap-5">
            <GiTeamUpgrade className="text-2xl"/>
            <h1 className={`overflow-hidden ${!expanded && "w-0"}`}>Crew Members</h1>
        </Link>
        <Link href="/" className="flex justify-start items-center gap-5">
            <FaFileShield className="text-2xl"/>
            <h1 className={`overflow-hidden ${!expanded && "w-0"}`}>Files</h1>
        </Link>
        <Link href="/" className="flex justify-start items-center gap-5">
            <BiMessage className="text-2xl"/>
            <h1 className={`overflow-hidden ${!expanded && "w-0"}`}>Messages</h1>
        </Link>
        <Link href="/" className="flex justify-start items-center gap-5">
            <BiCalendar className="text-2xl"/>
            <h1 className={`overflow-hidden ${!expanded && "w-0"}`}>Calender</h1>
        </Link>
        <Link href="/" className="flex justify-start items-center gap-5">
            <GiSettingsKnobs className="text-2xl"/>
            <h1 className={`overflow-hidden ${!expanded && "w-0"}`}>Setting</h1>
        </Link>
        <Link href="/" className="flex justify-start items-center gap-5">
            <BiLogOut className="text-2xl"/>
            <h1 className={`overflow-hidden ${!expanded && "w-0"}`}>Logout</h1>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
