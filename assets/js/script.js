const open_search = document.querySelector('.open_search');
const drop_search = document.querySelector('.drop_search');
const btn_menu = document.querySelector('.btn_menu');
const menu_mobile = document.querySelector('.menu_mobile');

open_search.addEventListener('click', function(){

    drop_search.classList.toggle('open_search');

});
btn_menu.addEventListener('click', function(){

    menu_mobile.classList.toggle('open_menu')

});