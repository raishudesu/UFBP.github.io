const nav = document.querySelector(".nav");
const check = document.getElementById('navigator');
const menu = document.getElementById('navbar');
const pageOne = document.querySelector('.header');
const pageTwo = document.querySelector('.verify-page');
const pageThree = document.querySelector('.calendar');
const pageFour = document.querySelector('.contact-us');

let lastScrollY = window.ScrollY;
    window.addEventListener("scroll", () => {
        if (lastScrollY < window.scrollY){
            console.log("down")
            nav.classList.add("nav--hidden");
            menu.classList.remove("active");
            check.classList.remove("active");
        } else {
            nav.classList.remove("nav--hidden");
            menu.classList.remove("active");
            check.classList.remove("active");
            console.log("up")
        }
        lastScrollY = window.scrollY;
    });
    check.onclick = function(){
        check.classList.toggle('active')
        menu.classList.toggle('active')
        check.classList.remove('check')
    }
    pageOne.onclick = function(e){
            menu.classList.remove('active')
            check.classList.remove('active')
    }
    pageTwo.onclick = function(e){
        menu.classList.remove('active')
        check.classList.remove('active')
    }
    pageThree.onclick = function(e){
        menu.classList.remove('active')
        check.classList.remove('active')
    }
    pageFour.onclick = function(e){
        menu.classList.remove('active')
        check.classList.remove('active')
    }
    
//to clear booking and contact forms when submitted
function resetForm() {
    document.getElementById('booking-form').onsubmit = e => {
        e.target.submit();
        e.target.reset();
        return false;
     };
     document.getElementById('contact-form').onsubmit = e => {
        e.target.submit();
        e.target.reset();
        return false;
     };
}
function submitSuccessBForm(){
    document.getElementById("booking-form").addEventListener("submit", function(event) {
        event.preventDefault();
        Swal.fire({
            icon: 'success',
            title: 'Success!',
            text: 'Please wait for the admins to confirm your booking.',
            showConfirmButton: true
        })
    });
}
function submitSuccessCForm(){
    document.getElementById("contact-form").addEventListener("submit", function(event) {
        event.preventDefault();
        Swal.fire({
            icon: 'success',
            title: 'Success!',
            text: 'Message Submitted!',
            showConfirmButton: true
        })
    });
}