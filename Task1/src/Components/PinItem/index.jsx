import React from "react";

const style = {
  padding: 10,
  width:"50%",
  fontSize: 14,
  margin: 1,
  border:"none",
  borderRadius: "15px",
};

class PinItem extends React.Component {
  focus = () => {
    this.input.focus();
  };

  onChange = (e) => {
    this.props.onChange(e.target.value);
  };

  handleKeyDown = (e) => {
    if (e.keyCode === 8 && !this.input.value) {
      this.props.onBackspace(e);
    }
  };

  render() {
    const styles = { ...style };
    return (
      <div>
        <input
          ref={(n) => (this.input = n)}
          maxLength={4}
          onKeyDown={this.handleKeyDown}
          onChange={this.onChange}
          style={styles}
        />
      </div>
    );
  }
}

export default PinItem;
