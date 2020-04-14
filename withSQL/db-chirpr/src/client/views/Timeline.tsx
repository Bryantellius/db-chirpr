import React, { useState, useEffect } from "react";
import {
  NavLink,
  Switch,
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import type { IChirp } from "../utils/types";
import Mentions from "./Mentions";

const Timeline: React.FC<ITimelineProps> = () => {
  const [chirps, setChirps] = useState<IChirp[]>([]);

  const getChirps = async () => {
    let res = await fetch(`/api/chirps`);
    let chirps = await res.json();
    setChirps(chirps);
  };

  useEffect(() => {
    getChirps();
  }, []);

  return (
    <div id="timeline">
      <h3>Timeline</h3>
      {chirps.map((chirp: IChirp) => {
        return (
          <div className="card shadow my-1" key={`${chirp.id}-${chirp.userid}`}>
            <div className="card-body">
              <NavLink
                to={`/${chirp.userid}/mentions`}
                className="nav-link text-dark"
              >
                <h5 className="card-title border-bottom rounded">
                  {chirp.name}
                </h5>
              </NavLink>
              <p className="card-text">{chirp.content}</p>
            </div>
            <div className="card-footer d-flex justify-content-between">
              <span>{chirp.time.slice(0, 10)}</span>
              <NavLink to={`/${chirp.id}/admin`}>
                <button className="btn btn-sm btn-outline-warning">
                  Admin Options
                </button>
              </NavLink>
            </div>
          </div>
        );
      })}
    </div>
  );
};

interface ITimelineProps {}

export default Timeline;
