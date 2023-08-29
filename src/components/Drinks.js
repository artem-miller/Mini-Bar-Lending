import React from "react";
import Drink from "./Drink";

class Drinks extends React.Component {
  drinks = this.props.drinks;
  
  render() {
    return (
      <div className="drinks">
        { this.drinks.map((drink) => (
          <Drink title={ drink.title } text={ drink.text } src={ drink.src } textClass={ drink.textClass } />
        )) }
      </div>
    );
  }
}

export default Drinks;