// Your code goes here

// Stop Navigation from Refreshing Page
document.querySelectorAll('a').forEach((anchor)=>{
    anchor.addEventListener('click', (event) => {
        event.preventDefault();
    })
})

const navAnchors = document.querySelectorAll('a')
const paragraphs = document.querySelectorAll('p')

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

// Hide Header Image on double click
headerImage = document.querySelector('header img')
headerImage.addEventListener('dblclick', (event) => {
    event.target.style.display = 'none';

    setTimeout(function() {
        event.target.style.display = 'initial';
      }, 1000);
})

// Change background Color to orange on click
buttons = document.querySelectorAll('.btn')
buttons.forEach((button) => {
    button.addEventListener('click', (event) => {
        event.target.style.backgroundColor = 'orange';

        setTimeout(function() {
            event.target.style.backgroundColor = '#17A2B8';
          }, 1000);
    })
})

// Reduce Opacity of window on resize
window.addEventListener('resize', () => {
    if (!document.body.style.opacity) {
      document.body.style.opacity = 1;
    }
    document.body.style.opacity = Number(document.body.style.opacity) * 0.9;

    setTimeout(function() {
        document.body.style.opacity = 1;
      }, 10000);
  });

// Increase fontSize of buttons on wheel
buttons.forEach((button)=>{
    button.addEventListener('wheel', (event) => {
        event.target.style.fontSize = '25px';

        setTimeout(function() {
            event.target.style.fontSize = 'initial';
          }, 2000);
    })
})

// change paragraph color on scroll
document.addEventListener('scroll', () => {
    paragraphs.forEach((p)=>{
        p.style.color = 'cornflowerblue';

        setTimeout(function() {
            p.style.color = 'initial';
          }, 2000);
    })
})
  