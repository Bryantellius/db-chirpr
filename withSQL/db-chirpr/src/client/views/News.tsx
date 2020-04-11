import React from 'react';
import { useState, useEffect } from "react";
import type { IHeadline } from "../utils/types";

const News: React.FC<INewsProps> = () => {
  const [headlines, setHeadlines] = useState<IHeadline[]>([]);

  const getHeadlines = async () => {
    let res = await fetch(`http://newsapi.org/v2/top-headlines?country=us&apiKey=e811d7812c3c469988e86dd711430d8a`);
    let headlines = await res.json();
    setHeadlines(headlines);
  };

  useEffect(() => {
    getHeadlines();
  }, []);

  console.log(headlines);


  return (
    <div id="timeline">
      {/* {headlines.map((headline: IHeadline) => {
        return (
          <div className="card" key={`${chirp.id}-${chirp.userid}`}>
            <div className="card-body">
              <h3 className="card-title border rounded">{chirp.name}</h3>
              <p className="card-text">{chirp.content}</p>
            </div>
            <div className="card-footer d-flex justify-content-between">
              <span>{chirp.time.slice(0, 10)}</span>
              <button className="btn btn-sm btn-outline-warning">
                Admin Options
              </button>
            </div>
          </div>
        );
      })} */}
    </div>
  );
};

interface INewsProps {}

export default News;