import Post from "../post/Post";
import "./posts.css";

export default function  Posts({ posts }) {
  return (
    <div className="posts">
      {posts.map((post,_id) => (
        <Post post={post } key={_id} />
      ))}
    </div>
  );
}


