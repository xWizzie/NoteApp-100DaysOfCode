import React from "react";
import { useNavigate, Link } from "react-router-dom";

const BottomRightButton = ({ target, icon }) => {
  return (
    <div className="d-flex justify-content-end position-absolute bottom-0 end-0 m-3">
      <Link to={"/" + target}>
        <button className="btn btn-primary rounded-circle fs-1">
          <i className={icon}></i>
        </button>
      </Link>
    </div>
  );
};

export default BottomRightButton;
