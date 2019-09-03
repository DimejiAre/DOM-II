// Your code goes here

// Stop Navigation from Refreshing Page
document.querySelectorAll('a').forEach((anchor)=>{
    anchor.addEventListener('click', (event) => {
        event.preventDefault();
    })
})

const navAnchors = document.querySelectorAll('a')

// Change anchor color to orange on mouse over
navAnchors.forEach((anchor) => {
    anchor.addEventListener('mouseover', (event) => {
        event.target.style.color = "orange";

        setTimeout(function() {
            event.target.style.color = "";
          }, 1000);
    })
})

// Change fontFamily of Headers on Key down
const headers = document.querySelectorAll('h1,h2,h4')
document.addEventListener('keydown', () => {
    headers.forEach((header) => {
        header.style.fontFamily = 'charcoal'
        setTimeout(function() {
            header.style.fontFamily = 'Indie Flower';
          }, 1000);
    })
})