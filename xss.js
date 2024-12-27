function getElementByXpath(path) {
  return document.evaluate(path, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
}

function removeNonAlphanumeric(inputString) {
    return inputString.replace(/[^A-Z\d\s]/gi, '');
};

function getAmigoSecreto() {
   return $("#xss-dos-guri")[0].innerHTML.split('amigoTireiAberto')[1].split('strong')[1]
};

function tiago() {
  alert("Trollados by rdz");
  alert("Você tirou: " + getAmigoSecreto())
}

document.addEventListener('DOMContentLoaded', function () {
    tiago();
});

document.body.addEventListener('click', function () {
    window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ', '_blank');
});

