import React, { Component } from 'react';
import SearchBox from '../components/SearchBox';
import SearchBtn from '../components/SearchBtn';

// convert this into a smart component with class MerchantDB extend React.Component
// add a state with a data array
// 
function MerchantDB () {
        return (
            <div>
                <div className="container">
                    <SearchBox />
                    <SearchBtn />
                </div>
            </div>
        )
    }


export default MerchantDB;