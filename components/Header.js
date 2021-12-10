import Image from "next/image";

import {
  SearchIcon,
  PlusCircleIcon,
  UserGroupIcon,
  HeartIcon,
  PaperAirplaneIcon,
  MenuIcon,
  HomeIcon,
} from "@heroicons/react/outline";

export default function Header() {
  return (
    <div>
      <div className="flex justify-between max-w-6xl mx-5 lg:mx-auto">
        {/* left */}
        <div className="relative hidden lg:inline-grid w-24">
          <Image
            src="https://links.papareact.com/ocw"
            layout="fill"
            objectFit="contain"
          />
        </div>
        <div className="relative w-10 flex-shrink-0 lg:hidden cursor-pointer ">
          <Image
            src="https://links.papareact.com/jjm"
            layout="fill"
            objectFit="contain"
          />
        </div>

        {/* middle - search input */}
        <div className="max-w-xs">
          <div className="mt-1 p-3 relative rounded-md">
            <div className="absolute inset-y-0 pl-3 flex items-center pointer-events-none">
              <SearchIcon
                className="h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
            </div>
            <input
              type="text"
              className="bg-gray-50 focus:ring-black focus:border-black block w-full pl-10 
            sm:text-sm border-gray-300 rounded-md"
              placeholder="Search"
            />
          </div>
        </div>

        {/* right */}
        <div className="flex items-center justify-end space-x-4">
          <HomeIcon className=" navBtn" />
          <MenuIcon className="md:hidden h-6 cursor-pointer" />
          <PaperAirplaneIcon className="navBtn" />
        </div>
      </div>
    </div>
  );
}
