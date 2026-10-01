const melding = document.querySelector("#privacy-melding");
const uitleg = document.querySelector("#privacy-uitleg");
const meerKnop = document.querySelector("#meer-privacy");


function onthoudDatGezien() {
	localStorage.setItem("privacyGezien", "ja");
}

function openMelding() {
	if (!localStorage.getItem("privacyGezien")) {
		melding.showModal();
	}
}

function openUitleg() {
	
	melding.close();
	uitleg.showModal();
}

openMelding();


meerKnop.addEventListener("click", openUitleg);

melding.addEventListener("close", onthoudDatGezien);
uitleg.addEventListener("close", onthoudDatGezien);