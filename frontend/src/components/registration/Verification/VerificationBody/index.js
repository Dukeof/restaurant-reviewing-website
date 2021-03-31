import { connect } from "react-redux";
import React, { Component } from "react";
import styled from "styled-components";
import { withRouter } from "react-router-dom";
import {
  MiddleSection,
  H1,
  OrangeDiv,
} from "../../../../styledcomponents/forAll/layout.js";
import { Input, InputDiv } from "../../../../styledcomponents/forAll/inputs.js";
import { Link } from "react-router-dom";
import { BigButton } from "../../../../styledcomponents/forAll/buttons.js";

const Form = styled.form`
  display: grid;
  grid-template-areas:
    " email code "
    " username location "
    " pw pw2 "
    " button button ";
`;

class Verification extends Component {
  constructor(props) {
    super(props);
    this.state = {
      code: "",
      email: "",
      username: "",
      location: "",
      password: "",
      password_repeat: "",
    };
  }

  setValidationCode = (e) => {
    this.setState({
      code: e.target.value,
    });
  };
  setEmail = (e) => {
    this.setState({
      email: e.target.value,
    });
  };
  setUser = (e) => {
    this.setState({
      username: e.target.value,
    });
  };
  setLocation = (e) => {
    this.setState({
      location: e.target.value,
    });
  };

  setPassword = (e) => {
    this.setState({
      password: e.target.value,
    });
  };

  setPassword2 = (e) => {
    this.setState({
      password_repeat: e.target.value,
    });
  };

  verification = (e) => {
    console.log("inside verification");
    e.preventDefault();
    const url = "http://localhost:8000/backend/api/registration/validation/";
    const method = "POST";
    const body = {
      username: this.state.username,
      code: this.state.code,
      email: this.state.email,
      location: this.state.location,
      password: this.state.password,
      password_repeat: this.state.password_repeat,
    };
    const headers = new Headers({
      "Content-Type": "application/json",
    });
    const config = {
      method: method,
      headers: headers,
      body: JSON.stringify(body),
    };
    fetch(url, config)
      .then((res) => res.json())
      .then((data) => {
        console.log("data ok");
        //   if (data.user.password==data.user.password_repeat){
        if (data.user) {
          this.props.dispatch({ type: "ADD_ID", payload: data.user.id });
          this.props.dispatch({
            type: "ADD_LOCATION",
            payload: data.user.location,
          });
          this.props.dispatch({
            type: "ADD_USER_NAME",
            payload: data.user.username,
          });
          this.props.history.push("/sign-in/");
          console.log("validation response ok");
        } else {
          console.log("validation response not ok");
          // }
        }
      });
  };
  render() {
    return (
      <MiddleSection>
        <H1>VERIFICATION</H1>
        <OrangeDiv />
        <Form onSubmit={this.verification}>
          <InputDiv>
            <i className="val user" />
            <Input
              value={this.state.username}
              onChange={this.setUser}
              type="text"
              placeholder="Username"
              required
            />
          </InputDiv>
          <InputDiv style={{ gridArea: "code" }}>
            <i className="val code" />
            <Input
              value={this.state.code}
              onChange={this.setValidationCode}
              type="text"
              placeholder="Validation code"
              required
            />
          </InputDiv>
          <InputDiv>
            <i className="val email" />
            <Input
              value={this.state.email}
              onChange={this.setEmail}
              type="email"
              placeholder="Email"
              required
            />
          </InputDiv>
          <InputDiv>
            <i className="val location" />
            <Input
              value={this.state.location}
              onChange={this.setLocation}
              type="text"
              placeholder="Location"
              required
            />
          </InputDiv>
          <InputDiv>
            <i className="val password" />
            <Input
              value={this.state.password}
              onChange={this.setPassword}
              type="password"
              placeholder="Password"
              required
            />
          </InputDiv>
          <InputDiv>
            <i className="val repeat-password" />
            <Input
              value={this.state.password_repeat}
              onChange={this.setPassword2}
              type="password"
              placeholder="Password repeat"
              required
            />
          </InputDiv>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "flex-start",
              gridArea: "button",
              width: "700px",
            }}
          >
            {/* <Link to={'/sign-in'}> */}
            <BigButton>Finish registration</BigButton>
            {/* </Link> */}
          </div>
        </Form>
      </MiddleSection>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    token: state.token,
  };
};

const connection = connect(mapStateToProps);
const ConnectedApp = connection(Verification);
export default withRouter(ConnectedApp);
