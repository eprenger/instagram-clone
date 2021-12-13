import Post from "./Post";

const posts = [
  {
    id: "123",
    username: "eprenger",
    userImg: "https://links.papareact.com/3ke",
    img: "https://links.papareact.com/3ke",
    caption: "this is cool",
  },
  {
    id: "123",
    username: "eprenger",
    userImg: "https://links.papareact.com/3ke",
    img: "https://links.papareact.com/3ke",
    caption: "this is cool",
  },
];

export default function Posts() {
  return (
    <div>
      {/* post*/}
      {posts.map((post) => (
        <Post
          key={post.id}
          id={post.id}
          username={post.username}
          userImg={post.userImg}
          img={post.img}
          caption={post.caption}
        />
      ))}
    </div>
  );
}
