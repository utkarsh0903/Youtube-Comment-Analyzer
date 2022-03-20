import React from "react";

function Avatar(props) {
  function handleChange() {}
  function checkComments() {}
  return (
    <div>
      <h2>Filter Comments </h2>
      <input
        onChange={handleChange}
        type="search"
        placeholder="Enter word you want to check"
      />
      <button onClick={checkComments(props.comments)} type="submit">
        Check
      </button>
    </div>
  );
}

export default Avatar;
