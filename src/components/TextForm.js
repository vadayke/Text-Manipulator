import React, { useState } from 'react'

export default function TextForm
    (props) {
    

    const handleUpClick = () => {
        //console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();

        setText(newText)
    }

    const handleLowClick = ()=>{
        let newText = text.toLowerCase();
        setText(newText)
    }

    const handleOnChange = (event) => {
        //console.log("On change");
        setText(event.target.value)
    }

    const handleCopy = () => {
        console.log("I am a copy");
        var text =document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
    }

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
    }

    const onAlternatingCase = () => {
        let newtext = ""
        for (let index = 0; index < text.length; index++) {
            if ((index % 2) === 0) {
                newtext += text[index].toLowerCase()
            }
            else {
                newtext += text[index].toUpperCase()
            }

        }
        setText(newtext)
    }

    

    const reverseText = () => {
        let newText = text.split('').reverse().join('');
        setText(newText);
    }

    const firLetterUp = () => {
        let newText = text.split(" ");
        let finalArr = []
        newText.forEach((element) => {
          let afterUp = element[0].toUpperCase();
          afterUp = afterUp.concat(element.substring(1))
          finalArr.push(afterUp);
        })
        setText(finalArr.join(" "));
      }

      const handleFindAndReplace = () =>{
        let find = document.getElementById("find").value;
        let replace = document.getElementById("replace").value;
        let newText = text.replaceAll(find,replace);
        setText(newText);
    }




    const [text, setText] = useState('Enter text here');
    //setText("new text");
    return (
        <>
            <div className="container">
                <h1>{props.heading}</h1>
                <div className="mb-3">

                    <textarea className="form-control" value={text} onChange={handleOnChange} rows="8" id="myBox"></textarea>
                </div>
                <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
                <button className="btn btn-primary mx-2" onClick={handleLowClick}>Convert to Lowercase</button>
                <button className="btn btn-primary mx-2" onClick={handleOnChange}>clear</button>
                <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy</button>
                <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
                <button className="btn btn-primary mx-2" onClick={onAlternatingCase}>onAlternatingCase</button>
                <button className="btn btn-primary mx-2" onClick={reverseText}>reverseText</button>
                <button className="btn btn-primary mx-2" onClick={firLetterUp}>firstLetterUp</button>
                
            </div>
            <div className="container" my-3>
                <h2>Your text summary here </h2>
                <p> {text.split(" ").length} words and {text.length} characters</p>
                <p>{0.008* text.split(" ").length} minutes reading time </p>
               
                <h2>{text}</h2>
            </div>

            <div className="container my-3">
            <h4>Find and Replace the text</h4>
            <input type="text" className="form-control my-2" placeholder="Enter the text you want to change" id="find"/>
            <input type="text" className="form-control mb-2" placeholder="Enter the new text you want to add" id="replace"/>
            <button className="btn btn-primary mb-3 mx-1" onClick={handleFindAndReplace}>Replace</button>
        </div>

        </>
    )
}
