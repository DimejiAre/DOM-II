// Your code goes here

// Stop Navigation from Refreshing Page
document.querySelectorAll('a').forEach((anchor)=>{
    anchor.addEventListener('click', (event) => {
        event.preventDefault();
    })
})