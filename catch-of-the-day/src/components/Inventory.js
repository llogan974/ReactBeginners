import React from "react";
import AddFishForm from './AddFishForm';
import EditFishForm from "./EditFishForm";

class Inventory extends React.Component {
    render() {
        return (

            <div className="inventory">
                <h2>Inventory</h2>
                {/* Loop over the fish in App.js. Object.keys must be wrapped around it in order to loop */}
                {Object.keys(this.props.fishes).map( key => <EditFishForm
                key={key}
                // You cannot access the key as a key, it must be passed as something else
                index={key}
                fish={this.props.fishes[key]}
                updateFish={this.props.updateFish}
                deleteFish={this.props.deleteFish}

                />)}
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