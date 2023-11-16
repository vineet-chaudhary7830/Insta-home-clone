import React from 'react';
import { useState } from 'react';

export default function TextForm(props) {
    const hadleUpclick=()=>{
        setText(text.toUpperCase());
    }
    const handleOnchange=(event)=>{
        setText(event.target.value);
    }
    const hadledelclick=()=>{
       if(text!==''){
        setText("");
       }
    }
    const[text , setText] = useState("hello vineet");
  return (
    <div>
        <h1>{props.heading}</h1>
        <div class="mb-3">
<textarea className="form-control" value={text} onChange={handleOnchange} id="myBox" rows="5"></textarea>
</div>
<button className='btn btn-primary' onClick={hadleUpclick}>Convert to UpperCase</button>
<button className='btn btn-primary mx-2' onClick={hadledelclick}>Clear Text</button>
<div className='container'>
    <h1>Your text Summary</h1>
    <p>{text.split(" ").length} words, {text.length} charater</p>
</div>
    </div>
  )
}

