export default function MiniProfile() {
  return (
    <div className="flex items-center justify-between mt-14 ml-10">
      <img
        src="https://links.papareact.com/3ke"
        className="w-16 h-16 rounded-full border p-[2px]"
      />

      <div>
        <h2 className="font-bold">eprenger</h2>
        <h3 className="text-sm text-gray-400">welcome to instagram</h3>
      </div>

      <button className="text-blue-400 text-sm font-bold">Sign Out</button>
    </div>
  );
}