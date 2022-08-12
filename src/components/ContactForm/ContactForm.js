import { Component } from "react";
import PropTypes from "prop-types";
import { Form, Label, Input, Button } from "./ContactForm.styled";

 class ContactForm extends Component {
  state = {
     name: "", 
     number: "" 
    };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.submitForm(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({ name: "", number: "" });
  };

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Label htmlFor="contact_name">Name</Label>
        <Input
          onChange={this.handleChange}
          id="contact_name"
          type="text"
          name="name"
          value={this.state.name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <Label htmlFor="contact_number">Number</Label>
        <Input
          onChange={this.handleChange}
          value={this.state.number}
          id="contact_number"
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
        <Button type="submit"> Add contact</Button>
      </Form>
    );
  }
}



ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default ContactForm