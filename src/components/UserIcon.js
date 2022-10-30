import React from "react";
import "../styles/User.scss";

const UserIcon = (props) => {
  const { watched } = props;

  return (
    <button
      className={watched ? "user-icon" : "user-icon user-icon_unwatched"}
      onClick={""}
    >
      <div className="user-icon__image"></div>
    </button>
  );
};

export { UserIcon };
