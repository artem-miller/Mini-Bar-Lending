import React, { useSyncExternalStore } from "react";

class Header extends React.Component {
  images = this.props.images;
  size = this.props.size;

  render() {
    return (
      <div className="header">
        <div className="header__title">
          <h1>МИНИ-БАР</h1>
          <div>
            <a href="/">Mini-Bar</a>
          </div>
        </div>
        <div className="images-rotate">
          { this.images.map((image) => (
            <img className={ image.className } src={ image.src  } alt=""  width={ this.size } height={ this.size } />
          ))}
        </div>
      </div>
    );
  }
}

export default Header;