import React from "react";

const Mentions: React.FC<IMentionProps> = () => {
  return (
    <div id="mentions">
      {/* {chirps.map((chirp: IMention) => {
        return (
          <div className="card shadow" key={`${chirp.id}-${chirp.userid}`}>
            <div className="card-body">
                <h5 className="card-title border-bottom rounded">
                  {chirp.name}
                </h5>
              <p className="card-text">{chirp.content}</p>
            </div>
            <div className="card-footer d-flex justify-content-between">
              <span>{chirp.time.slice(0, 10)}</span>
            </div>
            <button className="btn btn-sm btn-outline-warning">
                  Return
            </button>
          </div>
        );
      })} */}
    </div>
  )
};

interface IMentionProps {}

interface IMention {}

export default Mentions;
