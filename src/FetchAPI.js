import React, { useState } from "react";

import "./FetchAPI.css";
import SentimentReview from "./SentimentReview";

function FetchAPI() {
  const [inputId, setInputId] = useState("");
  const [comments, updateComments] = useState([]);
  function handleChange(event) {
    let videoId = event.target.value;
    setInputId(videoId);
  }

  const getComments = (videoId) => {
    fetch(
      `https://www.googleapis.com/youtube/v3/commentThreads?part=snippet&videoId=${videoId}&key=AIzaSyBQM1YK0xl9l3Bvy2OntNplW7gTx9RZkGs&maxResults=100`
    ).then(function (response) {
      if (response.ok) {
        response.json().then(function (data) {
          console.log(data);
          updateComments(data.items);
        });
      } else {
        console.log("response not ok");
      }
    });
  };

  return (
    <div>
      <div className="search">
        <input
          onChange={handleChange}
          type="search"
          placeholder="Enter Videoid"
        />
        <button
          onClick={() => {
            getComments(inputId);
          }}
          type="submit"
        >
          Submit
        </button>
        <div className="comments">
          {comments.map((item, index) => {
            return (
              <div >
                {/* <li key={`comment-${index}`} id={`comment-${index}`}> */}
                <div className="comments-info">
                <img
                  className="avatar"
                  src={
                    item.snippet.topLevelComment.snippet.authorProfileImageUrl
                  }
                  alt="Avatar"
                ></img>
                <a href={item.snippet.topLevelComment.snippet.authorChannelUrl} target="_blank">

                <h5>{`${item.snippet.topLevelComment.snippet.authorDisplayName}`}</h5>
                </a>
                </div>
                <p>{item.snippet.topLevelComment.snippet.textOriginal}</p>
                {/* </li> */}
              </div>
            );
          })}
        </div>
      </div>

      {/* <Avatar icon={comments} /> */}
      <SentimentReview
        comments={comments.map((item, index) => {
          return (
            <li key={index} id={index}>
              {item.snippet.topLevelComment.snippet.textOriginal}
            </li>
          );
        })}
      />
    </div>
  );
}

export default FetchAPI;
