import React, { Component } from 'react';
import SearchBox from '../components/SearchBox';
import SearchBtn from '../components/SearchBtn';
import MerchantRegistration from '../components/Form/MerchantRegistrationForm';
import CardRow from '../components/CardRow';
import API from '../utils/API';

// convert this into a smart component with class MerchantDB extend React.Component
// add a state with a data array
// 
// function MerchantDB () {
//         return (
//             <div>
//                 <div className="container">
//                     <SearchBox />
//                     <SearchBtn />
//                 </div>
//             </div>
//         )
//     }

    class MerchantDB extends Component {
        state = {
          name: [],
          address: "",
          city: "",
          state: "",
          email: "",
          phone: ""
        };
        handleInputChange = event => {
          const { name, value } = event.target;
          this.setState({
            [name]: value
          });
        };
        
        handleFormSubmit = event => {
          event.preventDefault();
        
          API.getFarmersByProduce(this.state.prod_Name)
            .then(res => {
                console.log(res);
                this.setState({
                    farmerData: res.dataValues
                });
            });
        };
        
        componentDidMount() {
          this.loadPeople();
        }
        
        loadPeople = () => {
          API.getRecentPeople()
            .then(
              res => { 
                this.setState({ returnedPeople: res.data, isLoaded: true }) 
                // console.log(res.data)
              },
              error => {
                this.setState({ isLoaded: true, error });
              }
            )
          //.catch(err => console.log(err));
        };
        
        render(){
          return (
            <div>
            
        
             {/* <form className="form"> */}
                  {/* <MerchantRegistration></MerchantRegistration> */}
        
                   <SearchBox
                     value={this.state.searchTerm}
                     onChange={this.handleInputChange}
                     name="searchTerm"
                     placeholder="Search for farmers!"
                   />
                   <SearchBtn
                     disabled={!(this.state.searchTerm)}
                     onClick={this.handleFormSubmit}
                   /> 
                    
                     
                 {/* </form> */}
             {/*  <SearchBar></SearchBar> */}
             
            
              <div className="container">
              
                <CardRow 
                items={this.state.returnedPeople}/>
        
             {/*  <Postform></Postform>  */}
              </div>
            </div>
            )
          }
          
        }
export default MerchantDB;