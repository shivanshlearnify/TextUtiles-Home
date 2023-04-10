

import React, { useState } from "react";

export default function (props) {
  const handleUpClick = () => {
    // console.log("uppercase was clicked");
    let newText = text.toLocaleUpperCase();
    setText(newText);
    props.showAlert("converted to UpperCase", "success");
  };
  const handleLowClick = () => {
    // console.log("uppercase was clicked");
    let newText = text.toLocaleLowerCase();
    setText(newText);
    props.showAlert("converted to LowerCase", "success");
  };
  const handleClearClick = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Text cleared", "success");
  };
  const handleExtraSpace = () => {
    let newText = text.split(/[  ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra Space Removed", "success");
  };

  const handleCopy = () => {
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Text Copied", "success");
  };
  const handleOnChange = (event) => {
    // console.log("on change");
    setText(event.target.value);
  };
  const [text, setText] = useState("");
  return (
    <>
      <div className="container" style = {{ color : props.mode ==='dark'?'white':'black' }}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            style = {{ backgroundColor : props.mode ==='dark'?'grey':'white' , color : props.mode ==='dark'?'white':'black' }}
            id="myBox"
            rows="10"
          ></textarea>
        </div>
        <button
          type="button"
          className="btn btn-primary mx-2"
          onClick={handleUpClick}
        > 
          Convert To UpperCase
        </button>
        <button
          type="button"
          className="btn btn-primary mx-2"
          onClick={handleLowClick}
        >
          Convert To LowerCase
        </button>
        
        <button
          type="button"
          className="btn btn-primary mx-2"
          onClick={handleCopy}
        >
          copy text
        </button>
        <button
          type="button"
          className="btn btn-primary mx-2"
          onClick={handleExtraSpace}
        >
          Remove Extra Spaces
        </button>
        <button
          type="button"
          className="btn btn-primary mx-2"
          onClick={handleClearClick}
        >
          Clear text
        </button>
      </div>
      <div className="container"style = {{ color : props.mode ==='dark'?'white':'black' }}>
        <h1>Your Text Summary</h1>
        <p>
          {" "}
          {(text.split(" ").length-1)} Words and {text.length} Character
        </p>
        <p> {0.008 * ((text.split(" ").length)-1)} Minutes To Read </p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Enter your text in above textarea to preview it here"}</p>
      </div>
  
    </>
  );
}