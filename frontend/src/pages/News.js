import React from "react";
import { news } from "../data/news";
import "./news.css";

function News() {
  return (
    <div className="news">
      {news.map((i) => {
        return (
          <>
            <h1>{i.headline}</h1>
            <p>{i.body}</p>
            <hr />
          </>
        );
      })}
    </div>
  );
}

export default News;
