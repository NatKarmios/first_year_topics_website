import React from "react";

const randInt = (lower, upper) => Math.floor(Math.random() * (upper - lower)) + lower;

class Em extends React.Component {
  constructor(props) {
    super(props);
    const r = randInt(128, 255);
    const g = randInt(128, 255);
    const b = randInt(128, 255);
    this.color = `rgb(${r}, ${g}, ${b})`
  }

  render() {
    let {children, i=false, b=false} = this.props;
    let result = <span style={{color: this.color}}>{children}</span>;
    if (i)
      result = <i>{result}</i>;
    if (b)
      result = <b>{result}</b>;
    return result
  }
}

export default Em;