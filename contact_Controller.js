const storedContactInfo = JSON.parse(localStorage.getItem("contactInfo"))

const contactSectionElement = document.getElementById("contactInfoSection")


for (let i = 0; i < storedContactInfo.length; i++) {
	let contact = storedContactInfo[i];

	contactSectionElement.innerHTML += `
	<article> ${contact.articleName}: <a href="${contact.link}"><img src="${contact.imgLink}" width="25" height="25" align="middle"/></a></article>
	
	`
}