import React, { Component } from "react";
import "./App.scss";
import PropTypes from 'prop-types';
import { getEmployee, addEmployee, editEmployee, deleteEmployee } from './Redux/action';
import { connect } from 'react-redux';
import Page from "./Page";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 0,
      employeeName: "",
      email:"",
      mobile:"",
      companyName:"",
      address:""
    };
    
  }

  static propTypes = {
    employees: PropTypes.array.isRequired,
    getEmployee: PropTypes.func.isRequired,
    addEmployee: PropTypes.func.isRequired,
    editEmployee: PropTypes.func.isRequired,
    deleteEmployee: PropTypes.func.isRequired
  };

  componentDidMount() {
    this.props.getEmployee();
  }

  submitData = () => {
    if (this.state.employeeName && this.state.email && this.state.mobile && this.state.companyName && this.state.address && !this.state.id) {
      const newEmployee = {
        id: Math.floor(Math.random() * (999 - 100 + 1) + 100),
        employeeName: this.state.employeeName,
		email: this.state.email,
		mobile: this.state.mobile,
		companyName: this.state.companyName,
        address: this.state.address,
      };

      this.props.addEmployee(newEmployee);
    } else if (this.state.employeeName && this.state.email && this.state.mobile && this.state.companyName && this.state.address && this.state.id) {
      const updatedDetails = {
        id: this.state.id,
        employeeName: this.state.employeeName,
	    	email: this.state.email,
		    mobile: this.state.mobile,
		    companyName: this.state.companyName,
        address: this.state.address,
      };

      this.props.editEmployee(updatedDetails);
    } else {
      
      alert('Enter Employee Details.');
    }

    this.clearData();
  }

  editDetails = (data) => {
    this.setState({
      id: data.id,
      employeeName: data.employeeName,
	    email: data.email,
	    mobile: data.mobile,
	    companyName:data.companyName,
      address: data.address
    })
  }
  viewDetails = (data) => {
    this.setState({
      Name: data.employeeName,
	    Email: data.email,
	    Mobile: data.mobile,
	    Company:data.companyName,
      Address: data.address
    })
  }
  deleteEmployee = (id) => {
    this.clearData();
    if (window.confirm("Are you sure you want  to delete")) {
      this.props.deleteEmployee(id);      
    }
  }

  handleNameChange = (e) => {
    this.setState({
      employeeName: e.target.value
    });
  }
  handleEmailChange = (e) => {
    this.setState({
      email: e.target.value
    });
  }
  handleMobileChange = (e) => {
    this.setState({
      mobile: e.target.value
    });
  }
  handlecompanyNameChange = (e) => {
    this.setState({
      companyName: e.target.value
    });
  }

  handleAddressChange = (e) => {
    this.setState({
      address: e.target.value
    });
  }

  clearData = () => {
    this.setState({
      id: 0,
      employeeName: "",
	    email: "",
	    mobile: "",
	    companyName:"",
      address: ""
    });
  }

  render() {
    return (
  
      <div>
          <h1 style={{fontSize:"34px",marginTop:"30px",textAlign:"center"}}>Contact Users</h1>
        <div class="container-fluid">
          <div class="row">
            <div class="col-12 col-sm-12 col-md-12 col-lg-12 ">
              <span class="material-icons" data-toggle="modal" data-target="#myModal" style={{color:"rgb(220, 0, 78)",fontSize:"50px",marginLeft:"500px",marginBottom:"20px",cursor:"pointer"}}>
                  add_circle
              </span>
                <div className="modal" id="myModal">
                  <div className="modal-dialog">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h2  style={{marginLeft:"110px",color:"#3f51b5"}}>Employee Contact</h2>
                        <button type="button" className="close" data-dismiss="modal"style={{fontSize:"30px"}}>&times;</button>
                      </div>
                      <div class="modal-body">
                        <div className="col-sm">
                          <div className="form-field">
                            <div className="form-field__control">
                              <input 
                                onChange={this.handleNameChange}
                                value={this.state.employeeName} 
                                type="text" class="form-field__input" 
                                placeholder=" " 
                              />
                              <label for="firstname" class="form-field__label">Full Name</label>
                              <div className="form-field__bar"></div>
                            </div>
                          </div>
                        </div>
                        <div className="col-sm">
                          <div className="form-field">
                            <div className="form-field__control">
                              <input 
                                onChange={this.handleEmailChange}
                                value={this.state.email} type="text" 
                                class="form-field__input" 
                                placeholder=" "
                              />
                              <label for="firstname" class="form-field__label">Email id</label>
                              <div className="form-field__bar"></div>
                            </div>
                          </div>
                        </div>
                        <div className="col-sm">
                          <div className="form-field">
                            <div className="form-field__control">
                              <input 
                                onChange={this.handleMobileChange}
                                value={this.state.mobile} 
                                pattern="[789][0-9]{9}"
                                type="number" class="form-field__input"
                                placeholder=" " 
                              />
                              <label for="firstname" class="form-field__label">Phone No.</label>
                              <div className="form-field__bar"></div>
                            </div>
                          </div>
                        </div>
                        <div className="col-sm">
                          <div className="form-field">
                            <div className="form-field__control">
                              <input 
                                onChange={this.handlecompanyNameChange} 
                                value={this.state.companyName} 
                                type="text" class="form-field__input" 
                                placeholder=" " />
                              <label for="firstname" class="form-field__label">Company Name</label>
                              <div className="form-field__bar"></div>
                            </div>
                          </div>
                        </div>
                        <div className="col-sm">
                          <div className="form-field">
                            <div className="form-field__control">
                              <input 
                                onChange={this.handleAddressChange}
                                value={this.state.address}
                                type="text" className="form-field__input"
                                placeholder=" " 
                              />
                              <label for="firstname" className="form-field__label">Address</label>
                              <div className="form-field__bar"></div>
                            </div>
                          </div>
                        </div>  
                          <div >
                            {this.state.id ?  <span class="material-icons"  
                              onClick={this.submitData}
                              style={{color:"rgb(220, 0, 78)",
                              fontSize:"30px",cursor:"pointer",
                              marginLeft: "-5px"}}
                            >
                            check_circle</span>: <button onClick={this.submitData}class="btn btn-primary" style={{width:"140px",marginLeft:"150px"}}>ADD</button>} &nbsp;&nbsp;
                            <span class="material-icons"  
                              onClick={this.clearData}
                              style={{color:"rgb(220, 0, 78)",
                              fontSize:"30px",cursor:"pointer",
                              marginLeft: "-5px"}}
                            >
                            </span>
                          </div>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
          </div>
        </div>
       <div class="container-fluid" >
          <div class="row">
            <div class="col-sm-2 col-md-2 col-lg-2 ">
            </div>
            <div class="col-sm-6 col-md-6 col-lg-6 ">
              <div class="d-flex flex-nowrap bd-highlight" style={{ backgroundColor: "#e9ecef",width:"545px" }}>
                <div class="order-3 p-2 bd-highlight"> <span style={{ fontSize: "17px", marginLeft: "110px" }}>Company</span></div>
                <div class="order-2 p-2 bd-highlight" style={{ marginLeft: "70px" ,fontSize: "15px"}}>Basic Info</div>
                <div class="order-1 p-2 bd-highlight" style={{ marginLeft: "10px" ,fontSize: "15px"}}>+</div>
              </div>
            </div>
            <div class="col-sm-4 col-md-4 col-lg-4 ">
            </div>
          </div>     
        </div>
        <div class="container-fluid" >
          <div class="row">
            <div class="col-sm-2 col-md-2 col-lg-2 ">
          
            </div>
            <div class="col-sm-6 col-md-6 col-lg-6 ">
            <div >
                  {this.props.employees && this.props.employees.map((data, index) => {
                     return <div key={(index + 1)} >
                     <div className="row">
                      <div className="col-md">
                  <div class="container mt-3">
                    <div  key={index} className="d-flex">
                      <div className="p-2 flex-fill">
                        <div className="custom-control custom-checkbox">
                          <input type="checkbox" class="custom-control-input" value={data.id} className="largerCheckbox" onChange={ this.handleChecked} style={{cursor:"pointer",marginLeft:"-146px",marginTop:"30px"}}/>
                          <label for="customCheck3" ></label>
                        </div>
                      </div>
                      <div className="p-2 flex-fill" style={{ marginLeft: "-320px" }}>
                        <h3 style={{ textAlign: "center",fontSize:"18px"}}>{data.employeeName}</h3>
                        <h5 style={{ textAlign: "center",fontSize:"12px" }}>{data.email}</h5>
                      </div>
                      <div className="p-2  flex-fill">
                        <h3 style={{ textAlign: "center",marginLeft: "-90px",fontSize:"16px"  }}>{data.companyName}</h3>
                      </div>
                      <p > 
                        <span class="material-icons"  
                            data-toggle="modal" data-target="#myModal"
                            onClick={() => this.editDetails(data)}
                            style={{color:"rgb(220, 0, 78)",
                            fontSize:"30px",cursor:"pointer",
                            marginLeft: "-15px"}}
                        >
                        edit</span>
                        <span 
                            class="material-icons"  
                            data-toggle="modal" 
                            onClick={() => this.viewDetails(data)}
                            style={{color:"rgb(220, 0, 78)",
                            fontSize:"30px",cursor:"pointer",
                            marginLeft: "-5px"}}
                        >
                        visibility</span>
                        <span 
                            class="material-icons"  
                            onClick={() => this.deleteEmployee(data.id)}
                            style={{color:"rgb(220, 0, 78)",
                            fontSize:"30px",cursor:"pointer",
                            marginLeft: "-5px"}}
                        >
                        delete</span>
                          </p>
                          </div>                           
                        </div>   
                      </div>
                    </div>
                  </div> 
              })}
            </div>
            </div>
              <div class="col-sm-2 col-md-4 col-lg-4 ">
              <div className="jumbotron" style={{width:"400px",marginLeft:"10px",height:"300px"}}>
              <h2 style={{fontSize:"20px",marginLeft:"120px",marginTop:"-20px"}} data-letters="FA"><br/> <span  style={{marginLeft:"-30px"}}>{this.state.Name}</span></h2>
              <h3 style={{fontSize:"13px"}}>Full Name: <span style={{marginLeft:"20px"}}>{this.state.Name}</span></h3>
              <h3 style={{fontSize:"13px"}}>Email: <span style={{marginLeft:"48px"}}>{this.state.Email}</span></h3>
              <h3 style={{fontSize:"13px"}}>Phone: <span style={{marginLeft:"44px"}}>{this.state.Mobile}</span></h3>
              <h3 style={{fontSize:"13px"}}>Company : <span style={{marginLeft:"20px"}}>{this.state.Company}</span></h3>
              <h3 style={{fontSize:"13px"}}>Address : <span style={{marginLeft:"30px"}}>{this.state.Address}</span></h3>
              </div>
              </div>
          </div>     
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  employees: state.employees
});

export default connect(mapStateToProps, { getEmployee, addEmployee, editEmployee, deleteEmployee })(App);