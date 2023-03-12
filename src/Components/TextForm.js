import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = () =>{
        console.log("Upper case is Clicked")
        setText(text.toUpperCase())
        props.showAlert("Converted to Uppercase", "Success")
    }
    const handleLowClick = () =>{
        console.log("Upper case is Clicked")
        setText(text.toLowerCase())
        props.showAlert("Converted to Lowercase", "Success")

    }
    const handleOnChange = (event) =>{
        setText(event.target.value);
    }
    const speak = () => {
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
        props.showAlert("Computer is speaking", "Success")

      }
    const [text, setText] = useState('');
  return (
    <>
    <div className='container' style = {{color: props.mode==='dark'? 'white':'black'}}>
        <h1>{props.heading}</h1>
    <div className="my-3">
    <textarea className="form-control" value={text} placeholder ="Enter text here..." onChange={handleOnChange} style = {{backgroundColor: props.mode==='dark'? 'gray':'white' , color: props.mode==='dark'? 'white':'black'}}  id="floatingTextarea" rows="8"></textarea>
  </div>
  <button className="btn btn-primary mx-2" onClick={handleUpClick}>Converet to UpperCase</button>
  <button className="btn btn-primary mx-2" onClick={handleLowClick}>Converet to LowerCase</button>
  <button className="btn btn-primary mx-2" onClick={speak}>Speak</button>
  </div>
<div className="container my-2" style = {{color: props.mode==='dark'? 'white':'black'}}>
    <h1>Your Text Summary</h1>
    <p>{(text.split(" ").length)-1} words and {text.length} Characters</p>
    <p>{0.008 * text.split(" ").length} Minutes read</p>
    <h2>Preview</h2>
    <p>{text}</p>
</div>
  </>
  )
}
