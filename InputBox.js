import React from "react"
import "./InputBox.scss"

export default class InputBox extends React.Component {
  constructor(props) {
    super(props)

    this.state={
      toggled: false,
      labelClass: "IB-label off",
      borderColor: this.props.blurColor,
      textColor: this.props.blurTextColor,
      fontSize: this.props.fontSize,
    }
  }

  toggle = () => {
    if(this.state.labelClass === "IB-label off") {
      this.setState({ labelClass: "IB-label on", fontSize: ".8em", textColor: this.props.focusTextColor, borderColor: this.props.focusColor })
    } else {
      this.setState({ labelClass: "IB-label off", fontSize: this.props.fontSize, textColor: this.props.blurTextColor, borderColor: this.props.blurColor })
    }
  }

  render() {
    return (
      <div className="IB-container" style={{ width: this.props.width, height: this.props.height }}>
        <div className={this.state.labelClass} style={{ color: this.state.textColor, fontSize: this.state.fontSize, backgroundColor: this.props.backgroundColor }}>
          {this.props.name}
        </div>
        <input className="IB-input" style={{ borderColor: this.state.borderColor }}
          onFocus={this.toggle}
          onBlur={this.toggle}
          onChange={this.props.output()}
        />
      </div>
    )
  }
}