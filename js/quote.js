// https://theysaidso.com/api/#qod

// function get_quote_of_the_day() {
//   var xhttp = new XMLHttpRequest();
//   xhttp.onreadystatechange = function () {
//     if (this.readyState == 4 && this.status == 200) {
//       // Access the result here
//       alert(this.responseText);
//     }
//   };
//   xhttp.open("GET", "https://quotes.rest/qod?category=inspire", true);
//   xhttp.setRequestHeader("Content-type", "application/json");
//   xhttp.setRequestHeader("X-Theysaidso-Api-Secret", "YOUR API HERE");
//   xhttp.send();
// }

// get_quote_of_the_day();
// https://quotes.rest/qod
// https://randomuser.me/api/
const getQuote = () => {
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
      // console.log(resData.contents.quotes[0].quote);
      console.log(resData.results[0].name.first);
      console.log(resData.results[0].name.last);
    })
    .catch((error) => {
      console.log(error);
    });
};

const sayHello = () => {
  console.log("I was clicked");
};

// const quoteGenerator = document.querySelector(".button");
// quoteGenerator.addEventListener("click", getQuote);
document.getElementById("retrieveQuote").addEventListener("click", sayHello);
// getQuote();
// document.getElementById();
