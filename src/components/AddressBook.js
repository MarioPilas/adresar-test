import React, { Component } from "react";
import {  Menu, Header } from "semantic-ui-react";
import { connect } from "react-redux";
import SortFilter from "./SortFilter";
import { Button } from "semantic-ui-react";
import { Link } from "react-router-dom";

const mapStateToProps = state => ({
  addresses: state.test
});
class AddressBook extends Component {
  render() {
    const { addresses } = this.props;

    return (
        <div>
          <div className='ui secondary pointing menu'>
            <div className='right menu'>
            <Link to='/' className='item'>
              Log out
            </Link>
            </div>
          </div>
            
      <Menu size="massive" vertical>
        <Header
          icon="user"
          attached
          inverted
          color="grey"
          content="Adresar"
        />
        <Button
          as={Link}
          to="/adresar/omiljeni"
          color="yellow"
          content="Omiljeni" 
        />
        <Button
          as={Link}
          to="/adresar/dodaj"
          color="green"
          floated="right"
          content="Dodaj"
        />
        <SortFilter addresses={addresses} />
      </Menu>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  null
)(AddressBook);
