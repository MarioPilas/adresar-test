import React, { Component } from "react";
import { Segment, Form, Button } from "semantic-ui-react";
import { create, update, deletee } from "../actions";
import cuid from "cuid";
import { connect } from "react-redux";
import { reduxForm, Field } from "redux-form";
import TextInput from "./TextInput";
import { isRequired, combineValidators } from "revalidate";
import { Link } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => {
  const addressId = ownProps.match.params.id;
  let address = {};
  if (addressId && state.test.length > 0) {
    address = state.test.filter(addr => addr.id === addressId)[0];
  }
  return {
    initialValues: address
  };
};

const actions = {
  create,
  update,
  deletee
};
const validate = combineValidators({
  fName: isRequired({ message: "Molimo unesite Ime" }),
  lName: isRequired({ message: "Molimo unesite Prezime" }),
  mobile: isRequired({ message: "Molimo unesite broj mobitela" }),
  phone: isRequired({ message: "Molimo unesite broj telefona" }),
  email: isRequired({ message: "Molimo unesite email" }),
  date: isRequired({ message: "Molimo unesite datum rodenja" })
});

class AddressBook extends Component {
  onFormSubmit = values => {
    if (this.props.initialValues.id) {
      this.props.update(values);
      this.props.history.goBack();
    } else {
      const newAddress = {
        ...values,
        id: cuid()
      };
      this.props.create(newAddress);
      this.props.history.goBack();
    }
  };
  handleDelete = () => {
    const id = this.props.initialValues.id;
    this.props.deletee(id);
    this.props.history.push("/adresar");
  };
  render() {
    const { invalid, submitting, pristine } = this.props;
    return (
      <Segment className="ui left floated segment">
        <Form onSubmit={this.props.handleSubmit(this.onFormSubmit)}>
          
          <Field
            name="fName"
            type="text"
            component={TextInput}
            placeholder="Unesite Ime"
            autoComplete='off'
          />
          <Field
            name="lName"
            type="text"
            component={TextInput}
            placeholder="Unesite Prezime"
            autoComplete='off'
          />
           <Field
            name="mobile"
            type="text"
            component={TextInput}
            placeholder="Unesite broj mobitela"
            autoComplete='off'
          />
          <Field
            name="phone"
            type="text"
            component={TextInput}
            placeholder="Unesite broj telefona"
            autoComplete='off'
          />
          <Field
            name="email"
            type="text"
            component={TextInput}
            placeholder="Unesite email"
            autoComplete='off'
          />
           <Field
            name="date"
            type="date"
            component={TextInput}
            placeholder="Unesite datum rodenja"
            autoComplete='off'
          />

          <Button
            positive
            type="submit"
            disabled={invalid || submitting || pristine}
          >
            Potvrdi
          </Button>
          <Button
            onClick={this.handleDelete}
            type="button"
            disabled={invalid || submitting}
            content="Obrisi"
            color="red"
          />
        </Form>
        <Button
            type="secondary button"
            content="Vrati se"
            color="grey"
            as={Link}
            to="/adresar"
          />
      </Segment>
    );
  }
}
export default connect(
  mapStateToProps,
  actions
)(
  reduxForm({ form: "addressBook", enableReinitialize: true, validate })(
    AddressBook
  )
);
