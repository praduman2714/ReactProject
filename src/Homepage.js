import React from 'react';
import Form from './Form';
export let nameRef = React.createRef();
export let emailRef = React.createRef();


function Homepage() {
    return (
        <>
            <div>
                <h1>HomePage</h1>
                
                <Form />
            </div>
        </>)
    
}

export default Homepage;
