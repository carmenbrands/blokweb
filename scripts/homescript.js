// JavaScript Document
console.log("hi");


// nu trending "bekijk al je persoonlijke aanbevelingen"
const spanPijltje1 = document.querySelector("main section:nth-of-type(4) > a span:first-of-type");
const spanPijltje2 = document.querySelector("main section:nth-of-type(4) > a span:last-of-type")
const aElement = document.querySelector("main section:nth-of-type(4) > a ");

// advertentie 
const advertentieLink = document.querySelector("main > section:nth-of-type(3) a");
const advertentieContainer = document.querySelector("main > section:nth-of-type(3)");

advertentieLink.addEventListener("focus", spinningAnimation);
advertentieLink.addEventListener("blur", spinningAnimation);

function spinningAnimation() {
	if(advertentieContainer.classList.contains("spinning")) {
		advertentieContainer.classList.remove("spinning");
	} else {
		advertentieContainer.classList.add("spinning");
	}
}

aElement.addEventListener("mouseover", trendingAnimation);
aElement.addEventListener("mouseout", trendingAnimation);

function trendingAnimation() {
	if(spanPijltje1.classList.contains("hoverAnimate") && spanPijltje2.classList.contains("hoverAnimate")) {
		spanPijltje1.classList.remove("hoverAnimate");
		spanPijltje2.classList.remove("hoverAnimate");
		aElement.classList.remove("hoverAnimate");
	} else {
		spanPijltje1.classList.add("hoverAnimate");
		spanPijltje2.classList.add("hoverAnimate");
		aElement.classList.add("hoverAnimate");
	}
	
}

// carousel categoriën in de main
function createCaroCarrousel(carrouselID) {
	let carrousel = document.querySelector("#"+carrouselID);
    let carrouselElementsContainer = carrousel.querySelector(":scope > ul");
	let carrouselElements = carrouselElementsContainer.querySelectorAll("li");
    let linkButtons = carrousel.querySelectorAll(":scope > a");

     /*****************************/
	/* LINKS/RECHTS LINK-BUTTONS */
	/*****************************/  

	// de links/rechts link-buttons initialiseren en activeren
  function iniLinkButtons() {    
    for(linkButton of linkButtons) {
			// beide link-buttins naar kliks laten luisteren
      linkButton.addEventListener("click", function(e){
        // als er geklikt wordt
				// de default-actie (de link volgen) niet uitvoeren
				e.preventDefault();

				// bepalen of er op 'previous' of 'next' geklikt is
				let direction = this.getAttribute("href");
				// naar het element gaan
				goToElement(direction);
      });
    }
	}
  
  
  /*****************/
	/* START POSITIE */
	/*****************/
  
	// het eerste element actief maaken
  function iniStartPosition() {
    // eerste element current maken
    carrouselElements[0].classList.add("current");
		// aan het begin van de container starten
    carrouselElementsContainer.scrollLeft = 0;
  }
  
  
  /*********************/
	/* ALGEMENE FUNCTIES */
	/*********************/
  
  //////////////////////////////////
  // naar volgende/vorige element //
  function goToElement(direction) {
		// het huidige current element opzoeken
		let currentElement = carrousel.querySelector(":scope > ul > .current");

		let newElement;
		if (direction == "previous") {
			// het nieuwe element is het vorige broertje/zusje
			newElement = currentElement.previousElementSibling;
			// checken of nieuwe element bestaat - anders naar laatste
			if (!newElement) {
				newElement = carrousel.querySelector(":scope > ul > li:last-of-type");
			}
		} else {
			// het nieuwe element is het volgende broertje/zusje
			newElement = currentElement.nextElementSibling;
			// checken of nieuwe element bestaat - anders naar eerste
			if (!newElement) {
				newElement = carrousel.querySelector(":scope > ul > li:first-of-type");
			}
		}

		// naar het nieuwe element scrollen
		scrollToElement(newElement);
  }
  
  
  ///////////////////////////
  // scroll to new element //
  function scrollToElement(newElement) {
    // carousel container opzoeken
    let carouselElementsContainer = newElement.closest("ul");

		// de linker offset van het nieuwe element bepalen 
		let newElementOffset = newElement.offsetLeft;
		
		// de carousel naar de berekende positie scrollen
		carouselElementsContainer.scrollTo({
			left: newElementOffset
		});
    
    // nieuwe element current element maken
    updateCurrentElement(newElement);
  }
  
  
  ////////////////////////////
	// update current element //
	function updateCurrentElement(newElement) {
		// het huidige current element opzoeken
		let currentElement = carrousel.querySelector(":scope > ul > .current");
		// de class current verwijderen
		currentElement.classList.remove("current");

		// de class current toevoegen
		newElement.classList.add("current");
	}
  
  
  // de linkbuttons activeren
  iniLinkButtons();	
  // de carrousel bij het begin starten
  iniStartPosition();
}


/************************/
/* DE CARROUSEL CREËREN */
/************************/

// nadat de pagina geladen is, de carrousels activeren
(function() {
  // hier de id gebruiken van de section in de html
  createCaroCarrousel("categoriencarrousel");
  //je kunt hier ook meerdere carrousellen activeren
})();