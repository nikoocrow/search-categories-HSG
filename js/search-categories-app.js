const seleccion = document.getElementById('categories-input');
const submit = document.getElementById('search-categories');
const parentElement = document.getElementById('autocom-list');



let redirectTo = '';

const handleSubmit = (_event) => {
    let cleanLink = '';
   // var regex_sb = /[^a-z]\s*$/gi;
    //seleccion.value = seleccion.value.replace(regex_sb,'');
   // cleanLink = seleccion.value.replace(/\s/g, '-');
    redirectTo = `http://localhost:10016/${cleanLink}`;
    window.location.href = redirectTo;
}

parentElement.addEventListener('click', function(event) {
    if (event.target.matches('li')) {
        handleSubmit();
    }
  });


