import React from "react";
import {formatPrice} from '../helpers';

class Fish extends React.Component {
    // What to do if the button is clicked
    // This could be added inline to the button,
    // but we put it here
    handleClick = () => {

        // When clicking the button on the menu,
        // pass the index to "add to Order"
        this.props.addToOrder(this.props.index);
    }

    render() {
        const {image, name, price, desc, status} = this.props.details;

        const isAvailable = status === 'available';

        return (
            <li className="menu-fish">FISHY!
                <img src={image} alt={name}/>
                <h3 className="fish-name">
                    {name}
                    <span className="price">{formatPrice(price)}</span>
                </h3>
                <p>{desc}</p>
                <button disabled={!isAvailable} onClick={this.handleClick}>{isAvailable ? 'Add to Order' : 'Sold out!'}</button>
            </li>

        )
    }
}

export default Fish;