console.log('Hola mundo!');

// Add event listener to know when the page is loaded
window.addEventListener('load', () => {
    console.log('Estamos listos!');
});

// Add event listener to know when a new turbolinks visit has been registered 
document.addEventListener('turbolinks:load', () => {
    console.log('Estamos listos con Turbolinks!');
});

// Add event listener to know when a new turbolinks visit starts and add 
// the class to fade out the content
document.addEventListener('turbolinks:request-start', () => {
 document.querySelector('.main').classList.remove('fadein');
 document.querySelector('.main').classList.add('fadeout');
});

// Add event listener to know when a new turbolinks visit starts and add 
// the class to fade in the content
document.addEventListener('turbolinks:render', () => {
 document.querySelector('.main').classList.remove('fadeout');
 document.querySelector('.main').classList.add('fadein');
});


function goToContact () {
    // Some code here
    let confirmed = confirm("¿Seguro de comprar?");
    // We use turbolinks function to create a new visit and go to the new location 
    if (confirmed) Turbolinks.visit('contact.html');
}