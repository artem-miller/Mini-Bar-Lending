import React from "react";

class Drink extends React.Component {
  title = this.props.title;
  text = this.props.text;
  imgSrc = this.props.src;
  textClass = this.props.textClass;

  render() {
    return (
      <div className="drink">
        <h1 className={ this.textClass  }>{ this.title }</h1>
        <div>
          <h2 className={ this.textClass }>{ this.text }</h2>
          <img src={ this.imgSrc } alt="" className="rotate--run" />
        </div>
      </div>
    );
  }
}

export default Drink;