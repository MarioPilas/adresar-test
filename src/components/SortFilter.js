import React, { Component } from "react";
import { Input } from "semantic-ui-react";
import Filter from "./Filter";

class SortFilter extends Component {
  constructor(props) {
    super(props);
    let sortedAddrBook = this.props.addresses.sort(function(a, b) {
      if (a.fName < b.fName) {
        return -1;
      }
      if (a.fName > b.fName) {
        return 1;
      }
      return 0;
    });
    this.state = {
      Addresses: sortedAddrBook,
      searchField: ""
    };
  }

  onSearchChange = event => {
    this.setState({ searchField: event.target.value });
  };

  handleUpdate = event => {
    this.props.delete(event);
  };

  render() {
    const { Addresses, searchField } = this.state;
    const filteredAddresses = Addresses.filter(Address => {
      return Address.fName.toLowerCase().includes(searchField.toLowerCase());
    });
    return (
      <div>
        <Input
          onChange={this.onSearchChange}
          fluid
          icon="search"
          placeholder="Pretrazi..."
          width="120px"
        />
        {filteredAddresses &&
          filteredAddresses.map((address, index) => (
            <Filter address={address} key={index} />
          ))}
      </div>
    );
  }
}
export default SortFilter;