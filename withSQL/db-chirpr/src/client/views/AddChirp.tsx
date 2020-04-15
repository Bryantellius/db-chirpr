import React from "react";
import { useState } from "react";

const AddChirp: React.FC<IAddProps> = (props) => {
  // Scrolls view to align form in window
  setTimeout(() => document.getElementById("title").scrollIntoView(), 10);

  const [content, setContent] = useState<string>("");

  // Function that is activated onClick that posts new chirp to db
  const post = () => {
    let user = document.getElementsByTagName("select")[0].value;
    let chirp = {
      userid: user,
      content,
    };

    fetch(`/api/chirps`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(chirp),
    });
    history.back();
  };

  return (
    <div className="card p-2 d-flex flex-column align-items-center">
      <h1>Add Chirp</h1>
      <div className="form-group">
        <h5>
          <u>Character:</u>
        </h5>
        <select className="custom-select" id="userSelect">
          <option value="1">Mario</option>
          <option value="2">Luigi</option>
          <option value="3">Peach</option>
          <option value="4">Daisy</option>
          <option value="15">Wario</option>
          <option value="16">Waluigi</option>
          <option value="17">Toad</option>
          <option value="18">Bowser</option>
          <option value="19">King Boo</option>
          <option value="20">Donkey Kong</option>
        </select>
      </div>
      <div className="form-group">
        <h5>
          <u>Type Something!:</u>
        </h5>
        <textarea
          className="form-control"
          id="chirpBody"
          placeholder="Enter Text"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        ></textarea>
      </div>
      <button onClick={post} className="btn btn-outline-success">
        Post
      </button>
    </div>
  );
};

interface IAddProps {}

export default AddChirp;
