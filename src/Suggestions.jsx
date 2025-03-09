import React, { useEffect, useState } from "react";

function Suggestions() {
  const [profile, setProfile] = useState(null);
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/profile")
      .then((data) => data.json())
      .then((data) => {
        setProfile(data);
      })
      .catch((e) => {
        console.log(e);
      });
    fetch("http://localhost:3000/suggestions")
      .then((data) => data.json())
      .then((data) => {
        setSuggestions(data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);
  return (
    <div>
      <div className="suggestions  w-75 m-4">
        {profile == null ? (
          <p>Loading..</p>
        ) : (
          <div className="d-flex">
            <img
              src={profile.profile_pic}
              alt=""
              className="rounded-circle db me-2"
            />
            <h5>{profile.username}</h5>
            <small className="ms-auto text-primary">Switch</small>
          </div>
        )}
        <div className="d-flex mt-4">
          <div>Suggestions for you</div>
          <b className="ms-auto">See All</b>
        </div>

        {suggestions.length > 0 ? (
          <div className="my-3">
            {suggestions.map((suggestion) => (
              <div key={suggestion.id}>
                <div className="d-flex mt-3">
                  <img
                    src={suggestion.profile_pic}
                    alt=""
                    className="rounded-circle db me-2"
                  />
                  <h5>{suggestion.username}</h5>
                  <p className="text-primary ms-auto">Follow</p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div>Loading Suggestion</div>
        )}
      </div>
    </div>
  );
}

export default Suggestions;
