import React from 'react';

// const Form = props => (
// 	<form onSubmit={props.getWeather}>
// 		<input type="text" name="city" placeholder="City..."/>
// 		<input type="text" name="country" placeholder="Country..."/>  
// 		<button>Get Weather</button>
// 	</form>
// );

const Form = props => (
	<button onClick={() => props.addToCartAPI()}>Add to cart</button>
);

export default Form;