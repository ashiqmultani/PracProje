import React, { useState } from 'react';
export default function Textform(props) {
  const [text, setText] = useState('');
  const [replacement, setReplacement] = useState('');
  // const [style, setStyle] = useState({
  //   color: 'black',
  //   backgroundColor: 'white'
  // });

  const onClickHandle = () => {
    setText(text.toUpperCase());
    if(text.length>0){
      props.showAlert("Converted to UpperCase!" ,"Success")
    }
  };

  const onClickLowHandle = () => {
    setText(text.toLowerCase());
    if(text.length>0){
      props.showAlert("Converted to LowerCase!" ,"Success")
    }
  };

  const onClickClearHandle = () => {
    setText('');
    if(text.length>0)
    props.showAlert("Clean the Text!" ,"Success")
  };

  const onClickReplaceHandle = () => {
    setText(text.replace(/\b\w+\b/, replacement));
    if(text.length>0)
    props.showAlert("Text has been Replace!" ,"Success")
  };

  const onChangeHandle = (event) => {
    setText(event.target.value);
    
  };

  const onChangeReplacementHandle = (event) => {
    setReplacement(event.target.value);
  };

  // const onClickChangeColor = () => {
  //   setStyle((prevStyle) => ({
  //     color: prevStyle.color === 'black' ? 'white' : 'black',
  //     backgroundColor: prevStyle.backgroundColor === 'white' ? 'black' : 'white'
  //   }));
  // };

  return (
    <div className="container my-3">
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <label htmlFor="textArea" className="form-label">Enter the text to analyze</label>
        <textarea
          className="form-control"
          value={text}
          onChange={onChangeHandle}
          id="textArea"
          rows="3"
        ></textarea>
      </div>
      <div className="row mb-3">
        <div className="col">
          <button className="btn btn-primary w-100 my-1" onClick={onClickHandle}>Convert to UpperCase</button>
        </div>
        <div className="col">
          <button className="btn btn-primary w-100 my-1" onClick={onClickLowHandle}>Convert to LowerCase</button>
        </div>
        <div className="col">
          <button className="btn btn-primary w-100 my-1" onClick={onClickClearHandle}>Clear</button>
        </div>
        <div className="col">
          <button className="btn btn-primary w-100 my-1" onClick={onClickReplaceHandle}>Replace Word</button>
        </div>
      </div>
      <div className="mb-3">
        <label htmlFor="replacementInput" className="form-label">Replacement text</label>
        <input
          type="text"
          value={replacement}
          onChange={onChangeReplacementHandle}
          className="form-control"
          id="replacementInput"
          placeholder="Replacement text"
        />
      </div>
      <div className="container my-3">
        <h1>Character and Words Count</h1>
        <p>Total Characters: {text.trim().length} and Total Words: {text.trim().split(/\s+/).filter(word => word.length > 0).length}</p>
        <h1>Time need to read : </h1>
        <p>Time is : {text.length * 0.05}</p>

        <h1>Preview</h1>
        <p>{text.length > 0 ? text : "Enter something in the above textbox to preview it"}</p>
      </div>
      <div>
        {/* <button className="btn btn-primary my-2" onClick={onClickChangeColor}>
          {style.backgroundColor === 'white' ? 'Enable Dark Mode' : 'Disable Dark Mode'}
        </button> */}
      </div>
    </div>
  );
}
