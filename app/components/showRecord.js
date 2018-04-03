  import React from 'react';
  import ReactDom from 'react-dom';
  import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
  import SelectField from 'material-ui/SelectField';
  import Dialog from 'material-ui/Dialog';
  import MenuItem from 'material-ui/MenuItem';
  import RaisedButton from 'material-ui/RaisedButton';
  import TextField from 'material-ui/TextField';
  import FlatButton from 'material-ui/FlatButton';
  import style from './style.css';

  export default class ShowRecord extends React.Component {
    constructor(props){
      super(props);
      this.state = {
          isSubmitted:false,
          params: props.match.params,
                  }
                  this.onChangeHandler = this.onChangeHandler.bind(this);
                  this.onSelectHandler = this.onSelectHandler.bind(this);
                  this.handleSave = this.handleSave.bind(this);
                  this.handleClose = this.handleClose.bind(this);
                }

    onChangeHandler(event) {
      let value = event.target.value
      let status = this.state.params.status
       this.setState({params:{name:value,status:status}});
          }

    onSelectHandler(event,index,value){
      let name = this.state.params.name
       this.setState({params:{name:name,status:value}});
     }

      handleSave(){
        this.setState({
          isSubmitted:true
        });
      }

     handleClose(){
       this.setState({
         isSubmitted:false
       });

     }

    render() {
                const { name, status }  = this.state.params;
                const { isSubmitted } = this.state;
                const actions = [
                  <FlatButton
                    label="Close"
                    primary={true}
                    onClick={this.handleClose}
                  />
                ]
      return(
        <div>
          <MuiThemeProvider>
            <div id="container" className="ShowRecord row">
              <div id="textfield" className="textfld">
                <TextField
                  value={name}
                  onChange={this.onChangeHandler}
                  hintText="Enter Name"/>
              </div>
              <div id= "SelectField" className="center menu">
                <SelectField
                  floatingLabelText="Select Category"
                  value={status}
                  onChange={this.onSelectHandler}>
                  <MenuItem value="Student" primaryText="Student"/>
                  <MenuItem value="Employed" primaryText="Employed"/>
                  <MenuItem value="Unemployed" primaryText="Unemployed"/>
                </SelectField>
              </div>
              <div id="button" className="button">
                <RaisedButton onClick={this.handleSave} primary
                  type="submit"
                  label="Save"
                 >
                 {isSubmitted &&
                  <Dialog
                     actions={actions}
                     open={true}
                     onRequestClose={this.handleClose}
                     >
                      Submitted Successfully!
                  </Dialog>
                }
              </RaisedButton>
              </div>
            </div>
          </MuiThemeProvider>
        </div>
      );
    }
  }
