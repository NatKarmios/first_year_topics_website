import React from "react";

const BASE_OPACITY = 0.6;

class Cover extends React.Component {
  constructor(props) {
    super(props);
    this.state = {percentage: 0.0};
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
    window.addEventListener("resize", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
    window.removeEventListener("resize", this.handleScroll);
  }

  handleScroll = () => {
    const scroll = window.scrollY;
    const height = window.innerHeight;
    const ratio = Math.min((scroll / height), 1);
    this.setState({percentage: ratio})
  };

  render() {
    return (
      <div
        id="cover"
        style={{backgroundColor: `rgba(0, 0, 0, ${BASE_OPACITY + (1-BASE_OPACITY)*this.state.percentage})`}}
      />
    );
  }
}

export default Cover;