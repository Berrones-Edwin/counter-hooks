import React from "react";
import PropTypes from 'prop-types'

export default function PrimeraApp({ saludo,sub }) {
    // const saludo = "Este es un saludo";
    // console.log("hola",saludo)
    return (
        <>
            <h1>{saludo}</h1>
            <p>lorem ipsum</p>
            <p>{sub}</p>
        </>
    );
}

PrimeraApp.prototypes ={
    saludo : PropTypes.string.isRequired
}

PrimeraApp.defaultProps = {
    sub:'Hello world'
}
