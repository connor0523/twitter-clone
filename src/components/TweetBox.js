import { Avatar, Button } from "@mui/material";
import React, { useState } from "react";
import "./TweetBox.css";
import {db} from '../firebase'
import { collection, addDoc, serverTimestamp } from "firebase/firestore";


function TweetBox() {
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");
  
  const sendTweet = (e) => {
    e.preventDefault();
    const post = {
      displayName: "Connor Ellis",
      username: "connorellis911",
      verified: true,
      text: tweetMessage,
      avatar: "https://media.giphy.com/media/gLLSCBJqYFFeXrdgPn/giphy.gif",
      image: tweetImage,
      timestamp: serverTimestamp(),
    };
    addDoc(collection(db, "posts"), post);
    setTweetImage("")
    setTweetMessage("")
  };
  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <Avatar src="https://media.giphy.com/media/gLLSCBJqYFFeXrdgPn/giphy.gif" />
          <input
          onChange={e => setTweetMessage(e.target.value)}
            value={tweetMessage}
            placeholder="What's happening"
            type="text"
          ></input>
        </div>
        <input
          value={tweetImage}
          onChange={e => setTweetImage(e.target.value)}
          className="tweetBox__imageInput"
          placeholder="Optional: Enter image URL"
          type="text"
        ></input>
        <Button onClick={sendTweet} type="submit" className="tweetBox__tweetButton">Tweet</Button>
      </form>
    </div>
  );
}

export default TweetBox;
