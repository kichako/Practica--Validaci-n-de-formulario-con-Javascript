(function(){

    var formulario = document.getElementById('formulario'),
        nombre = formulario.nombre,
        correo = formulario.email,
        sexo = formulario.sexo,
        terminos = formulario.terminos,
        error = document.getElementById('error');

    function validarNombre(e){
        if(nombre.value == '' || nombre.value == null){
            console.log('Por favor completa el nombre...')
            error.style.display = 'block';
            error.innerHTML += '<li>Por favor, completa el nombre.</li>';

            e.preventDefault();
        } else {
            error.style.display = 'none';
        }
    }

    function validarCorreo(e){
        if(correo.value == '' || correo.value == null){
            console.log('Por favor, ingresa un email...');
            error.style.display = 'block';
            error.innerHTML += '<li>Por favor, ingresa un email.</li>';

            e.preventDefault();
        } else {
            error.style.display = 'none';
        }
    }

    function validarSexo(e){
        if(sexo.value == '' || sexo.value == null){
            console.log('Por favor, elige un genero...');
            error.style.display = 'block';
            error.innerHTML += '<li>Por favor, elige un genero.</li>';

            e.preventDefault();
        } else {
            error.style.display = 'none';
        }
    }

    function validarTerminos(e){
        if(terminos.checked == false){
            console.log('Por favor, acepta los terminos y condiciones...');
            error.style.display = 'block';
            error.innerHTML += '<li>Acepta los terminos y condiciones.</li>';

            e.preventDefault();
        } else {
            error.style.display = 'none';
        }
    }



    function validarFormulario(e){
        error.innerHTML = '';

        validarNombre(e);
        validarCorreo(e);
        validarSexo(e);
        validarTerminos(e);
    }

    formulario.addEventListener('submit', validarFormulario)
}())