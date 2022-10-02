import React, { useState } from "react";

export default function About(props) {
  // const [myStyle, setMystyle] = useState({
  //   backgroundColor: "white",
  //   color: "black",
  // });

let myStyle={
  color:props.mode === 'dark'? 'white':'#042743',
 backgroundColor:props.mode === 'dark'?'rgb(36 74 104)':'white',
}




  // const [btntext, setBtnText] = useState("enable dark mode");

  // const toggleStyle = () => {
  //   if (myStyle.color === "black") {
  //     setMystyle({
  //       backgroundColor: "black",
  //       color: "white",
  //     });
  //     setBtnText("enable light mode");
  //   } else {
  //     setMystyle({
  //       backgroundColor: "white",
  //       color: "black",
  //     });
  //     setBtnText("enable dark mode");
  //   }
  // };

  return (
    <div className="container" style={{color:props.mode === 'dark'? 'white':'#042743'}}>
      <h2>About Us</h2>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
              style={myStyle}
            >
              <strong>Analyze your text</strong>
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              textutiles gives you a way anlyze your text quickly and
              efficinently be it word count character count or
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
              style={myStyle}
            >
              <strong>Free to use </strong>
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              textutiles is a free character counter tool that provides instant
              character count and word count statistcs for a given text
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
              style={myStyle}
            >
              <strong>browser compactible</strong>
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              this word counter software works in any web browser such as chrome
              , firefox, internet explorer , safari ,opera . it suits to count
              character is facebook , blogs etc
            </div>
          </div>
        </div>
      </div>
      {/* <div className="container my-4 mb-4">
        <button type="button" class="btn btn-secondary" onClick={toggleStyle}>
          {btntext}
        </button>
      </div> */}
    </div>
  );
}
