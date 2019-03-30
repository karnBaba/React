import React from 'react'
import {Table, Button} from 'react-bootstrap'
import getTableData from './DashboardUtil';
import {store} from '../../../store/ReduxStore';
import {userActions} from '../../../actions';
 
export default class Dashboard extends React.Component{

  constructor(props){
    super(props);
    this.userData = getTableData();
    }

  render(){
    return(
      <div>
        <Table striped bordered condensed hover>
        <thead>
          <tr>
            <th>S.No</th>
            <th>Name</th>
            <th>Age</th>
            <th>Gender</th>
            <th>Email</th>
            <th>Phone Number</th>
          </tr>
        </thead>
        <tbody>
      {this.userData.user && this.userData.user.length > 0 ? this.userData.user.map((data, index) => {
        return(
            <tr key ={index}>
            <td>{data.id}</td>
            <td>{data.name}</td>
            <td>{data.age}</td>
            <td>{data.gender}</td>
            <td>{data.email}</td>
            <td>{data.phoneNo}</td>
          </tr>
      )
      }):null}
        </tbody>
      </Table>
      <Button  variant="primary" bsSize="large" onClick = {(e) => store.dispatch(userActions.logout)}>Logout</Button>
      </div>
    );
    }
}