import React from "react";
import propTypes from "prop-types";

const Profile = ({ name, bio, pro, children, handleName }) => {
  return (
    <div>
      <h1 style={{ color: "gray" }}>My Name is Name {name}</h1>
      <h1 style={{ color: "red" }}>My bioGraphy is {bio}</h1>
      <h1 style={{ color: "brown" }}>My profession is {pro}</h1>
      {children}
      <br />
      <button
        style={{
          marginLeft: "-50px",
          width: "150px",
          height: "90px",
          backgroundColor: "green",
          borderRadius: "10px",
          color: "purple",
        }}
        onClick={() => handleName(name)}
      >
        <h1 style={{ color: "yellow" }}> CLICK ME</h1>
      </button>
    </div>
  );
};
Profile.defaultProps = {
  name: "guest",
  bio: " cool",
  proffession: "students",
};
Profile.propTypes = {
  name: propTypes.string,
  bio: propTypes.string,
  proffession: propTypes.string,
};

export default Profile;
