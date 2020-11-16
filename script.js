// Fonction 1

var myFooter = document.getElementsByTagName('Footer')[0]; 

function onFooterClick() {
	console.log('clique');
}

myFooter.addEventListener("click", onFooterClick)

// Fonction 1-Bis

var myFooter = document.querySelector('footer');
var x=1;
function onFooterClick() { 
    console.log('clique numéro '+ x);
    x++
}

myFooter.addEventListener("click", onFooterClick);

// Fonction 2

var menuHamb = document.querySelector('button');
var navbarHeader = document.getElementById('navbarHeader');
menuHamb.addEventListener("click", toggleOn); 

function toggleOn() {
    navbarHeader.classList.toggle("collapse");
};

// Fonction 3

var myEditButton = document.getElementsByClassName('btn btn-sm btn-outline-secondary')[0]; 


myEditButton.addEventListener('click', putRedText);

function putRedText() {
    var cardChange = document.querySelector('p.card-text');
    cardChange.style.color = 'red';
}

// Fonction 4 

var myEditButton2 = document.querySelectorAll('div.btn-group')[1].children[1]; // dans la collections HTML, je prend le deuxième
myEditButton2.addEventListener('click', putGreenText1);

var statusButton = false;  // va permettre de checker la bascule vert ou pas
function putGreenText1() {
    var cardChange2 = document.querySelectorAll('p.card-text');  // je cherche l'élément à traiter
    if (statusButton) {             // si statusButton est true, le texte est vert faut mettre en normal
        statusButton = false;
        cardChange2[1].style.color = '';
    } else {                        // si statusButton est false, le texte est normale faut mettre en vert
        statusButton = true;
        cardChange2[1].style.color = 'green';
    }
}

// Fonction 5


var cdnBootstrap = document.getElementsByTagName('link')[0]; //je récupère la balise link
var doubleClicNavbar = document.querySelector('header'); // la zone header cliquable
var headTag = document.querySelector('head');  //le parent à ajouter un child
var statusHeader = false;

var changeCDN = function () {
  if (statusHeader == false) {
    cdnBootstrap.parentNode.removeChild(cdnBootstrap);
    statusHeader = true;
  } else if (statusHeader == true) {
    headTag.appendChild(cdnBootstrap);
    statusHeader= false;
  }
};

doubleClicNavbar.addEventListener('dblclick', changeCDN);

// Fonction 6

var buttonView = document.querySelectorAll('div.btn-group');
var imageCard = document.querySelectorAll('img.card-img-top');
var buttonTest = true;  // va permettre de checker la bascule vert ou pas

// stocker les textes des 6 cards
var textBackup = [];
var cardText = document.querySelectorAll('p.card-text');
cardText.forEach((text, i ) => {
    textBackup[i] = cardText[i].innerHTML;
});

function hideCard() {
    // [0] pour la première carte

    if (buttonTest) {             // si buttonTest est true, le texte disparait, réduit la taille
        buttonTest = false;
        cardText[0].innerHTML = '';
        imageCard[0].style.width = '20%';
    } else {                        // si statusButton est false, le texte est normale faut mettre en vert
        buttonTest = true;
        cardText[0].innerHTML = textBackup[0];
        imageCard[0].style.width = '100%';
    }
};
// Fonctionne qu'avec la première carte
buttonView[0].children[0].addEventListener('mouseover', hideCard);