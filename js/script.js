console.log("Portfolio Loaded Successfully");
const sections = document.querySelectorAll("section");


window.addEventListener("scroll",()=>{

    sections.forEach(section=>{

        let position = window.scrollY;

        let offset = section.offsetTop - 500;


        if(position > offset){

            section.classList.add("show");

        }

    });

});
