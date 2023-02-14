const botao = document.getElementById('botaoMenu')

botao.addEventListener('click', () => {
    const ul = document.getElementById('linksMenu')
    const nav = document.querySelector('nav');
    nav.classList.toggle('att')
    console.log(nav);
    let a1 = document.getElementById('aMenu1');
    let a2 = document.getElementById('aMenu2');
    let a3 = document.getElementById('aMenu3');
    ul.classList.toggle('active')
    ul.addEventListener('click', (e) => {
        if (e.target ==  a1 || e.target == a2|| e.target == a3) {
            ul.classList.remove('active');
            nav.classList.remove('att');
        }
    })
})

const target = document.querySelectorAll(' [data-animacao]');
const animacaoClasse = 'animacao';

function animacaoScroll(){
 const windowTop = window.pageYOffset + 500 ;
//  console.log(windowTop)
 target.forEach(function(e){
    if(windowTop > e.offsetTop){
        e.classList.add(animacaoClasse)
    }else{
        e.classList.remove(animacaoClasse)
    }
    //console.log(e.offsetTop);
 })
}
animacaoScroll();
window.addEventListener('scroll', function(){
    animacaoScroll()
})

function horaDia(){
    const tempo = document.getElementById('tempo')
    let data = new Date();
    let hora = data.getHours();

    if (hora >= 0  && hora < 12) {
        //Bom dia  
        tempo.innerHTML = "Bom Dia! ";
    } else if (hora >= 12 && hora < 18) {
        //Boa tarde 
        tempo.innerHTML = "Boa Tarde! ";
    } else {
        //Boa noite
        tempo.innerHTML = "Boa Noite! ";
    }
}