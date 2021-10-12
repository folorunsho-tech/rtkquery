import React from "react";
import { useGetPostByIdQuery } from "./services/posts";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
const Blog = () => {
  const { id } = useParams();
  const { data, isLoading, error } = useGetPostByIdQuery(id);
  if (isLoading) return "...loading";
  if (error) return error;
  return (
    <div className="lg:py-8 p-8 md:pl-12 lg:pl-16  space-y-6 max-w-lg">
      <Link to="/">
        <button className="bg-red-500 py-2 px-4 text-white rounded-lg">
          Go Back
        </button>
      </Link>
      <h2>{data.title}</h2>
      <p>{data.body}</p>
    </div>
  );
};

export default Blog;
