import React, { Component } from "react";
import { Segment, Form, Button, Header } from "semantic-ui-react";
import { create, update, deletee } from "../actions";
import cuid from "cuid";
import { connect } from "react-redux";
import { reduxForm, Field } from "redux-form";
import TextInput from "./TextInput";
import { isRequired, combineValidators } from "revalidate";

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
  phone: isRequired({ message: "Molimo unesite broj mobitela" }),
  email: isRequired({ message: "Molimo unesite email" })
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
      <Segment>
        <Form onSubmit={this.props.handleSubmit(this.onFormSubmit)}>
          
          <Field
            name="fName"
            type="text"
            component={TextInput}
            placeholder="Unesite Ime"
            autoComplete='none'
          />
          <Field
            name="lName"
            type="text"
            component={TextInput}
            placeholder="Unesite Prezime"
            autoComplete='none'
          />
          <Field
            name="phone"
            type="text"
            component={TextInput}
            placeholder="Unesite broj mobitela"
            autoComplete='none'
          />
          <Field
            name="email"
            type="text"
            component={TextInput}
            placeholder="Unesite email"
            autoComplete='none'
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
          <Button
            type="secondary button"
            content="Vrati se"
            color="grey"
          />
        </Form>
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
