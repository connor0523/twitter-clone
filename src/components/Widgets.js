import React from "react";
import "./Widgets.css";
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed,
} from "react-twitter-embed";
import SearchIcon from "@mui/icons-material/Search";

function Widgets() {
  return (
    <div className="widgets">
      <div className="widgets__input">
        <SearchIcon className="widgets__searchIcon" />
        <input placeholder="Search Twitter" type="text" />
      </div>

      <div className="widgets__widgetContainer">
        <h2>What's happening</h2>

        <TwitterTweetEmbed tweetId={"1469145672104361986"} />

        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="JuiceWorlddd"
          options={{ height: 400 }}
        />

        <TwitterShareButton
          url={"https://www.instagram.com/juicewrld999/"}
          options={{ text: "#999 forever", via: "juicewrld999" }}
        />
      </div>
    </div>
  );
}

export default Widgets;
