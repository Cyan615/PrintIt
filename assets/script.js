const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

const nextArrow = document.querySelector(".arrow_right");
const prevArrow = document.querySelector(".arrow_left");


nextArrow.addEventListener("click", function() {
	alert('click droit');
})
prevArrow.addEventListener("click", function() {
	alert('click gauche');
})

// Affichage des 'bullet points' du carrousel

// boucle qui permet d'avoir autant de bullet que de slide
for (let i = 0; i < slides.length; i++) {
	//variable qui contient la div avec la class=dots
	const dotsContainer = document.querySelector(".dots");
	//variable qui contient l'element créés: span 
	let dot = document.createElement("span");
	dot.classList.add("dot");  //on lui donne la class dot
	//on inserre l'élément span dans la div 'dots'
	dotsContainer.appendChild(dot);
	// if (i===slideActive) {
	// 	dot.classList.add("dot_selected");
	// }
}

