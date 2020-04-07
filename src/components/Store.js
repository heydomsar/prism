import React from "react";

class Store extends React.Component {
  render() {
    return (
      <li>
        {this.props.name}
        {this.props.address}
      </li>
    );
  }
}

export default Store;
