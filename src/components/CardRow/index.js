import React from 'react'
import Card from "../Cards/index"

function CardRow (){
    return(
        <div className="row">
        <Card 
        title="Tester"
        description="Test"
        image="https://i.imgur.com/ELJlQz1.jpg"/>
        <Card 
        title="Tester2"
        description="Test2"
        image="https://i.imgur.com/ELJlQz1.jpg"/>
        <Card 
        title="Tester3"
        description="Test3"
        image="https://i.imgur.com/wX9MX57.jpg"/>
        </div>
    )
}

export default CardRow;