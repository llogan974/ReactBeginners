// let's go!
// the second react is lower case
import React from 'react';

// We need a secondary item to attach to index.html
import { render } from 'react-dom';

// Import each component
import Router from "./components/Router";


// When css is updated, it will update the page live
import "./css/style.css";



// render takes two things: HTMK and dom elements:
// The HTML elements can be written as self closing
render(<Router />, document.querySelector('#main'));