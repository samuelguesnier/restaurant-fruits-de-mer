import React from "react";
import { getFunName } from "../helpers";

class StorePicker extends React.Component {
  constructor() {
    super();
    this.goToStore = this.goToStore.bind(this);
  }
  myInput = React.createRef();

  goToStore(event) {
    event.preventDefault();
    const storeName = this.myInput.current.defaultValue;
    this.props.history.push(`/store/${storeName}`);
  }

  render() {
    return (
      <form className="store-selector" onSubmit={this.goToStore}>
        <h2>Please enter a store</h2>
        <input
          type="text"
          required
          placeholder="Store name"
          defaultValue={getFunName()}
          ref={this.myInput}
        />
        <button type="submit">Go -></button>
      </form>
    );
  }
}

export default StorePicker;
