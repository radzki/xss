function removeNonAlphanumeric(inputString) {
    return inputString.replace(/[^A-Z\d\s]/gi, '');
};

function getAmigoSecreto() {
   return $x('/html/body/div[2]/div[6]/div/div/div/div/div[2]/div[1]/form[3]/div/div/p/script/text()')[0].wholeText.split('amigoTireiAberto')[1].split('strong')[1]
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

