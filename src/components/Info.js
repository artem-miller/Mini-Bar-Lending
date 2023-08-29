import React from "react";

class Info extends React.Component {
  text = this.props.text;
  buttonText = this.props.buttonText;
  
  render() {
    return (
      <div className="info">
        <h1>
          { this.text }
        </h1>
        <button className="lime-button mt-10">{ this.buttonText }</button>
      </div>
    );
  }
}

export default Info;