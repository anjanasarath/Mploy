import React from 'react';
import { Table, TableBody, TableRow, TableRowColumn, TableHeader, TableHeaderColumn, TableFooter} from 'material-ui/Table';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Link } from 'react-router-dom';
import Toggle from 'material-ui/Toggle';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

const tableData = [
  {
    name: 'John Smith',
    status: 'Employed',
  },
  {
    name: 'Randal White',
    status: 'Unemployed',
  },
  {
    name: 'Stephanie Sanders',
    status: 'Employed',
  },
  {
    name: 'Amber presta',
    status: 'Student',
  },
  {
    name: 'Kyle hawks',
    status: 'Unemployed',
  },

];

export default class IndividualTable extends React.Component {
  constructor(props){
    super(props);
    this.state = {
    height : '300px',
    stripedRows: true,
    selectable : true,
    multiSelectable : true,
    displaySelectAll: true,
    enableSelectAll: true,
    adjustForCheckbox: false,
    showCheckboxes: true,
    showRowHover: true,

    }

  }

  render() {
    return(
      <div>
      <MuiThemeProvider>
        <Table
        height = { this.state.height }
        selectable = { this.state.selectable }
        multiSelectable = { this.state.multiSelectable }
        >
        <TableHeader
          displaySelectAll={this.state.showCheckboxes}
          enableSelectAll={this.state.enableSelectAll}
          adjustForCheckbox={this.state.showCheckboxes}
          >
            <TableRow>
              <TableHeaderColumn colSpan="3" tooltip="Main Header" style={{textAlign: "center"}}>
              Employee Data
              </TableHeaderColumn>
            </TableRow>
            <TableRow>
              <TableHeaderColumn tooltip="The ID">Id</TableHeaderColumn>
              <TableHeaderColumn tooltip="The Name">Name</TableHeaderColumn>
              <TableHeaderColumn tooltip="The Status">Status</TableHeaderColumn>
              <TableHeaderColumn tooltip="The Record">Add Record</TableHeaderColumn>
            </TableRow>
        </TableHeader>
        <TableBody
          stripedRows = {this.state.stripedRows}
          displayRowCheckbox={this.state.showCheckboxes}
          showRowHover={this.state.showRowHover}
          >
          {tableData.map((row,index) => (
              <TableRow key={index}>
                <TableRowColumn>{index}</TableRowColumn>
                <TableRowColumn>{row.name}</TableRowColumn>
                <TableRowColumn>{row.status}</TableRowColumn>
                <TableRowColumn><Link to={'/showRecord/'+row.name+'/'+row.status}>Edit Data</Link></TableRowColumn>
              </TableRow>
          ))}
        </TableBody>
        </Table>
        </MuiThemeProvider>
      </div>
    );
  }
}
