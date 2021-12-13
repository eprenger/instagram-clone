function Story({ img, username }) {
  return (
    <div>
      <img
        className="h-14 w-14 rounded-full p-[1.5px] border-2 border-red-500 cursor-pointer"
        src={img}
        alt=""
      />
      <p>{username}</p>
    </div>
  );
}

export default Story;
