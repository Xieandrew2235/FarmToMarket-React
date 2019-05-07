import React, { Component } from 'react';
import SearchBox from '../../components/SearchBox';
import SearchBtn from '../../components/SearchBtn';
// import MerchantRegistrationForm from '../../components/Form/MerchantRegistrationForm';
import CardRow from '../../components/CardRow';
import API from '../../utils/API';
import { Select, TextInput, Row, Button, Icon } from 'react-materialize';


class Merchantdashboard extends Component {
  constructor(props){
    super(props)
    this.state = {
      name: [],
      prod_Name: "",
      address: "",
      city: "",
      state: "",
      email: "",
      phone: "",
      user: "",
      edit: false,
      updatedUser: {}
    }
  }

  componentWillMount(){
    this.getUserInfo()
  }

  getUserInfo = () => {
    API.getUserData()
    .then(data => {return data.json()})
    .then(response => {
      console.log(response)
      if(response === false) {
        window.location.href = "/";
        
      }else {
        this.setState({
          user: response
        })
      }
    })
  }
  

  handleSearchInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleSearchSubmit = event => {
    event.preventDefault();
    console.log(this.state.prod_Name)
    API.getFarmersByProduce(this.state.prod_Name)
      .then(res => {
        console.log(res)
        this.setState({
          farmerData: res.data
        });
      });
  };

  // componentDidMount() {
  //   this.loadPeople();
  // }

  loadPeople = () => {
    // API.searchFarmer()
    //   .then(
    //     res => {
    //       this.setState({ returnedPeople: res.data, isLoaded: true })
    //     },
    //     error => {
    //       this.setState({ isLoaded: true, error });
    //     })
  };

renderUserInfo = () => {
  return(
    <section>
    <p>username: {this.state.user.userName}</p>
    <p>role: {this.state.user.userType}</p>
    <p>email: {this.state.user.email}</p>
    <p>phone: {this.state.user.phone}</p>
    <p>address: {this.state.user.address}, {this.state.user.city}, {this.state.user.zipcode}</p>
  
    <Button waves="light" style={{marginRight: '5px'}}  onClick={this.editUserInfo} left >
      edit      
    </Button>
    </section>
   
  )
}

editUserInfo = () => {
  this.setState({
    edit: true
  })
}

cancelUserInfo = () => {
  this.setState({
    edit: false
  })
}

handleInputChange = (e) => {
  const { name, value } = e.target;

  this.setState(prevState => ({
    updatedUser: {
      ...prevState.updatedUser,
      [name]: value
    }
  }))
}

updateUserInfo = (e) => {
  e.preventDefault()

  API.updateUser(this.state.updatedUser)
  .then(data => {return data.json()})
  .then(response => {
    console.log(response)
    if(response === false) {
      alert('try again')
      this.setState({
        edit: false
      })
    }else {
      this.setState({
        user: response,
        edit: false
      })
    }
  })
}

renderEditUserInfo = () => {
  return (
    <section>
      <form>
                       
        <Row>
            <TextInput label={this.state.user.first_name} id="firstName" type="text" name="first_name"  onChange={this.handleInputChange} className="" s={12} m={6} l={6} /> 
            <TextInput label={this.state.user.last_name} id="lastName" type="text" name="last_name"  onChange={this.handleInputChange} className="" s={12} m={6} l={6} /> 
        </Row>
        <Row>
            <TextInput label={this.state.user.address} id="address" type="text" name="address" onChange={this.handleInputChange} className="e" s={12} m={6} l={6}  />
            <TextInput label={this.state.user.city} id="city" type="text" name="city" onChange={this.handleInputChange} className="e" s={12} m={6} l={6} />
        </Row>
        <Row>
            <TextInput label={this.state.user.zipcode} id="zipcode" type="number" name="zipcode" onChange={this.handleInputChange} className="e" s={12} m={6} l={6}/>
            <TextInput label={this.state.user.email} email id="email" type="email" name="email" onChange={this.handleInputChange} className="e" s={12} m={6} l={6}/>
        </Row>
        <Row>
            <TextInput label={this.state.user.phone} id="phone" type="number" name="phone" onChange={this.handleInputChange} className="e" s={12} m={12} l={12}/>
        </Row>

        <Button waves="light" style={{marginRight: '5px'}}  onClick={this.cancelUserInfo} left >
            cancel      
        </Button>
        <Button waves="light" style={{marginRight: '5px'}}  onClick={this.updateUserInfo} right >
            update      
        </Button>
      </form>
    </section>
  )
}


  render() {
    return (
      <div className="container">
        <div>
          <h1> WELCOME {this.state.user.first_name}</h1>
            {(this.state.edit)? this.renderEditUserInfo(): this.renderUserInfo()}

          <TextInput value={this.state.searchTerm}
            onChange={this.handleSearchInputChange}
            name="prod_Name"
            placeholder="Search for farmers by their produce!"/>
          <Button onClick={this.handleSearchSubmit}>Search</Button>

          <div className="container">

            <CardRow
              items={this.state.returnedPeople} />
          </div>
        </div>
      </div>
    )
  }
}

export default Merchantdashboard;