const melding = document.querySelector("#privacy-melding");
const uitleg = document.querySelector("#privacy-uitleg");
const meerKnop = document.querySelector("#meer-privacy");


function openUitleg() {
	melding.close();
	uitleg.showModal();
}

melding.showModal();

meerKnop.addEventListener("click", openUitleg);