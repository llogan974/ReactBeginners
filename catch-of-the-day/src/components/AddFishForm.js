import React from "react";

class AddFishForm extends React.Component {

// Create the references from the form.
    nameRef = React.createRef();
    priceRef = React.createRef();
    statusRef = React.createRef();
    descRef = React.createRef();
    imageRef = React.createRef();

    // Create the function when anything is submitted
    // This function returns all values as an object
    createFish = event => {
        // Prevent page reload
        event.preventDefault();

        // Define each ref in the object
        const fish = {
            // name is the object, "this" is the current value, nameRef is the reference, current is the current value
            // This function will receive each of these values
            name: this.nameRef.current.value,
            price: parseFloat(this.priceRef.current.value),
            status: this.statusRef.current.value,
            desc: this.descRef.current.value,
            image: this.imageRef.current.value
        };
        // Return the fish object. run "addFish" function on the object, and pass to props
        this.props.addFish(fish);
        // Reset the form
        event.currentTarget.reset();

    };

    render() {
        return (
            // On Submit will run the function listed above
            <form className="fish-edit" onSubmit={this.createFish}>
                <input name="name" ref={this.nameRef} type="text" placeholder="Name" />
                <input name="price" ref={this.priceRef} type="text" placeholder="Price" />
                <select name="status" ref={this.statusRef}>
                    <option value="available">FRESH!</option>
                    <option value="unavailable">Sold Out!</option>
                </select>

                <textarea name="desc" ref={this.descRef} placeholder="Desc" />
                <input name="image" ref={this.imageRef} type="text" placeholder="Image" />
                <button type="submit"> + Add Fish</button>
            </form>
        );
    }
}

export default AddFishForm;