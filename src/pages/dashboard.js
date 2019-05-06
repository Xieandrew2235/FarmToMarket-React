import React, { Component } from 'react';
import SearchBox from '../components/SearchBox';
import SearchBtn from '../components/SearchBtn';
import MerchantRegistrationForm from '../components/Form/MerchantRegistrationForm';
import CardRow from '../components/CardRow';
import API from '../utils/API';

class Dashboard extends Component {
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
        console.log(this.state);

        API.getFarmersByProduce(this.state.prod_Name)
            .then(res => {
                console.log(res.data);
                this.setState({
                    farmerData: res.data,
                });
            });
    };

    componentDidMount() {
        this.loadPeople();
    }

    loadPeople = () => {
        API.searchMerchant()
            .then(
                res => {
                    this.setState({ returnedPeople: res.data, isLoaded: true })
                },
                error => {
                    this.setState({ isLoaded: true, error });
                }
            )
    };

    render() {
        return (
            <div className="container">
                <div>

                    <SearchBox
                        value={this.state.searchTerm}
                        onChange={this.handleInputChange}
                        name="searchTerm"
                        placeholder="Search for merchants!"
                    />
                    <SearchBtn
                        disabled={!(this.state.searchTerm)}
                        onClick={this.handleFormSubmit}
                    />

                    <div className="container">

                        <CardRow
                            items={this.state.returnedPeople} />
                    </div>
                </div>
            </div>
        )
    }
}

export default Dashboard;