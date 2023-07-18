import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPost, deletePost, updatePost } from "../redux/postsSlice";
//import Posts from './posts';

export default function Posts() {
  const [title, setTitle] = useState("");
  const [discription, setDescription] = useState("");

  const [updatedTitle, setUpdatedTitle] = useState("");
  const [updatedDiscription, setUpdatedDescription] = useState("");

  const [isEdit, setIsEdit] = useState(false);
  const [id, setId] = useState(null);

  const postss = useSelector((state) => state.Posts.items);

  //console.log(title, discription);
  const dispatch = useDispatch();
  return (
    <div>
      <div className="form">
        <input
          type="text"
          value={title}
          placeholder="Enter post Title"
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          value={discription}
          placeholder="Enter post Discription"
          onChange={(e) => setDescription(e.target.value)}
        />
        <button
          onClick={() => {
            dispatch(addPost({ id: postss.length + 1, title, discription }));
            setTitle("");
            setDescription("");
          }}
        >
          Add Post
        </button>
      </div>
      <div className="posts">
        {postss.length > 0
          ? postss.map((post) => (
              <div key={post.id} className="post">
                <h2>{post.title}</h2>
                <p>{post.discription}</p>
                <button
                  onClick={() => {
                    setIsEdit(true);
                    setId(post.id);
                  }}
                >
                  Edite
                </button>
                <button onClick={() => dispatch(deletePost({ id: post.id }))}>
                  Delete
                </button>
                <br />
                {isEdit && id == post.id && (
                  <>
                    <input
                      type="text"
                      placeholder="update title"
                      onChange={(e) => setUpdatedTitle(e.target.value)}
                    />
                    <input
                      type="text"
                      placeholder="update discreption"
                      onChange={(e) => setUpdatedDescription(e.target.value)}
                    />
                    <button
                      onClick={() => {
                        dispatch(
                          updatePost({
                            id: post.id,
                            title: updatedTitle,
                            discription: updatedDiscription,
                          })
                        );
                        setIsEdit(false);
                      }}
                    >
                      Update
                    </button>
                  </>
                )}
              </div>
            ))
          : "there are no posts"}
      </div>
    </div>
  );
}
