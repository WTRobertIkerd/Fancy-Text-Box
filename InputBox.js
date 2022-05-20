import React from "react"
import "./InputBox.css"

export default class InputBox extends React.Component {
  constructor(props) {
    super(props)

    this.state={
      toggled: false,
      labelClass: "IB-label off",
      borderColor: this.props.blurColor,
      textColor: this.props.blurTextColor,
      fontSize: this.props.fontSize,
      transitionType: "ease-in-out",
      transitionDuration: ".15s"
    }
  }

  toggle = (e) => {
    if(this.state.labelClass === "IB-label off") {
      this.setState({ labelClass: "IB-label on", fontSize: ".8em", textColor: this.props.focusTextColor, borderColor: this.props.focusColor })
    } else if(e.target.value === "") {
      this.setState({ labelClass: "IB-label off", fontSize: this.props.fontSize, textColor: this.props.blurTextColor, borderColor: this.props.blurColor })
    }
  }

  render() {
    if(this.props.transitionType !== undefined && this.state.transitionType !== this.props.transitionType) {
      this.setState({ transitionType: this.props.transitionType })
    }
    if(this.props.transitionDuration !== undefined && this.state.transitionDuration !== this.props.transitionDuration) {
      this.setState({ transitionDuration: this.props.transitionDuration })
    }
    return (
      <div className="IB-container" style={{ width: this.props.width, height: this.props.height }}>
        <div className={this.state.labelClass} style={{ color: this.state.textColor, fontSize: this.state.fontSize, backgroundColor: this.props.backgroundColor, transitionTimingFunction: this.state.transitionType, transitionDuration: this.state.transitionDuration  }}>
          {this.props.name}
        </div>
        <input className="IB-input" style={{ borderColor: this.state.borderColor }}
          onFocus={this.toggle}
          onBlur={this.toggle}
          onChange={this.props.onChange}
        />
      </div>
    )
  }
}