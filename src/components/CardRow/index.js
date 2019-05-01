import React from 'react'
import Card from "../Cards/index"

function CardRow (){
    return(
        <div className="row">
        <Card 
        title="Tester"
        description="Test"
        image="https://i.imgur.com/uSqRa4h.png"/>
        <Card 
        title="Tester2"
        description="Test2"
        image="https://i.imgur.com/UmsI6vr.jpg"/>
        <Card 
        title="Tester3"
        description="Test3"
        image="https://i.imgur.com/5x2TAdI.jpg"/>
        </div>
    )
}

export default CardRow;