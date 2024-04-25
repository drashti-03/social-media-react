import "bootstrap/dist/css/bootstrap.min.css";
import { useContext, useRef } from "react";
import { PostList } from "../store/post-list-store";

const CreatePost = () => {
  const { addPost } = useContext(PostList);

  const userIdElement = useRef();
  const postTitleElement = useRef();
  const postBodyElement = useRef();
  const reactionsElement = useRef();
  const tagsElement = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    const userId = userIdElement.current.value;
    const postTitle = postTitleElement.current.value;
    const postBody = postBodyElement.current.value;
    const reactions = reactionsElement.current.value;
    const tags = tagsElement.current.value.split(" ");

    userIdElement.current.value = "";
    postTitleElement.current.value = "";
    postBodyElement.current.value = "";
    reactionsElement.current.value = "";
    tagsElement.current.value = "";

    addPost(userId, postTitle, postBody, reactions, tags);
  };

  return (
    <div>
      <form className="create-post m-4" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="userId" className="htmlForm-label">
            User ID
          </label>
          <input
            type="text"
            className="form-control"
            id="userId"
            placeholder="Enter your User Id"
            ref={userIdElement}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="title" className="htmlForm-label">
            Post Title
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            placeholder="How are you feeling today?"
            ref={postTitleElement}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="body" className="htmlForm-label">
            Post Content
          </label>
          <textarea
            type="text"
            rows="5"
            className="form-control"
            id="body"
            placeholder="Enter the body"
            ref={postBodyElement}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="title" className="htmlForm-label">
            Reactions
          </label>
          <input
            type="text"
            className="form-control"
            id="reactions"
            placeholder="Number of reactions"
            ref={reactionsElement}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="title" className="htmlForm-label">
            Tags
          </label>
          <input
            type="text"
            className="form-control"
            id="tags"
            placeholder="Enter your tags with space between them"
            ref={tagsElement}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Post
        </button>
      </form>
    </div>
  );
};

export default CreatePost;
