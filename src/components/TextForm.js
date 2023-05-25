import React, {useState} from 'react'
import PropTypes from 'prop-types'


export default function TextForm(props) {
  const [text,setText] = useState('');
  const [caps,setCaps] = useState('');
//   const [words,setWords] = useState('');
//   const [char,setChar] = useState('');
  const handleUpclick = ()=>{
    console.log("Up Case was Clicked")
    const caps = text.toUpperCase();
    // const words = text.split(" ").length;
    // const char = text.length;
    // setWords(words)
    // setChar(char)
    setCaps(caps)
  }
  const handleOnChange = (event)=>{
    setText(event.target.value)
  } 
  return (
    <div>
        <div className="mb-3">
        <h2>{props.heading}</h2>
        <textarea className="form-control" value={text} placeholder="Enter Text Here"onChange={handleOnChange}id="mybox" rows="12"></textarea>
        </div>
        <button className="btn btn-outline-info" onClick={handleUpclick}>Convert to Upper Case</button>
        <p>Here is the capitialized text: {caps}</p>
        <p>Here is the Text Summary: Words:{text.split(" ").length} Characters:{text.length}</p>
    </div>
  )
}

TextForm.propTypes = {heading: PropTypes.string}