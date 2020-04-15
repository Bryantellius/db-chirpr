import React, { useState, useEffect } from "react";
import { RouteComponentProps, NavLink } from "react-router-dom";
import { IMention } from "../utils/types";

const Mentions: React.FC<IMentionProps> = (props) => {
  // Scrolls view of mentions div into window
  setTimeout(() => document.getElementById("title").scrollIntoView(), 10);

  const [mentions, setMentions] = useState<IMention[]>([]);

  const getMentions = async () => {
    let res = await fetch(`/api/mentions/${props.match.params.id}`);
    let mentions = await res.json();
    setMentions(mentions[0]);
  };

  useEffect(() => {
    getMentions();
  }, [props.match.params.id]);

  // Condition renders depending on length of mentions array
  // If array is empty, displays no mentions, else displays mentions in cards
  if (mentions.length === 0) {
    return (
      <>
        <NavLink to="/">
          <button className="btn btn-sm btn-outline-warning my-1">
            Return
          </button>
        </NavLink>
        <h5 className="text-center">The user has no mentions :(</h5>
      </>
    );
  } else {
    return (
      <div>
        <NavLink to="/">
          <button className="btn btn-sm btn-outline-warning my-1">
            Return
          </button>
        </NavLink>
        <h3 className="text-center">User Mentions</h3>
        {mentions.map((mention: IMention) => {
          return (
            <div
              className="card shadow my-1"
              key={`${mention.name}-${mention.id}`}
            >
              <div className="card-body">
                <h5 className="card-title border-bottom rounded">
                  {mention.name}
                </h5>
                <p className="card-text">{mention.content}</p>
              </div>
              <div className="card-footer d-flex justify-content-end">
                <span>{mention.time.slice(0, 10)}</span>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
};

interface IMentionProps extends RouteComponentProps<{ id: string }> {}

export default Mentions;
