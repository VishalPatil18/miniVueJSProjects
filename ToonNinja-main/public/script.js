const icon = document.querySelector('#icon');
const menu = document.querySelector('#menu');

icon.addEventListener('click', () => {
    if(menu.classList.contains('hidden')){
        menu.classList.remove('hidden');
    }
    else{
        menu.classList.add('hidden');
    }
});