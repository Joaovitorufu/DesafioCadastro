import React from 'react';
const {Redirect} = require("react-router-dom")

const PrivateRoute = () => {
    return <Redirect to ="/home"></Redirect>

}

export default PrivateRoute;

