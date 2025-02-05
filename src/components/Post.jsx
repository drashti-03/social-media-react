/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
import { useContext } from "react";
import { AiFillDelete } from "react-icons/ai";
import { PostList } from "../store/post-list-store";

const Post = ({ post }) => {
  const { deletePost } = useContext(PostList);
  return (
    <div>
      <div className="card post-card m-4 w-75" style={{ width: "18rem" }}>
        <div className="card-body">
          <h5 className="card-title">
            {post.title}
            <span
              className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
              onClick={() => deletePost(post.id)}
            >
              <AiFillDelete />
            </span>
          </h5>
          <p className="card-text">{post.body}</p>
          {post.tags.map((tag) => (
            <span key={tag} className="badge rounded-pill text-bg-primary me-2">
              {tag}
            </span>
          ))}
{/*           <div className="alert alert-success mt-3 mx-0 mb-0" role="alert">
            This post has been reacted by {post.reactions} people.{" "}
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Post;
