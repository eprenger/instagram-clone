import Image from "next/image";
import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from "next/router";

import {
  SearchIcon,
  PlusCircleIcon,
  UserGroupIcon,
  HeartIcon,
  PaperAirplaneIcon,
  MenuIcon,
  HomeIcon,
} from "@heroicons/react/outline";
import { useRecoilState } from "recoil";
import { modalState } from "../atoms/modalAtom";

export default function Header() {
  const { data: session } = useSession();
  const [open, setOpen] = useRecoilState(modalState);
  const router = useRouter();

  return (
    <div className="shadow-sm border-b bg-white sticky top-0 z-50">
      <div className="flex justify-between max-w-6xl mx-5 lg:mx-auto">
        {/* left */}
        <div
          onClick={() => router.push("/")}
          className="relative hidden lg:inline-grid w-24"
        >
          <Image
            className="cursor-pointer"
            src="https://links.papareact.com/ocw"
            layout="fill"
            objectFit="contain"
          />
        </div>
        <div
          onClick={() => router.push("/")}
          className="relative w-10 flex-shrink-0 lg:hidden cursor-pointer "
        >
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
        {session ? (
          <div className="flex items-center justify-end space-x-4">
            <HomeIcon onClick={() => router.push("/")} className=" navBtn" />
            <MenuIcon className="md:hidden h-6 cursor-pointer" />
            <div className="relative navBtn">
              <PaperAirplaneIcon className="navBtn rotate-45" />
              <div
                className="absolute -top-2 -right-3 bg-blue-400 rounded-full flex 
               text-white items-center justify-center text-xs w-5 h-5"
              >
                3
              </div>
            </div>
            <PlusCircleIcon onClick={() => setOpen(true)} className="addBtn" />
            <UserGroupIcon className="navBtn" />
            <HeartIcon className="navBtn" />
            <img
              onClick={signOut}
              src={session?.user?.image}
              alt="profile pic"
              className="h-10 w-10 rounded-full cursor-pointer"
            />
          </div>
        ) : (
          <button onClick={signIn}>Sign In</button>
        )}
      </div>
    </div>
  );
}
