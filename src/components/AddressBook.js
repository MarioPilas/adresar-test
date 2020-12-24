import React, { Component } from "react";
import {  Menu } from "semantic-ui-react";
import { connect } from "react-redux";
import SortFilter from "./SortFilter";
import { Button } from "semantic-ui-react";
import { Link } from "react-router-dom";
import "../css/Header.css";

const mapStateToProps = state => ({
  addresses: state.test
});
class AddressBook extends Component {
  render() {
    const { addresses } = this.props;

    return (
        <div>
          <div className='ui secondary pointing menu'>
            
          <h1 className='head'>Adresar</h1>
          
            <div className='right menu'>
              <button className="ui red button">
            <Link to='/' className='item'>
              Log out
            </Link>
            </button>
            
            </div>
          </div>
          
      <Menu size="massive" vertical>
       
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
