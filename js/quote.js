// const getQuote = () => {
//   // e.preventDefault();
//   console.log("running function");

//   // Call the fetch function on the randomuser.me api
//   let userPromise = fetch("https://randomuser.me/api/");
//   console.log("Logging promise from fetch function");
//   console.log(userPromise);

//   // Evaluate the promise returned from the fetch function
//   userPromise
//     .then((response) => {
//       console.log("Response, waiting to parse...", response);

//       // Parse the Response object from the promise using the .json() method
//       return response.json();
//     })
//     // Extract the data from the promise returned by response.json()
//     .then((resData) => {
//       console.log("Data Parsed:...", resData);
//       // console.log(resData.contents.quotes[0].quote);
//       console.log(resData.results[0].name.first);
//       console.log(resData.results[0].name.last);
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// };

const getQuote = () => {
  // e.preventDefault();
  console.log("running function");

  // Call the fetch function on the randomuser.me api
  let userPromise = fetch("https://quotes.rest/qod");
  console.log("Logging promise from fetch function");
  console.log(userPromise);

  // Evaluate the promise returned from the fetch function
  userPromise
    .then((response) => {
      console.log("Response, waiting to parse...", response);

      // Parse the Response object from the promise using the .json() method
      return response.json();
    })
    // Extract the data from the promise returned by response.json()
    .then((resData) => {
      console.log("Data Parsed:...", resData);
      console.log(resData.contents.quotes[0].quote);
      document.getElementById("qod").innerText =
        resData.contents.quotes[0].quote;
    })
    .catch((error) => {
      console.log(error);
    });
};

// document.getElementById("retrieveQuote").addEventListener("click", getQuote);
getQuote();
