import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Login.css';


class Login extends React.Component {
  constructor() {
  super();
  this.state = {
    input: {},
    errors: {}
  };
   
  this.handleChange = this.handleChange.bind(this);
  this.handleSubmit = this.handleSubmit.bind(this);
}
   
handleChange(event) {
  let input = this.state.input;
  input[event.target.name] = event.target.value;

  this.setState({
    input
  });
}
  
handleSubmit(event) {
  event.preventDefault();

  if(this.validate()){
      console.log(this.state);

      let input = {};
      input["name"] = "";
      input["email"] = "";
      this.setState({input:input});

      alert('Demo Form is submited');
  }
}

validate(){
    let input = this.state.input;
    let errors = {};
    let isValid = true;

    if (!input['name']) {
      isValid = false;
      errors['name'] = 'Unesite Lozinku';
    }
    
    if (!input["name"] !== 'undefined') {
      let patern = new RegExp(/^(?=.*\d.*\d)(?=.*[@$!%*?&#'()+,-./:;<=>[\]^_`{|}~"])[A-Za-z\d@$!%*?&#'()+,-./:;<=>[\]^_`{|}~"]{6,}/i);
      if(!patern.test(input['name']))
      isValid = false;
      errors["name"] = "Unesite ispravnu lozinku";
    }

    if (!input["email"]) {
      isValid = false;
      errors["email"] = "Unesite Korisnicko Ime";
    }

    if (typeof input["email"] !== "undefined") {
        
      var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
      if (!pattern.test(input["email"])) {
        isValid = false;
        errors["email"] = "Unesite ispravno Korisnicko ime";
      }
    }

    this.setState({
      errors: errors
    });

    return isValid;
}
   
render() {
  return (
    <div className=' ui form'>
      <div className='h'>Adresar</div>
      <form onSubmit={this.handleSubmit} className='login-form'>
        
        <div>
          <label for="email">Korisnicko Ime:</label>
          <input
            type="text" 
            name="email" 
            value={this.state.input.email}
            onChange={this.handleChange}
            placeholder="Unesite Korisnicko Ime" 
            id="email" />
 
            <div className='error'>{this.state.errors.email}</div>
        </div>
        <div>
          <label for="name">Lozinka:</label>
          <input 
            type="text" 
            name="name" 
            value={this.state.input.name}
            onChange={this.handleChange} 
            placeholder="Unesite Lozinku" 
            id="name" 
          />
            <div className='error'>{this.state.errors.name}</div>
        </div>
        <Link to='/adresar'>
          <button className='button' type="submit" value="Submit">Login</button>
        </Link>
      </form>
    </div>
  );
}
}


export default Login;