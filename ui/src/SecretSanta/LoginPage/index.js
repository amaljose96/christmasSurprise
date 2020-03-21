import React, { Component } from 'react';
import FacebookLogin from 'react-facebook-login';
import {LoginPageContainer,LoginPageHeading,LoginPageButton} from './styledComponents';
class LoginPage extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    componentClicked=()=>{
        console.log("Component Clicked");
    }
    responseFacebook = (response) => {
        console.log(response);
        if(response.id){
            console.log("Sucess");
        }
    }
    render() { 
        return ( 
        <LoginPageContainer>
            <LoginPageHeading> Secret Santa </LoginPageHeading>
            <LoginPageButton>
                <FacebookLogin
                    appId="221334608641347"
                    autoLoad={true}
                    fields="name,email,picture"
                    onClick={this.componentClicked}
                    callback={this.responseFacebook} />
            </LoginPageButton>

        </LoginPageContainer> );
    }
}
 
export default LoginPage;