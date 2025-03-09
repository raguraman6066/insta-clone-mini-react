import React, { useEffect, useState } from "react";

function Stories() {
  const [stories, setStories] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/story")
      .then((data) => data.json())
      .then((data) => setStories(data))
      .catch((e) => {
        console.log(e);
      });
  }, []);
  return (
    <div className="story d-flex">
      {stories.length > 0 ? (
        stories.map((story) => (
          <div key={story.id}>
            <img
              src={story.user.profile_pic}
              alt=""
              className="story-dp rounded-circle"
            />
            <p className="text-truncate " style={{ width: "50px" }}>
              {story.user.username}
            </p>
          </div>
        ))
      ) : (
        <p>Loading</p>
      )}
    </div>
  );
}

export default Stories;
