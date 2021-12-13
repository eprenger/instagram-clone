import { useSession, signOut } from "next-auth/react";

export default function MiniProfile() {
  const { data: session } = useSession();

  return (
    <div className="flex items-center justify-between mt-14 ml-10">
      <img
        src={session?.user?.image}
        className="w-16 h-16 rounded-full border p-[2px]"
      />

      <div>
        <h2 className="font-bold">{session?.user?.username}</h2>
        <h3 className="text-sm text-gray-400">welcome to instagram</h3>
      </div>

      <button onClick={signOut} className="text-blue-400 text-sm font-bold">
        Sign Out
      </button>
    </div>
  );
}
