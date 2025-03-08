import React, { useEffect, useState } from "react";

function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/posts")
      .then((data) => data.json())
      .then((data) => {
        setPosts(data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);
  return (
    <div className="d-flex justify-content-center">
      {posts.length > 0 ? (
        <div className="my-3">
          {posts.map((post) => (
            <div key={post.id}>
              <div className="d-flex">
                <img
                  src={post.user.profile_pic}
                  alt=""
                  className="rounded-circle db me-2"
                />
                <h5>{post.user.username}</h5>
              </div>
              <img src={post.image} alt="" className="image" />
              <div>
                <i className="bi bi-heart"></i>
                <i className="bi bi-chat"></i>
                <i className="bi bi-send"></i>
              </div>
              <div>
                <b>{post.likes} Likes</b>
              </div>
              <p>{post.caption}</p>
            </div>
          ))}
        </div>
      ) : (
        <div>Loading Posts</div>
      )}
    </div>
  );
}

export default Posts;
