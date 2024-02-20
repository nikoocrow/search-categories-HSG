const seleccion = document.getElementById('search-categories-input');
const parentElement = document.getElementById('search-autocomplete-list');

let redirectTo = '';

const handleSubmit = (_event) => {
    let cleanLink = '';
    var regex_sb = /[^a-z]*$/gi;
    seleccion.value = seleccion.value.replace(regex_sb,'');
    cleanLink = seleccion.value.replace(/\s/g, '-');
    redirectTo = `http://homeserviceguide.local/${cleanLink}`;
    window.location.href = redirectTo;
}

parentElement.addEventListener('click', function(event) {
    if (event.target.matches('li')) {
        handleSubmit();
    }
});


