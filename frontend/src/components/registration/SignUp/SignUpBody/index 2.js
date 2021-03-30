import { connect } from 'react-redux';
import { MiddleSection, H1 , OrangeDiv, TopDiv, BottomDiv}from "../../../../styledcomponents/forAll/layout.js";
import { Input, InputDiv, }from "../../../../styledcomponents/forAll/inputs.js";
import SignUpRegistration from "../SignUpRegistration";
import React, { Component } from 'react';
import styled from 'styled-components';
import { withRouter } from "react-router-dom";



class SignUnBody extends Component {
    Form = styled.form`
    display: flex;
    flex-direction: column;
  `
//     const [email, setEmail] = useState('');
    
//     const register = e => {
//         e.preventDefault();
//         const url = "https://motion.propulsion-home.ch/backend/api/auth/registration/";
//         const method = 'POST';
//         const body = {
//            email: email
//         };
//         const headers = new Headers({
//             'Content-Type': 'application/json'
//         });
//         const config = {
//             method: method,
//             headers: headers,
//             body: JSON.stringify(body)
//         };
//         fetch(url, config)
//         .then(res => res.status)
//         .then(status => {
//             if (status === 200){
//                 props.dispatch({type: 'ADD_EMAIL', payload: email});
//                 props.history.push("/sign-up/congratulations/");
//             } else {
//                 console.log("response not ok");
//             }
//         });
//     }

    render(){
        return(
        <MiddleSection>
          <H1>REGISTRATION</H1>
          <OrangeDiv/>
          {/* <Form onSubmit={ register }> */}
            <InputDiv>
              <i className="fas fa-envelope input-i" />
              {/* <Input type="email" placeholder="   Email" value={ email } onChange={ event => setEmail(event.target.value) } required /> */}
              <Input type="email" placeholder="   Email" required />
            </InputDiv>
            <SignUpRegistration />
          {/* </Form> */}
       </MiddleSection>
    )
}
} 
const mapStateToProps = () => {
    return {
    };
}

const connection = connect(mapStateToProps);
const ConnectedApp = connection(SignUnBody);
export default withRouter(ConnectedApp);
