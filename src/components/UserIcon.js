import React, { useEffect, useState } from "react";
import "../styles/User.scss";

const UserIcon = (props) => {
  const { image, watched, small } = props;
  const add = props.addStory;

  const launchStory = (id) => {};
  const addStory = () => {};

  const basicClass = watched ? "user-icon" : "user-icon user-icon_unwatched";
  const smallClass = small ? " user-icon_small" : "";

  return (
    <div className={basicClass + smallClass} onClick={() => {}}>
      <button
        className="user-icon__border"
        onClick={()=>{add ? addStory() : launchStory(0)}}
        onKeyDown={(e) => { if (e.keyCode === 9) e.preventDefault() }}
      >
        <img className="user-icon__image" src={image} alt="" />
        {add && (
          <div className="user-icon__button">
            <span>+</span>
          </div>
        )}
      </button>
    </div>
  );
};

const StoriesIcon = (props) => {
  const { random, addStory, watched } = props;

  const [user, setUser] = useState(null);

  useEffect(
    () => async () => {
      let newUser = await fetch("https://randomuser.me/api/").then((res) =>
        res.json()
      );
      setUser(newUser.results[0]);
    },
    []
  );

  return (
    <div className="stories-icon">
      <UserIcon
        watched={watched}
        image={user && user.picture.thumbnail}
        addStory={addStory}
      />
      <span className="stories-icon__label">{user && user.name.first}</span>
    </div>
  );
};

export { UserIcon, StoriesIcon };
