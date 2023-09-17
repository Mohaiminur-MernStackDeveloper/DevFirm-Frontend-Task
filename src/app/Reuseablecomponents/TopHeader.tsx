import Image from "next/image";
import { AiOutlineSearch, AiOutlineMessage } from "react-icons/ai";
import { HiOutlineBellAlert } from "react-icons/hi2";
import { IoChevronDownOutline } from "react-icons/io5";

const TopHeader = () => {
  return (
    <div className="w-full bg-white px-5 py-3 rounded-md grid grid-cols-2 justify-between items-center mb-5">
      <div className="border rounded-full px-5 py-1 flex justify-start items-center w-4/5">
        <AiOutlineSearch />
        <input
          type="text"
          name="Search"
          placeholder="Search"
          className="px-5 py-1 text-sm rounded-full w-4/5"
        />
      </div>
      <div className="flex justify-end items-center text-2xl gap-5">
        <AiOutlineMessage />
        <HiOutlineBellAlert />
        <div className="flex justify-center items-center gap-2">
          <Image
            className="rounded-full h-10"
            src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?w=2000"
            width={35}
            height={55}
            alt="Picture of the author"
          />
          <IoChevronDownOutline className="text-xs text-gray-500" />
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
