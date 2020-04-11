import React from "react";
import { useState, useEffect } from "react";
import type { IChirp } from "../utils/types";

const Main: React.FC<IMainProps> = () => {
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
      {chirps.map((chirp: IChirp) => {
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
      })}
    </div>
  );
};

interface IMainProps {}

export default Main;
