const open_search = document.querySelector('.open_search');
const drop_search = document.querySelector('.drop_search');

open_search.addEventListener('click', function(){

    drop_search.classList.toggle('open_search');

});