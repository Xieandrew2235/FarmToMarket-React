import React, { Component } from 'react';
import SearchBox from '../../components/SearchBox';
import SearchBtn from '../../components/SearchBtn';
import CardRow from '../../components/CardRow';

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
        console.log("Searching Database");

        // API.getFarmersByProduce(this.state.prod_Name)
        //     .then(res => {
        //         console.log(res.data);
        //         this.setState({
        //             farmerData: res.data,
        //         });
        //     });

        // API.searchFarmer()
        // .then(res => {
        //     console.log(res.data);
        //     this.setState({
        //         farmerData: res.data,
        //     });
        // });
    };

    componentDidMount() {
        this.loadPeople();
    }

    loadPeople = () => {
        // API.searchMerchant()
        //     .then(
        //         res => {
        //             this.setState({ returnedPeople: res.data, isLoaded: true })
        //         },
        //         error => {
        //             this.setState({ isLoaded: true, error });
        //         }
        //     )
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
                        click ={this.handleFormSubmit}
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