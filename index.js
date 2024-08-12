// const url = 'https://irctc1.p.rapidapi.com/api/v1/searchTrain?query=190';
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'x-rapidapi-key': 'ec3edb9532mshaf14e6b7f03c3dbp1375fajsnefa6578e9f14',
// 		'x-rapidapi-host': 'irctc1.p.rapidapi.com'
// 	}
// };

// async function searchtrain() {
// 	try {
// 		const response = await fetch(url, options);
// 		const result = await response.json(); // Parse the result as JSON

// 		const postoptions = {
// 			method: 'POST',
// 			headers: {
// 				'Content-Type': 'application/json'
// 				
// 			},
// 			body: JSON.stringify(result)
// 		};

// 		const postResponse = await fetch("http://localhost:3000/searchtrain", postoptions);
// 		if (postResponse.ok) {
// 			console.log("Data inserted successfully");
// 		} else {
// 			console.error("Failed to insert data");
// 		}
// 	} catch (error) {
// 		console.error(error);
// 	}
// }

// searchtrain();


//train between stations
// const fromStationCode = 'NDLS'; 
// const toStationCode = 'BCT'; 
// const dateOfJourney = '2023-08-01'; 

// const url = `https://irctc1.p.rapidapi.com/api/v3/trainBetweenStations?fromStationCode=${fromStationCode}&toStationCode=${toStationCode}&dateOfJourney=${dateOfJourney}`;
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'x-rapidapi-key': 'ec3edb9532mshaf14e6b7f03c3dbp1375fajsnefa6578e9f14',
// 		'x-rapidapi-host': 'irctc1.p.rapidapi.com'
// 	}
// };

// async function trainbtwsts() {
// 	try {
// 		const response = await fetch(url, options);
// 		const result = await response.json(); // Assuming the response is JSON
// 		console.log(result);
// 	} catch (error) {
// 		console.error(error);
// 	}
// }

// train between stations
// const url =
//   'https://irctc1.p.rapidapi.com/api/v3/trainBetweenStations?fromStationCode=VSKP&toStationCode=HYB&dateOfJourney=2024-08-08';
// const options = {
//   method: "GET",
//   headers: {
//     "x-rapidapi-key": '569e8d1df8msheeb82a51f64b466p1b81fcjsn689628aa9204',
//     "x-rapidapi-host": "irctc1.p.rapidapi.com",
//   },
// };

// let apiCalled = false; // Flag to track API call

// async function train() {
//   if (apiCalled) return; // Prevent multiple API calls

//   apiCalled = true; // Set the flag to true to indicate the API call is being made

//   try {
//     const response = await fetch(url, options);
//     if (!response.ok) {
//       throw new Error(`HTTP error! status: ${response.status}`);
//     }
//     const result = await response.json();
//     console.log("Fetched data: ", result);

//     // Define the POST options
//     const postOptions = {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify(result)
//     };

//     // Make the POST request
//     const postResponse = await fetch("http://localhost:3000/trainbtwsts", postOptions);
//     if (postResponse.ok) {
//       console.log("Data inserted successfully");
//     } else {
//       console.error("Failed to insert data. Status: ", postResponse.status);
//     }
//   } catch (error) {
//     console.error("Error: ", error);
//   }
// }

// train(); // Call the function once

// If you need to call train() based on an event (e.g., button click), add an event listener:
// document.getElementById("yourButtonId").addEventListener("click", train);


// const url = `https://irctc1.p.rapidapi.com/api/v3/getPNRStatus?pnrNumber=${4335734389}`;
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'x-rapidapi-key': 'd19dd64f62mshdb3489095c3710cp189221jsn764b62896537',
// 		'x-rapidapi-host': 'irctc1.p.rapidapi.com'
// 	}
// };
// let apiCalled = false; 
// async function pnr(){
//     if (apiCalled) return; // Prevent multiple API calls

//    apiCalled = true; 
// try {
// 	const response = await fetch(url, options);
//     if (!response.ok) {
//              throw new Error(`HTTP error! status: ${response.status}`);
//             }
// 	const result = await response.json();
// 	console.log(result);
//     const postOptions = {
//               method: 'POST',
//               headers: {
//                 'Content-Type': 'application/json'
//               },
//               body: JSON.stringify(result)
//             };
        
//             // Make the POST request
//             const postResponse = await fetch("http://localhost:3000/pnr", postOptions);
//             if (postResponse.ok) {
//               console.log("Data inserted successfully");
//             } else {
//               console.error("Failed to insert data. Status: ", postResponse.status);
//             }
// } catch (error) {
// 	console.error(error);
// }
// }
