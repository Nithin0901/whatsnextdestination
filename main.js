let menu =document.querySelector('#menu-icon');
let navbar=document.querySelector('.navbar');

menu.onclick=()=>{
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

window.onscroll=()=>{
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
}

window.addEventListener('scroll', function() {
    var whatsappButton = document.querySelector('.whatsapp-button');
    if (window.scrollY > 300) {
        whatsappButton.style.display = 'block';
    } else {
        whatsappButton.style.display = 'none';
    }
});



function openWhatsApp(query) {
    var number = "+919629568371"; // replace with the desired WhatsApp number
    var message = query; // replace with the desired message
    var url = "https://wa.me/" + number + "/?text=" + encodeURIComponent(message);
    // window.location.href = url;
    window.open(url, '_blank');
  }




const sr = ScrollReveal ({
    distance:'60px',
    duration:2500,
    delay:400,
    reset:true
})

sr.reveal ('.text',{delay: 200, origin:'top'});
sr.reveal ('.form-container form',{delay: 300, origin:'left'});
// sr.reveal ('.home_img',{delay: 800, origin:'top',position:'relative',zindex:1001});
sr.reveal ('.heading',{delay: 800, origin:'top'});
sr.reveal ('.ride-container .box',{delay: 300, origin:'top'});
sr.reveal ('.services-container .box',{delay: 300, origin:'top'});
sr.reveal ('.about-container .box',{delay: 300, origin:'top'});
sr.reveal ('.reviews-container',{delay: 300, origin:'top'});
sr.reveal ('.newsletter .box',{delay: 400, origin:'bottom'});
// sr.reveal ('carousel-caption .par',{delay: 400, origin:'bottom'});
// sr.reveal ('carousel-caption .now',{delay: 400, origin:'top'});
