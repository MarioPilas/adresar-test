import React from "react";
import { Menu } from "semantic-ui-react";
import { Link } from "react-router-dom";

const Filter = ({ address, index }) => {
  return (
    <Menu.Item key={index} as={Link} to={`/adresar/detalji/${address.id}`}>
      {address.fName + "  " + address.lName}
    </Menu.Item>
  );
};

export default Filter;