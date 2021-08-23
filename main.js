const els = document.querySelectorAll('.links div:not(.m-link)'),
afls = ['breen-1.wav', 'glados.mp3', 'gman-1.wav', 'kleiner.mp3'],
raudio = new Audio('audio/' + afls[Math.floor(Math.random() * 4)]);

document.querySelector('.m-link').addEventListener('click', ()=>{
    els.forEach((el)=>{
        el.classList.toggle('show-el');
        el.firstChild.classList.toggle('link-clickable');
    });
});

els[3].firstChild.addEventListener('click', ()=>{
    raudio.play();
});

document.querySelector("#cpr").innerHTML += new Date().getFullYear();