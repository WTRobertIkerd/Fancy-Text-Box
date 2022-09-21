import React, { useEffect, useState } from "react"
import "./InputBox.css"

export default function InputBox(props) {
  const [labelClass, setLabelClass] = useState("IB-label off")
  const [top, setTop] = useState(0)
  const [fontSize, setFontSize] = useState(props.fontSize)
  const [color, setColor] = useState(props.blurColor)

  const toggle = (e) => {
    console.log(e.target.value.length)
    if(labelClass === "IB-label off") {
      setLabelClass("IB-label on")
      setFontSize(props.fontSize * .7)
      setTop(-(props.fontSize * .7) / 2)
      setColor(props.focusColor)
    } else if(e.target.value.length === 0) {
      console.log("ran")
      setLabelClass("IB-label off")
      setFontSize(props.fontSize)
      setTop(0)
      setColor(props.blurColor)
    }
  }

  return (
    <div id="IB-container">
      <div 
        className={labelClass} 
        style={{ 
          color: color, 
          fontFamily: props.fontFamily, 
          top: top, 
          fontSize: fontSize,
          backgroundColor: props.parentBackgroundColor,
        }}
      >
        {props.name}
      </div>
      <input 
        {...props.register}
        className="IB-input" 
        style={{ 
          borderColor: color, 
          fontFamily: props.fontFamily, 
          height: props.height, 
          fontSize: props.fontSize,
          width: props.width
        }}
        onFocus={toggle}
        onBlur={toggle}
        type={props.type}
      />
    </div>
  )
}

InputBox.defaultProps = {
  type: "text",
  focusColor: "#86BBD8",
  blurColor: "#333",
  name: "Input Box",
  fontFamily: "Roboto, sans-serif",
  fontSize: 15,
  height: 20,
  width: 200,
  parentBackgroundColor: "white"
}