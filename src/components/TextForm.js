import React, { useState } from "react";

export default function TextForm(props) {
    
  //convert to upper case
  const handleUpClick = () => {
    // console.log("button was clicked"+text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("text has been converted into the upper case","success")
    // console.log(setText)                                    
  };
  
//convert to lower case
const handleLowClick=()=>{
    let newText=text.toLowerCase()
    setText(newText)
    props.showAlert("text has been converted into the lower case","success")

}

//copying to clipboard
const handleCopy=()=>{
let newText=document.getElementById('myBox')
newText.select()
navigator.clipboard.writeText(newText.value)
props.showAlert("text has been ccopied into the clipboard","success")

}

//removing the extra spaces
const handleExtraSpace=()=>{
  let newText=text.split(/[ ]+/)
  setText(newText.join(" "))
  props.showAlert("extra spaces are removed from the text","success")

}





//on chnage handling in the textarea
  const handleOnChange = (event) => {
    // console.log("on change");
    setText(event.target.value);
  };
  const [text, setText] = useState("");

  return (
    <>
      <div className="container" style={{color: props.mode === 'dark' ? 'white':'#042743'}}>
        <h3>{props.heading} </h3>
        <div className="mb-3">
          <textarea
            className="form-control"
            placeholder="enter the text here"
            id="myBox"
            rows="8"
            value={text}
            onChange={handleOnChange}
            style={{backgroundColor: props.mode === 'dark' ? '#13466e':'white',
           color: props.mode === 'dark' ? 'white':'#042743'
          }}
          ></textarea>
        </div>

        <button disabled={text.length === 0} className="btn btn-outline-info mx-1 my-1" onClick={handleUpClick}>
          convert to upper case
        </button>
        <button  disabled={text.length === 0} className="btn btn-outline-info mx-1 my-1" onClick={handleLowClick}>
          convert to lower case
        </button>
        <button  disabled={text.length === 0} className="btn btn-outline-info mx-1 my-1" onClick={handleCopy}>
          copy text
        </button>
        <button  disabled={text.length === 0} className="btn btn-outline-info mx-1 my-1" onClick={handleExtraSpace}>
         remove extra spaces
        </button>
      </div>
      <div className="container my-4" style={{color: props.mode === 'dark' ? 'white':'#042743'}}>
        <h4>here is your text summary</h4>
        <p>your text consist of {text.split(" ").filter((elemet)=>{return elemet.length !== 0}).length} words and {text.length} characters</p>
        <p>time to read the text is {0.008 * text.split(" ").filter((elemet)=>{return elemet.length !== 0}).length }</p>
        <h3>preview</h3>
        <p>{text.length>0?text:"enter the words to preview"}</p>
      </div>
    </>
  );
}
