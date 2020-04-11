import React from "react";
import { useState, useEffect } from "react";
import type { IHeadline } from "../utils/types";

const News: React.FC<INewsProps> = () => {
  const [headlines, setHeadlines] = useState<IHeadline[]>([]);

  const getHeadlines = async () => {
    let res = await fetch(
      `http://newsapi.org/v2/top-headlines?country=us&apiKey=e811d7812c3c469988e86dd711430d8a`
    );
    let data = await res.json();
    let headlines: Array<IHeadline> = data.articles.map((item) => {
      return {
        title: item.title,
        source: item.source.name,
        url: item.url,
      };
    });
    setHeadlines(headlines.splice(0, 3));
  };

  useEffect(() => {
    getHeadlines();
  }, []);

  return (
    <div id="timeline">
      {headlines.map((headline: IHeadline) => {
        return (
          <div
            className="card"
            key={`${headline.source}-${headline.title.slice(0, 5)}`}
          >
            <div className="card-body">
              <h6 className="card-title border rounded">{headline.title}</h6>
              <p className="card-text">{headline.source}</p>
            </div>
            <div className="card-footer text-center">
              <button className="btn btn-sm btn-outline-info">
                <a href={headline.url} target="_blank">
                  Read
                </a>
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

interface INewsProps {}

export default News;
