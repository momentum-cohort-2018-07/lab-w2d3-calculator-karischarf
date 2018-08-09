



function setNumberButtons () {
  for (var element of document.querySelectorAll('.calculator__keys')) {
      element.addEventListener('click', function(event) {
      addToOutput(event.target.innerText)
  })
 }
}
 