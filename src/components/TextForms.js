import React, { useState } from "react";

export default function TextForms(props) {
    const [text, setText] = useState("");

    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Upper Case : Success")
    };
    
    const handleloClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lower Case : Success")
    };
    const handleclearClick = () => {
        let newText = '';
        setText(newText);
        props.showAlert("Text Cleared : Success")
    };
    const handleCopy =()=>{
        let text = document.getElementById("myBox")
        text.select();
        navigator.clipboard.writeText(text.value)
        props.showAlert("Copied to Clipboard : Success")
    }
    const handleExtraSpaces=()=>{
        let newText=text.split(/[ ]+/)
        setText(newText.join(" "))
        props.showAlert("Extra Spaces Removed : Success")
    }
    const handleOnChange = (event) => {
        setText(event.target.value);
    };
    return (
        <>
        <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} style={{backgroundColor:props.mode==='dark'?'#080f26':'white' , color:props.mode==='dark'?'white':'black' }} onChange={handleOnChange} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-1" onClick={handleUpClick}>
                Convert to UpperCase
            </button>
            <button className="btn btn-primary mx-1" onClick={handleloClick}>
                Convert to LowerCase
            </button>
            <button className="btn btn-primary mx-1" onClick={handleclearClick}>
                Clear Text
            </button>
            <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>
                Remove Extra Spaces
            </button>
            <button className="btn btn-primary mx-1" onClick={handleCopy}>
                Copy Text
            </button>
        </div>

        <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
            <h1>Text Summary</h1>
            <p>{text.split(" ").length} Words and {text.length} Characters</p>
            <h3>Time to Read: </h3><p>  {0.008 * text.split(" ").length} </p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Enter Something To Prewiew- "}</p>
        </div>

        </>
    );
}
