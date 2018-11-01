$(document).ready(()=>{
    printName();
    getOption();
});
const loadView = ()=>{
    
}
const getOption = () =>{
    $('.menu-options-container div').on('click',(e)=>{
        let optionSelected = $(e.target).index();
        switch (optionSelected) {
            case 0:
                $('.content-information').load('./views/cv.html',()=>{
                    console.warn('Cargada');
                });
                break;
            case 1:
                $('.content-information').load('./views/education.html',()=>{
                    console.warn('Cargada');
                });
                break;
            case 2:
                $('.content-information').load('./views/experience.html',()=>{
                    console.warn('Cargada');
                });
                break;
            case 3:
                $('.content-information').load('./views/future.html',()=>{
                    console.warn('Cargada');
                });
                break;
            case 4:
                $('.content-information').load('./views/others.html',()=>{
                    console.warn('Cargada');
                });
                break;
            default:
                break;
        }
        console.log(optionSelected);
    });
}
const printName = () =>{
    var Edwin = "Edwin Giovanni Pérez Robles";
    var nombre=document.createTextNode(Edwin);
    var h1Nombre=document.createElement('h1');
    var header=document.getElementById('header');
    h1Nombre.classList.add('Presentacion');
    h1Nombre.appendChild(nombre);
    header.appendChild(h1Nombre);
}

