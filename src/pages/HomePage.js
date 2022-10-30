import React from "react";
import { UserIcon } from "../components/UserIcon";

const HomePage = (props) => {
  return (
    <>
      <ul style={{display:"flex"}}>
        <li>
          <UserIcon watched={true} />
        </li>
        <li>
          <UserIcon />
        </li>
        <li>
          <UserIcon watched={true} />
        </li>
        <li>
          <UserIcon />
        </li>
        <li>
          <UserIcon />
        </li>
      </ul>
    </>
  );
};

export { HomePage };
