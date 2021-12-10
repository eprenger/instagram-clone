import Image from "next/image";

import {
  SearchIcon,
  PlusCircleIcon,
  UserGroupIcon,
  HeartIcon,
  PaperAirplaneIcon,
  MenuIcon,
} from "@heroicons/react/outline";

export default function Header() {
  return (
    <div>
      <div className="flex justify-between max-w-6xl">
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
        <div className="mt-1 relative p-3 rounded-md ">
          <div className="absolute inset-y-0 pl-3 flex items-center pointer-events-none">
            <SearchIcon className="h-5 w-5 text-gray-500" />
          </div>
          <input
            className="bg-gray-50 block w-full pl-10 sm:text-sm 
            border-gray-300  focus:ring-black rounded-md"
            placeholder="Search"
          />
        </div>

        {/* right */}
      </div>
    </div>
  );
}
