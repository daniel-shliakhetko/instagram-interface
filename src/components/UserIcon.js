import React from "react";
import "../styles/User.scss";

const UserIcon = (props) => {
  const { watched } = props;

  return (
    <div
      className={watched ? "user-icon" : "user-icon user-icon_unwatched"}
      onClick={() => {}}
    >
      <button className="user-icon__border">
        <div className="user-icon__image"></div>
      </button>
    </div>
  );
};

export { UserIcon };
