// data-trigger='popup-button'

const popupButton = document.querySelectorAll(".button[data-trigger='popup-button']")



const popupButtonClose = document.querySelector(".button[data-trigger='popup-button-close']")
const popupBody = document.querySelector('.contact_us_popup')

popupButton.forEach( (item) => {
	item.addEventListener('click', (e) => {
		e.preventDefault()
		popUpControl(popupBody)
	})
})


// popupButton.addEventListener('click', (e) => {

// })

popupButtonClose.addEventListener('click', (e) => {
	e.preventDefault()
	popUpControl(popupBody)
})


const prevent = ev => ev.preventDefault();
function popUpControl(popupBody) {

	if(popupBody.classList.contains('hide')){
		popupBody.classList.remove('hide')
		document.addEventListener('wheel', prevent, {passive: false})
	} else{
		popupBody.classList.add('hide')
		document.removeEventListener('wheel', prevent);
	}
}



