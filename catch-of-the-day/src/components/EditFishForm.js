import React from "react";

/*
This controls the form to update the fish inventory

*/


// Always create the class
class EditFishForm extends React.Component {
    // Create a function for when data is put into the input fields for a fish
    handleChange = (event) => {
        // When the form is updated, the info needs to update app.js
        // Take a copy of the current fish, and overwrite what changes
        const updatedFish = {
            ...this.props.fish,
            [event.currentTarget.name]: event.currentTarget.value
        };
        // You cannot access the key, so "index" is created with a value of the key
        this.props.updateFish(this.props.index, updatedFish)

    }

    // Render it onto the page
    render() {
        return <div className="fish-edit">

        {/* Set the value of the form to be the value from Props */}
    <input type="text" name="name" onChange={this.handleChange} value={this.props.fish.name}/>
    <input type="text" name="price" onChange={this.handleChange} value={this.props.fish.price}/>
    <select type="text" name="status" onChange={this.handleChange} value={this.props.fish.status}>
        <option value="available">Fresh!</option>
        <option value="unavailable">Sold out!</option>
    </select>
    <input type="text" name="desc" onChange={this.handleChange} value={this.props.fish.desc}/>
    <input type="text" name="image" onChange={this.handleChange} value={this.props.fish.image}/>
    {/* you can use an inline function, rather than create a whole new funtion */}
    <button onClick={() => this.props.deleteFish(this.props.index)}>Remove Fish</button>


        </div>
    }
}

// Add export first thing when creating a component
export default EditFishForm;