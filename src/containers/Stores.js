import React from "react";
import mockData from "../data/mockData.json";
import Store from "../components/Store";

class Stores extends React.Component {
  render() {
    console.log(mockData);
    const data = mockData.data;
    return (
      //should i be defining a list as a constant with a key using li and then ul?
      <ul>
        {data.map((store) => (
          <Store key={store.name} name={store.name} address={store.address} />
        ))}
      </ul>
    );
  }
}

export default Stores;
