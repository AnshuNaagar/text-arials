import React, { useState } from "react";
import "./UpperSection.css";
import Button from "@mui/material/Button";



const UpperSection = (props) => {
  const [Text, setText] = useState("");
  const mainCanvas = (event) => {
    setText(event.target.value);
    document.body.style.transition = "all 0.3s ease";
  };
  const UpperCaser = () => {
    let newTexts = Text.toUpperCase();
    setText(newTexts);
    document.body.style.transition = "all 0.3s ease";
  };
  const LowerCaser = () => {
    let newTextsold = Text.toLowerCase();
    setText(newTextsold);
    document.body.style.transition = "all 0.3s ease";
  };
  const ClearCanvas = () => {
    let newText = "";
    setText(newText);
  };
  const handleExtraSpaces = () => {
    let newText = Text.split(/[ ]+/);
    setText(newText.join(" "));
  };
  return (
    <>
      
      <div className="container" id="upperContainer">
        <h1 className="my-5">{props.heading}</h1>
        <div className="form-floating">
          <textarea
            className="form-control"
            placeholder="Leave a comment here"
            id="floatingTextarea2"
            style={{ height: "200px" }}
            value={Text}
            onChange={mainCanvas}
          ></textarea>
          <label>Comments</label>
        </div>
        <div className="button">
          <Button
            variant="contained"
            id="btn_hover_effect"
            onClick={UpperCaser}
            color="success"
            className="my-5"
          >
            To upper case
          </Button>
          <Button
            id="btn_hover_effect"
            onClick={LowerCaser}
            variant="contained"
            color="primary"
            className="my-5 mx-1"
          >
            To lower case
          </Button>
          <Button
            id="btn_hover_effect"
            onClick={ClearCanvas}
            variant="contained"
            color="primary"
            className="my-5 mx-1"
          >
            Clear canvas
          </Button>
          <Button
            id="btn_hover_effect"
            onClick={handleExtraSpaces}
            variant="contained"
            color="primary"
            className="my-5 mx-1"
          >
            Remove extra space
          </Button>
        </div>
      </div>
      <section className="container" id="containertexts">
        <div className="container" id="preview">
          <h1 className="my-3">Preview</h1>
          <textarea
            className="form-control disabled"
            placeholder="Your preview is here"
            id="floatingTextarea2"
            style={{ height: "200px" }}
            value={Text}
          ></textarea>
          <div className="container my-5">
            <p>{Text.length < 0 ? Text : "Enter something to preview"}</p>
            <p>
              Your text contains {Text.length} letters and {Text.split.length}{" "}
              words{" "}
            </p>
            <p>Total time requires {Text.length * 0.08} to read</p>
          </div>
        </div>
      </section>
      <div className="container-fluid" id="footer">
        <div className="container" id="footer">
          <p>Under development</p>
          <p>Copyright under 1917 article . All rights reserved</p>
          <p className="disabled">Builded by anshu</p>
        </div>
      </div>
    </>
  );
};

export default UpperSection;
