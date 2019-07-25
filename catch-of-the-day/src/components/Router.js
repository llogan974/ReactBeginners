import React from "react";
import {BrowserRouter, Route, Switch } from 'react-router-dom';
import StorePicker from './storepicker';
import App from "./App";
import NotFound from "./NotFound";

const Router = () => (
<BrowserRouter>
{/* First it will try the first route, then try the second, then fallback to the "not found" */}
    <Switch>
    {/* This is the primary route in the URL */}
        <Route exact path="/" component={StorePicker} />

        {/* This is the secondary route, and will allow anything to be typed in after "/store" */}
        <Route path="/store/:storeId" component={App} />

        {/* If anything else is typed in, it will give the 404 page */}
        <Route component={NotFound} />

    </Switch>
</BrowserRouter>
);

export default Router;