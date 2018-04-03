import React from 'react';
import ReactDom from 'react-dom';
import { Redirect } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import SubHeader from 'material-ui/Subheader';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import Paper from 'material-ui/Paper';

  const subStyle = {
    width:100,

  };
  const subStyle2 = {
    width:400,
  };

class LoginPage extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      loginSucces: false,
      email:'',
      password:'',
      passwordErr:'',
      emailErr:'',
    },
    this.handleValidate = this.handleValidate.bind(this);
    this.handleChangeEmail =  this.handleChangeEmail.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
  }

  handleChangeEmail(event){
     let email = event.target.value;
    this.setState({email:email,password:this.state.password,passwordErr:this.state.passwordErr,emailErr:''});
    //console.log("success!")
  }
  handleChangePassword(event){
    let password = event.target.value;
    this.setState({email:this.state.email,password:password,passwordErr:'',emailErr:this.state.emailErr});
  }
  handleValidate(event){

    const { email, password } = this.state;
    const userName = "abc@gmail.com";
    const passWord = "@bC1";
    var passwordErr = '';
    var emailErr = '';
    var errorMessage1 = "username required!";
    var errorMessage2 = "password required!";
    var errorMessage3 = "password does not match!";
    var errorMessage4 = "usename should be a valid email address!";
    if(email == ''){
      emailErr = errorMessage1;
      }
      else if(password == ''){
        passwordErr = errorMessage2;
      }
      if((email!='') && (email!= userName)) {
        emailErr = errorMessage4;
      }
      else if((password !='') && (password != passWord)){
        passwordErr = errorMessage3;
      }
     if(emailErr||passwordErr) {
        this.setState({email:email,password:password,emailErr:emailErr,passwordErr:passwordErr});
      }
      else {
          this.setState({email:email,password:password,emailErr:'',passwordErr:'',loginSucces:true});
      }
    }

    render() {
      return(
        <div className="loginContainerDiv">
          { this.state.loginSucces && <Redirect to='/individualTable' push/> }
          <MuiThemeProvider>
            <div id="paper" className="paperContainer">
              <Paper zDepth={5} className="loginTopPaper">
                <Paper zDepth={1} className="loginInnerPaper">
                  <h1 className="h1"><strong><em>Let&#39;s Mploy!</em></strong></h1>
                  <div id="text1" className="row text1Div">
                    <SubHeader style={subStyle}>Username</SubHeader>
                    <TextField
                      id="UserName"
                      type="text"
                      hintText="Username"
                      errorText={this.state.emailErr}
                      value={this.state.email}
                      onChange={this.handleChangeEmail}>
                    </TextField>
                  </div>
                  <div id="text2" className="row text2Div">
                    <SubHeader style={subStyle}>Password</SubHeader>
                    <TextField
                      id="Password"
                      type="password"
                      hintText="Password"
                      errorText={this.state.passwordErr}
                      value={this.state.password}
                      onChange={this.handleChangePassword}>
                    </TextField>
                  </div>
                  <div id="comboDiv" className="btn row">
                    <div id="Rbtn" className="rbtnDiv row">
                      <RaisedButton id="login" onClick={this.handleValidate}>
                        LogIn
                      </RaisedButton>
                    </div>
                    <div id="Fbtn" className="fbtnDiv">
                      <FlatButton id="Fbtn" onClick={this.openDialog}>
                        New User?
                      </FlatButton>
                    </div>
                  </div>
                </Paper>
              </Paper>
            </div>
          </MuiThemeProvider>
        </div>
      );
    }
  }

export default LoginPage;
