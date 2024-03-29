//  import React from 'react';
// import Titles from './components/Titles'
// import Form from './components/Form'
// import Weather from './components/Weather'

//  const API_KEY ="052c4b1b14432e85da659cf29b212ed8";

//  class App extends React.Component {
//   state = {
//     temperature: undefined,
//     city: undefined,
//     country: undefined,
//     humidity: undefined,
//     description: undefined,
//     error: undefined
//   }
//   getWeather = async (e) => {
//     e.preventDefault();
//     const city= e.target.elements.city.value;
//     const country= e.target.elements.country.value;
//     const api_call = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);  
//     const data = await api_call.json();
//     if (city && country) {
//       this.setState({
//       temperature: data.main.temp,
//       city: data.name,
//       country: data.sys.country,
//       humidity: data.main.humidity,
//       description: data.weather[0].description,
//       error: ""
//     })
//     }
//     else
//     {
//       this.setState({
//       temperature: undefined,
//       city: undefined,
//       country: undefined,
//       humidity: undefined,
//       description: undefined,
//       error: "Please enter the value"
//     })
//     }

//   }

//   render(){
//     return(  
//       <div>
//         <div className="wrapper">
//           <div className="main">
//             <div className="container">
//               <div className="row">
//                 <div className="col-md-5 title-container">
//                   <Titles />
//                 </div>
//                 <div className="col-md-7 form-container">
//                   <Form getWeather={this.getWeather}/>
//                   <Weather 
//                     temperature={this.state.temperature}
//                     city={this.state.city}
//                     country={this.state.country}
//                     humidity={this.state.humidity}
//                     description={this.state.description}
//                     error={this.state.error}
//                   />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     ); 
//   }
//  }

import React from 'react';
import axios from 'axios'
import Card from './components/Card';
import logoImg from './images/logo.png'

const GQL_PREVIEW_URL = `https://mycheckoutv2.test.devappdirect.me/api/graphql/preview`

const TENANT = 'CHECKOUT'
const JSESSIONID = '86F2A5B6381CE3F4BC56413163284B48-n1';
const XSRFTOKEN = '0d2ce401-07ff-4b4f-bc65-a7f19e298196';

const input = {
	items: [
		{
			pricingPlanId: '2bae35cb-e472-4f89-96fb-ea56f34ecb58',
			associations: []
		}
	]
}

const token = "eyJraWQiOiIwNWFhMGQ3OS0yNTc2LTQyZWMtODkwYi0wNzc3NTM1YjViYjEiLCJhbGciOiJSUzI1NiIsInR5cGUiOiJKV1QifQ.eyJhdWQiOiJhdXRoeiBtYXJrZXRwbGFjZSIsImlzcyI6ImF1dGh6IiwidGVuYW50IjoiQ0hFQ0tPVVQiLCJwZXJtaXNzaW9ucyI6WyJST0xFX1NBTEVTX1NVUFBPUlQiLCJST0xFX0NIQU5ORUxfU1VQUE9SVCIsIlJPTEVfQklMTElOR19BRE1JTiIsIlJPTEVfQ0hBTk5FTF9BRE1JTiIsIlJPTEVfUkVQT1JUU19DSEFOTkVMX0FETUlOIiwiUk9MRV9DSEFOTkVMX1BST0RVQ1RfU1VQUE9SVCIsIlJPTEVfREVWRUxPUEVSIiwiUk9MRV9VU0VSIiwiUk9MRV9TWVNfQURNSU4iLCJkbmEudmlzaXRvcm1ldHJpY3MucmVhZC5hY2NvdW50IiwicmVwb3J0aW5nLnJ1bnMuY3JlYXRlLmFjY291bnQiLCJiaWxsaW5nLnN1YnNjcmlwdGlvbi5yZWFkLmFjY291bnQiLCJpYW0uYWNjb3VudC5yZWFkLnNlbGYiLCJmdWxmaWxsbWVudC5mdWxmaWxsbWVudHMucmVhZC52ZW5kb3IiLCJiaWxsaW5nLnN1YnNjcmlwdGlvbi5vdmVycmlkZS51cGRhdGUuYWNjb3VudCIsImJpbGxpbmcucmV2ZW51ZXNoYXJlcy5yZWFkLmluc3RhbmNlIiwic3RvcmVmcm9udC5hcHBtYXJrZXQucmVhZHdyaXRlLmluc3RhbmNlIiwiYmlsbGluZy5jdXN0b21jb21taXNzaW9ucy5zYXZlLnRlbmFudCIsImJpbGxpbmcucHJpY2luZy5lZGl0aW9ucHJpY2luZy5jaGFubmVsLnJlYWQiLCJiaWxsaW5nLnByaWNpbmcuZWRpdGlvbnByaWNpbmcuY2hhbm5lbC53cml0ZSIsImJpbGxpbmcucHJpY2luZy5lZGl0aW9ucHJpY2luZy5jaGFubmVsLnB1Ymxpc2giLCJwcmljaW5nLmVkaXRpb25wcmljaW5nLnJlYWQudGVuYW50IiwicHJpY2luZy5lZGl0aW9ucHJpY2luZy53cml0ZS50ZW5hbnQiLCJwcmljaW5nLmVkaXRpb25wcmljaW5nLnB1Ymxpc2gudGVuYW50IiwicHJvZHVjdC5wcm9kdWN0cy5yZWFkLnRlbmFudCIsInByb2R1Y3QucHJvZHVjdHMud3JpdGUudGVuYW50IiwicHJvZHVjdC5pbnRlZ3JhdGlvbnMucmVhZC50ZW5hbnQiLCJwcm9kdWN0LmludGVncmF0aW9ucy53cml0ZS50ZW5hbnQiLCJwcm9kdWN0LmVkaXRpb25zLnJlYWQudGVuYW50IiwiYmlsbGluZy5wcmljZWJvb2sucmVhZHdyaXRlLmluc3RhbmNlIiwiZG5hLm1hcmtldHBsYWNlZGFzaGJvYXJkLnJlYWQudGVuYW50IiwiYXNzaXN0ZWQtc2FsZXMub3Bwb3J0dW5pdGllcy5jcmVhdGUudGVuYW50IiwiYXNzaXN0ZWQtc2FsZXMub3Bwb3J0dW5pdGllcy5yZWFkLnRlbmFudCIsImFzc2lzdGVkLXNhbGVzLm9wcG9ydHVuaXRpZXMucmVhZHdyaXRlLnRlbmFudCIsImFzc2lzdGVkLXNhbGVzLm9wcG9ydHVuaXR5LWl0ZW1zLnJlYWQudGVuYW50IiwiYXNzaXN0ZWQtc2FsZXMub3Bwb3J0dW5pdHktaXRlbXMuY3JlYXRlLnRlbmFudCIsImFzc2lzdGVkLXNhbGVzLm9wcG9ydHVuaXR5LWl0ZW1zLnJlYWR3cml0ZS50ZW5hbnQiLCJhc3Npc3RlZC1zYWxlcy5vcHBvcnR1bml0aWVzLmZpbmFsaXplLnRlbmFudCIsImFzc2lzdGVkLXNhbGVzLm9wcG9ydHVuaXRpZXMuY2hhbmdlLW93bmVyLnRlbmFudCIsImlhbS5jb21wYW55LWJpbGxpbmctYWRkcmVzcy5yZWFkd3JpdGUudGVuYW50IiwiaWFtLmNvbXBhbnktYmlsbGluZy1hZGRyZXNzLmFjdGl2YXRpb24udGVuYW50IiwicHJvZHVjdC5hc3NvY2lhdGlvbnMucmVhZC50ZW5hbnQiLCJwcm9kdWN0LmFzc29jaWF0aW9ucy53cml0ZS50ZW5hbnQiLCJub3RpZmljYXRpb25zLm9wdE91dC5yZWFkd3JpdGUudGVuYW50IiwibmF2aWdhdGlvbi5wdWJsaWNhdGlvbnMud3JpdGUuaW5zdGFuY2UiLCJyZXBvcnRpbmcucmVwb3J0c3NldHRpbmdzLmxpc3QudGVuYW50IiwicmVwb3J0aW5nLnJlcG9ydHNzZXR0aW5ncy5jcmVhdGUudGVuYW50IiwiYmlsbGluZy5zdWJzY3JpcHRpb24uY2FuY2VsbGF0aW9uLnRlcm1pbmF0ZS50ZW5hbnQiLCJiaWxsaW5nLnByaWNpbmcuZXhjaGFuZ2VyYXRlLnJlYWQuaW5zdGFuY2UiLCJhcHB3aXNlLmRlZmF1bHQtbWFya2V0cGxhY2UtbWFuYWdlci1mZWVkLnJlYWQuc2VsZiIsImJpbGxpbmcucHJpY2luZy5leGNoYW5nZXJhdGUud3JpdGUuaW5zdGFuY2UiLCJiaWxsaW5nLnJlcXVlc3RHcm91cC5yZWFkLnRlbmFudCIsInJlcG9ydGluZy5ydW5zLmNyZWF0ZS50ZW5hbnQiLCJiaWxsaW5nLnN1YnNjcmlwdGlvbi5yZWFkLnRlbmFudCIsInZpc3VhbGl6YXRpb24ubWV0cmljcy5hdXRoc3RyYXRlZ3kubWFya2V0cGxhY2UucmVhZCIsInByb2R1Y3QtdXBsb2FkZXItYXBpLnByb2R1Y3RzLnJlYWQudGVuYW50IiwicHJvZHVjdC11cGxvYWRlci1hcGkucHJvZHVjdHMud3JpdGUudGVuYW50IiwiaWFtLmFjY291bnQucmVhZHdyaXRlLnRlbmFudCIsInByb2R1Y3QtdXBsb2FkZXItYXBpLmNhdGVnb3J5LnJlYWQudGVuYW50IiwicHJvZHVjdC11cGxvYWRlci1hcGkuY2F0ZWdvcnkud3JpdGUudGVuYW50IiwibG9jYWxpemF0aW9uLmN1c3RvbWl6YXRpb24ucmVhZHdyaXRlLnRlbmFudCIsImlhbS51c2VyLnJlYWR3cml0ZS50ZW5hbnQiLCJiaWxsaW5nLnN1YnNjcmlwdGlvbi5leHRlbmQuZnJlZS50cmlhbC50ZW5hbnQiLCJiaWxsaW5nLXVzYWdlLmZpbGUtdXBsb2FkLndyaXRlLmluc3RhbmNlIiwidGF4LmF2YWxhcmFhY2NvdW50cy5yZWFkLmluc3RhbmNlIiwidGF4LmF2YWxhcmFhY2NvdW50cy5jcmVhdGUuaW5zdGFuY2UiLCJpYW0uYWRhcHRpdmV0ZXJtcy5yZWFkd3JpdGUuaW5zdGFuY2UiLCJ0YXguYXZhbGFyYWFjY291bnRzLndyaXRlLmluc3RhbmNlIiwiZnVsZmlsbG1lbnQuZnVsZmlsbG1lbnRzLnJlYWQudGVuYW50IiwiZnVsZmlsbG1lbnQuZnVsZmlsbG1lbnRzLndyaXRlLnRlbmFudCIsImlhbS5hY2NvdW50LWFzc29jaWF0aW9uLnJlYWR3cml0ZS50ZW5hbnQiLCJ1cGxvYWRlci5wcm9kdWN0cy5yZWFkLnRlbmFudCIsInVwbG9hZGVyLnByb2R1Y3RzLndyaXRlLnRlbmFudCIsInVwbG9hZGVyLmNhdGVnb3J5LnJlYWQudGVuYW50IiwidXBsb2FkZXIuY2F0ZWdvcnkud3JpdGUudGVuYW50IiwidXBsb2FkZXIuYWN0aXZpdGllcy5yZWFkLnRlbmFudCIsImJpbGxpbmcuc3Vic2NyaXB0aW9ucy5yZWFkLnRlbmFudCIsImJpbGxpbmcuc3Vic2NyaXB0aW9uLm92ZXJyaWRlLnVwZGF0ZS50ZW5hbnQiLCJ3ZWJob29rcy53ZWJob29rcy5yZWFkLnRlbmFudCIsIndlYmhvb2tzLndlYmhvb2tzLndyaXRlLnRlbmFudCIsImJpbGxpbmctdXNhZ2UuZmlsZS11cGxvYWQtY3JlYXRlLWxpbmsud3JpdGUuaW5zdGFuY2UiLCJiaWxsaW5nLXVzYWdlLnJlYWRlci53cml0ZS5pbnN0YW5jZSIsImJpbGxpbmctdXNhZ2UucmVhZGVyLnJlYWQuaW5zdGFuY2UiLCJwcm9kdWN0LnByb2R1Y3RzLndyaXRlLnZlbmRvciIsImJpbGxpbmcucHJpY2luZy5lZGl0aW9ucHJpY2luZy5jb21wYW55LnJlYWQiLCJiaWxsaW5nLnByaWNpbmcuZWRpdGlvbnByaWNpbmcuY29tcGFueS53cml0ZSIsImJpbGxpbmcucHJpY2luZy5lZGl0aW9ucHJpY2luZy5jb21wYW55LnB1Ymxpc2giLCJwcm9kdWN0LnByb2R1Y3RzLnJlYWQudmVuZG9yIiwicHJpY2luZy5lZGl0aW9ucHJpY2luZy5yZWFkLnZlbmRvciIsInByaWNpbmcuZWRpdGlvbnByaWNpbmcud3JpdGUudmVuZG9yIiwicHJpY2luZy5lZGl0aW9ucHJpY2luZy5wdWJsaXNoLnZlbmRvciIsInByb2R1Y3QuaW50ZWdyYXRpb25zLnJlYWQudmVuZG9yIiwicHJvZHVjdC5pbnRlZ3JhdGlvbnMud3JpdGUudmVuZG9yIiwicHJvZHVjdC5lZGl0aW9ucy5yZWFkLnZlbmRvciIsInByb2R1Y3QuZWRpdGlvbnMud3JpdGUudmVuZG9yIiwicHJvZHVjdC5pbnZlbnRvcmllcy5yZWFkLnZlbmRvciIsInByb2R1Y3QuaW52ZW50b3JpZXMud3JpdGUudmVuZG9yIiwiaWFtLmFwcGZsb3ctYXBwbGljYXRpb25zLndyaXRlLmluc3RhbmNlIiwiYmlsbGluZy5yZXF1ZXN0R3JvdXAucmVhZC52ZW5kb3IiLCJwcm9kdWN0LXVwbG9hZGVyLWFwaS5wcm9kdWN0cy5yZWFkLnZlbmRvciIsInByb2R1Y3QtdXBsb2FkZXItYXBpLnByb2R1Y3RzLndyaXRlLnZlbmRvciIsInVwbG9hZGVyLnByb2R1Y3RzLnJlYWQudmVuZG9yIiwidXBsb2FkZXIucHJvZHVjdHMud3JpdGUudmVuZG9yIiwidXBsb2FkZXIuYWN0aXZpdGllcy5yZWFkLnZlbmRvciIsImFzc2lzdGVkLXNhbGVzLm9wcG9ydHVuaXRpZXMuY3JlYXRlLmFnZW50IiwiYXNzaXN0ZWQtc2FsZXMub3Bwb3J0dW5pdGllcy5yZWFkLmFnZW50IiwiYXNzaXN0ZWQtc2FsZXMub3Bwb3J0dW5pdGllcy5yZWFkd3JpdGUuYWdlbnQiLCJhc3Npc3RlZC1zYWxlcy5vcHBvcnR1bml0eS1pdGVtcy5jcmVhdGUuYWdlbnQiLCJhc3Npc3RlZC1zYWxlcy5vcHBvcnR1bml0eS1pdGVtcy5yZWFkd3JpdGUuYWdlbnQiLCJhc3Npc3RlZC1zYWxlcy5vcHBvcnR1bml0aWVzLnN1Ym1pdC5hZ2VudCIsImlhbS51c2VyLnJlYWR3cml0ZS5hZ2VudCIsImlhbTpkYXRhY29ubmVjdGlvbm1nbXQuY29ubmVjdGlvbi5jb21wYW55LmRlbGV0ZSIsImlhbS5kYXRhY29ubmVjdGlvbnMuZGVsZXRlLmNvbXBhbnkiLCJpYW0uYWNjb3VudC5yZWFkd3JpdGUuc2VsZiIsImlhbS51c2VyLnJlYWR3cml0ZS5hY2NvdW50Iiwid2ViaG9va3Mud2ViaG9va3MucmVhZC5hY2NvdW50Iiwid2ViaG9va3Mud2ViaG9va3Mud3JpdGUuYWNjb3VudCIsImlhbTpkYXRhY29ubmVjdGlvbm1nbXQuY29ubmVjdGlvbi5zZWxmLmRlbGV0ZSIsImlhbTpkYXRhY29ubmVjdGlvbm1nbXQuY29ubmVjdGlvbi5zZWxmLnJlYWQiLCJpYW06ZGF0YWNvbm5lY3Rpb25tZ210LmVudGl0bGVtZW50cy5zZWxmLnJlYWQiLCJpYW0uZGF0YWNvbm5lY3Rpb25zLmRlbGV0ZS5zZWxmIiwiaWFtLmRhdGFjb25uZWN0aW9ucy5yZWFkLnNlbGYiLCJpYW0uZGF0YUNvbm5lY3RvckVudGl0bGVtZW50cy5yZWFkLnNlbGYiLCJpYW0uYXBwZmxvdy1hcHBsaWNhdGlvbnMucmVhZC5zZWxmIiwiaWFtLmFwcGZsb3ctbGF1bmNod29ya2Zsb3cuY3JlYXRlLnNlbGYiLCJpYW0uYXBwZmxvdy1vcmJpdHdvcmtmbG93LmNyZWF0ZS5zZWxmIiwidmlzdWFsaXphdGlvbi5tZXRyaWNzLnJlYWQuaW5zdGFuY2UiLCJiaWxsaW5nLnN1YnNjcmlwdGlvbi5yZWFkLnNlbGYiLCJiaWxsaW5nLnByaWNpbmcuZXhjaGFuZ2VyYXRldjIucmVhZC50ZW5hbnQiLCJpYW0udXNlci5yZWFkLmFjY291bnQiLCJpYW0udXNlci5yZWFkLnNlbGYiLCJiaWxsaW5nLnByaWNpbmctcHJpY2luZ3BsYW4tY29udHJhY3QtcHJpY2UucmVhZC5pbnN0YW5jZSIsImNyeXB0by5jaGFyZ2Uud3JpdGUudGVuYW50IiwiZnVsZmlsbG1lbnQuZnVsZmlsbG1lbnRzLnJlYWQuc2VsZiIsImJpbGxpbmcuc3Vic2NyaXB0aW9uLm92ZXJyaWRlLnVwZGF0ZS5zZWxmIl0sImNsaWVudElkIjoibW9ub2xpdGgiLCJzdWIiOiJkYjQxMzUyNS0wMmI5LTQ0YTYtOGE1Ny04ZjIzNWJlYzQ0OWIiLCJ0eXBlIjoiVVNFUiIsImNvbXBhbnlVdWlkIjoiYzA3ZTRlNWItODI3NC00Nzk5LWFhNmQtMDdkYTZiMWIxNTg3Iiwic2lkIjoiODZGMkE1QjYiLCJpYXQiOjE2Nzg3MjUzMjMsImV4cCI6MTY3ODcyNTYyM30.P7WpARfv-45qwKN5OYb4MnSkAFRt_uWMSH-iv72NvHxyt0l4bOAoKT8bf4ULx1ek3vW7FIL6ctR72kUe960tixTicBxpjefi1NHzm3y-zpA_ozK-o9C2uxc6XmXeb38csFdC4I3QIK478lSCv5K9tEUteJ_SXDaCKNVO8nIvf0rlLl5bSOtA-AtOKoL6ej2pwEtjD2FRPQnBApTu6RZmwp2V2zr3vzTIL9Pnx-BFh4qwyUyDMMl9QwWHIlF6mn3OnvZtwvqjhvMY3cAkQCIquTf6LakOBYkM9ty6qDHfqIeGf7eD3gIwCMT52QTXmk6NaIc9elEQD6mW8t6X68WmfQ";

const App = () => {

	const addToCartAPI = () => {
		let data = JSON.stringify({
			query: 'mutation addItemsToCart($input: AddItemsInput!) {addItemsToCart(input: $input) {cart {id,items {id}}}}',
			variables: { input }
		})

		let config = {
			method: 'POST',
			url: GQL_PREVIEW_URL,
			headers: {
				'AD-Tenant': TENANT,
				'Content-Type': 'application/json',
				'Ad-Authorization': `Bearer ${token}`
			},
			data
		}
		axios(config)
			.then((response) => {
				console.log("respone---->", JSON.stringify(response.data))
				window.open(`https://mycheckoutv2.test.devappdirect.me/checkout/cart/?jsessionID=${JSESSIONID}&xsrfToken=${XSRFTOKEN}`);
			})
			.catch((error) => {
				console.log("error--->", error)
			})
	}

	return (
		<>
			<div
				style={{
					textAlign: 'center',
					background: 'rgb(0, 118, 206)',
					color: 'white',
					display: 'flex',
					justifyContent: 'space-between',
					alignItems: 'center',
					paddingInline: '6em',
				}}>
				<img style={{ height: '100px', }} src={logoImg} alt='logo' />
				{/* <div>
					<a href="/">
						<h2>Login</h2>
					</a>
				</div> */}
			</div>
			<div style={{
				minHeight: '70vh',
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'center'
			}}>
				<div style={{
					display: 'flex',
					maxWidth: '1080px',
					gap: '1em',
					margin: '0 auto',
					minHeight: '400px',
					overflow: 'scroll',
					alignItems: 'center',
				}}>
					<Card addToCartAPI={addToCartAPI} heading='Google Pixel 3a' imgUrl='https://www.apowersoft.com/wp-content/uploads/2019/05/google-pixel-3a-1.jpg' />
					<Card addToCartAPI={addToCartAPI} heading='Microsoft 365' imgUrl='https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Microsoft_Office_logo_%282019%E2%80%93present%29.svg/2048px-Microsoft_Office_logo_%282019%E2%80%93present%29.svg.png' />
					<Card addToCartAPI={addToCartAPI} heading='Slack for enterprise' imgUrl='https://yt3.googleusercontent.com/ytc/AL5GRJUyNSclWVdzjF267_EFUDHth4IXcUlcQCjEfNTvSw=s900-c-k-c0x00ffffff-no-rj' />
					<Card addToCartAPI={addToCartAPI} heading='Microsoft 365 NEW' imgUrl='https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Microsoft_365_%282022%29.svg/560px-Microsoft_365_%282022%29.svg.png' />
					{/* <Card addToCartAPI={addToCartAPI} heading='Godaddy Domains' imgUrl='https://pbs.twimg.com/profile_images/1278344282793840640/5nxHLp8o_400x400.jpg' /> */}
					<Card addToCartAPI={addToCartAPI} heading='PostMan' imgUrl='https://yt3.googleusercontent.com/X-rhKMndFm9hT9wIaJns1StBfGbFdLTkAROwm4UZ3n9ucrBky5CFIeeZhSszFXBgQjItzCD0SA=s900-c-k-c0x00ffffff-no-rj' />
					<Card addToCartAPI={addToCartAPI} heading='Cisco Webex' imgUrl='https://res.cloudinary.com/apideck/image/upload/v1646261331/marketplaces/ckp6oizgbgvm00a49vicntn6d/listings/webex-symbol-color_g7rrxa.png' />
				</div>
			</div>
		</>


	)
}

export default App;

