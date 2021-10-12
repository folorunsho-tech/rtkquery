import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useGetPostsQuery } from "./services/posts";
const Home = () => {
  const [posts, setPosts] = useState([]);
  const { data, error, isLoading } = useGetPostsQuery();
  useEffect(() => {
    if (!isLoading) setPosts(data.slice(0, 19));
  }, [data, isLoading]);
  if (isLoading) return "loading...";
  if (error) return console.log(error);
  return (
    <main className="md:grid-cols-2 lg:grid-cols-3 m-auto p-8 grid gap-4 cursor-pointer">
      {posts.map((post) => (
        <Link to={`/post/${post.id}`}>
          <div
            className="shadow-lg p-4 border border-blue-700 rounded-lg max-w-md"
            key={post.id}
          >
            <h2>{post.title}</h2>
            <p className="py-6">{post.body.slice(0, 131)}...</p>
            <Link
              to={`/post/${post.id}`}
              onClick={() => {}}
              className="text-blue-600 cursor-pointer"
            >
              Read More
            </Link>
          </div>
        </Link>
      ))}
    </main>
  );
};

export default Home;
