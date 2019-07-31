import React from "react";
import AddFishForm from './AddFishForm';

class Inventory extends React.Component {
    render() {
        return (

            <div className="inventory">
                <h2>Inventory</h2>
                {/* AddFish is being passed in via props */}
                {/* This component calls the function "addFish" in app.js. this.props.addFish is being called on the addFishForm */}
                {/* AddFishForm is a component */}
                <AddFishForm addFish={this.props.addFish}/>
                <button onClick={this.props.loadSampleFishes}>Load Sample Fishes</button>

            </div>
        )
    }
}

export default Inventory;