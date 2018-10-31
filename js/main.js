$(document).ready(()=>{
    printName();
    getOption();
});
const getOption = () =>{
    $('.menu-options-container div').on('click',(e)=>{
        let optionSelected = $(e.target).text();
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

