import React from "react";
import { useState, useEffect } from "react";
import { RouteComponentProps } from "react-router-dom";

const EditChirp: React.FC<IEditProps> = (props) => {
  setTimeout(() => document.getElementById("title").scrollIntoView(), 10);

  const [name, setName] = useState<string>("");
  const [userid, setUserid] = useState<string>("");
  const [content, setContent] = useState<string>("");

  useEffect(() => {
    const getChirp = async () => {
      let res = await fetch(`/api/chirps/${props.match.params.id}`);
      let chirp = await res.json();
      setName(chirp.name);
      setUserid(chirp.userid);
      setContent(chirp.content);
    };
    getChirp();
  }, [props.match.params.id]);

  const saveEdit = async () => {
    let editedChirp = {
      userid,
      content,
    };

    await fetch(`/api/chirps/${props.match.params.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(editedChirp),
    });
    history.back();
  };

  const deleteChirp = async () => {
    await fetch(`/api/chirps/${props.match.params.id}`, {
      method: "DELETE",
    });
    history.back();
  };

  return (
    <div className="card p-2 d-flex flex-column align-items-stretch">
      <h1 id="edit">Edit Chirp</h1>
      <div className="form-group">
        <input
          value={name}
          type="text"
          className="form-control"
          id="editAuthor"
          disabled
        ></input>
      </div>
      <div className="form-group">
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="form-control"
          id="editBody"
        ></textarea>
      </div>
      <div className="d-flex flex-row justify-content-between">
        <button className="btn btn-outline-success" onClick={saveEdit}>
          Update
        </button>
        <button className="btn btn-outline-warning" onClick={deleteChirp}>
          Delete
        </button>
      </div>
    </div>
  );
};

interface IEditProps extends RouteComponentProps<{ id: string }> {}

export default EditChirp;
