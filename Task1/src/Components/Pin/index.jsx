import React from "react";
import PinItem from "../PinItem";

class Pin extends React.Component {
  constructor(props) {
    super(props);
    this.values = new Array(props.length).fill("");
    this.elements = [];
  }
  handleChange = (value, i) => {
    const { length } = this.props;
    this.values[i] = value;
    if (value.length > 3 && i < length - 1) {
      this.elements[i + 1].input.focus();
    }

    this.props.onChange(this.values.join(""));
  };
  onBackspace = (index, e) => {
    if (index > 0) {
      this.elements[index - 1].input.focus();
    }
    this.props.onChange(this.values.join(""));
  };
  handlePaste = (e) => {
    e.preventDefault();
    let val = e.clipboardData
      .getData("Text")
      .match(/.{1,4}/g)
      .filter((_, i) => i < this.props.length);
    val.forEach((value, i) => {
      this.values[i] = value;
      this.elements[i].input.value = value;
      if (i < this.props.length - 1) {
        this.elements[i + 1].input.focus();
      }
    });
    this.props.onChange(this.values.join(""));
  };
  render() {
    return (
      <div style={{display:"flex"}} onPaste={this.handlePaste}>
        {this.values.map((item, i) => (
          <PinItem
            key={i}
            ref={(n) => (this.elements[i] = n)}
            onChange={(v) => this.handleChange(v, i)}
            onBackspace={(e) => this.onBackspace(i, e)}
          />
        ))}
      </div>
    );
  }
}

export default Pin;
