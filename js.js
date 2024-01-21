const text = document.querySelector(".sec-text");

const textLoad = ()=> {
    setTimeout(() => {
        text.textContent = "Othmane";
    }, 0);
    setTimeout(() => {
        text.textContent = "a Student";
    }, 4000);
    setTimeout(() => {
        text.textContent = "a Youtuber";
    }, 8000); 
}
textLoad();
setInterval(textLoad , 12000)

//scroll


let sections = document.querySelectorAll("section");

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;

        if(top >= offset && top < offset + height ) {
            sec.classList.add('place4');
        }
        else {
            sec.classList.remove('place4');
        }
    })
}



