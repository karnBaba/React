import React from "react";
import {connect} from "react-redux";
import { bindActionCreators } from "redux";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import { userActions } from '../../../actions/actions';
import "../../../../resources/main.css";
import {store} from '../../../store/ReduxStore'

export  class Login extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      username: "",
      password: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.validateForm = this.validateForm.bind(this);
  }

  validateForm() {
    return this.state.username.length > 0 && this.state.password.length > 0;
  }

  handleChange(event) {
    console.log('event target value', event.target.value);
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({ submitted: true });
    const { username, password } = this.state;
      //const { dispatch } = this.props;
      console.log('this.props', this.props);
      if (username && password) {
        store.dispatch(userActions.login(username, password));
      }
  }

  render() {
    return (
      <div className="login">
        <form onSubmit={this.handleSubmit}>
          <FormGroup controlId="username" bsSize="large">
            <ControlLabel>Username</ControlLabel>
            <FormControl
              autoFocus
              type="email"
              value={this.state.username}
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup controlId="password" bsSize="large">
            <ControlLabel>Password</ControlLabel>
            <FormControl
              value={this.state.password}
              onChange={this.handleChange}
              type="password"
            />
          </FormGroup>
          <Button
            block
            variant="primary"
            bsSize="large"
            disabled={!this.validateForm()}
            type="submit"
          >
            Login
          </Button>
        </form>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { loggingIn } = state.authentication;
  return {
      loggingIn
  };
}

function mapDispatchToProps(dispatch){  
  const loginAction = userActions.login;
  return bindActionCreators({loginAction},dispatch)
};


export default connect(mapStateToProps, mapDispatchToProps)(Login);