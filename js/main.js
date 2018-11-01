$(document).ready(()=>{
    printName();
    getOption();
    loadViewDefault();
});
const loadViewDefault = ()=>{
    // let defaultOption = $('.menu-options-container div');
    // let defaultSelect = defaultOption.index();
    // defaultSelect.trigger('click');
}
const getRemoveClassMenu = (divSelected) =>{
    divSelected.addClass('extra-menu');
}
const limpiarClass = (menus) =>{
    menus.removeClass('extra-menu');
}
const getOption = () =>{
    let menuOptionContainer = $('.menu-options-container div');
    menuOptionContainer.on('click',(e)=>{
        let divSelected = $(e.target);
        let optionSelected=divSelected.index();
        let contentInformation=$('.content-information');
        limpiarClass(menuOptionContainer);
        switch (optionSelected) {
            case 0:
                getRemoveClassMenu(divSelected);
                contentInformation.load('./views/cv.html',()=>{
                    console.warn('Cargada');
                });
                break;
            case 1:
                getRemoveClassMenu(divSelected);
                contentInformation.load('./views/education.html',()=>{
                    console.warn('Cargada');
                });
                break;
            case 2:
                getRemoveClassMenu(divSelected);
                contentInformation.load('./views/experience.html',()=>{
                    console.warn('Cargada');
                });
                break;
            case 3:
                getRemoveClassMenu(divSelected);
                contentInformation.load('./views/future.html',()=>{
                    console.warn('Cargada');
                });
                break;
            case 4:
                getRemoveClassMenu(divSelected);
                contentInformation.load('./views/others.html',()=>{
                    console.warn('Cargada');
                });
                break;
            default:
                divSelected.removeClass('extra');
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

