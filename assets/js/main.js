let enproceso = false;

document.getElementById('enviar').addEventListener('click', async () => {
    let mensaje = document.getElementById('mensaje').value;
    let destinatario = document.getElementById('destinatario').value;

    if (enproceso) {
        let alerta = document.querySelector('.alert-danger');
        alerta.classList.add('show')
        setTimeout(() => {
            alerta.classList.remove('show')
        },2000)
    }

    enproceso = true;

    setTimeout(() => {
        if (mensaje && destinatario) {
            let alerta = document.querySelector('.alert-success');
            alerta.classList.add('show')
            setTimeout(() => {
                alerta.classList.remove('show')
            },2000)
        } else {
            let alerta = document.querySelector('.alert-danger');
            alerta.classList.add('show')
            setTimeout(() => {
                alerta.classList.remove('show')
            },2000)
        }
        enproceso = false;
    }, 3000);
})
