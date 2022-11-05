import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCamera, faPaperPlane, faHome, faMagnifyingGlass, faPlusSquare, faHeart} from "@fortawesome/free-solid-svg-icons";
import "../styles/Section.scss";
import { UserIcon } from "./UserIcon";

const TopToolBar = (props) => {
  return (
    <section className="tool-bar mobile-only">
      <FontAwesomeIcon className="icon" icon={faCamera} />
      <FontAwesomeIcon className="icon" icon={faPaperPlane} />
    </section>
  );
};

const BottomToolBar = (props) => {
  return (
    <section className="tool-bar tool-bar_bottom mobile-only">
      <FontAwesomeIcon className="icon" icon={faHome} />
      <FontAwesomeIcon className="icon" icon={faMagnifyingGlass} />
      <FontAwesomeIcon className="icon" icon={faPlusSquare} />
      <FontAwesomeIcon className="icon" icon={faHeart} />
      <UserIcon watched={true} small={true}/>
    </section>
  );
};

export { TopToolBar, BottomToolBar };
