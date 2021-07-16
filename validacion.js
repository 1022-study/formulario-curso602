var nombre = document.getElementById("nombre"),
    correo = document.getElementById("email"),
    presencial = document.getElementById("presencial"),
    virtual = document.getElementById("virtual"),
    justificacion = document.getElementById("justificacion"),
    send = document.getElementById("send");

presencial.setAttribute("style", "width: 50px;");
virtual.setAttribute("style", "width: 50px;");

function verificar() {
    if (virtual.checked == true) {
        presencial.disabled = true;
    } else {
        presencial.disabled = false;
    }


    if (presencial.checked == true) {
        virtual.disabled = true;
    } else {
        virtual.disabled = false;
    }


    if (nombre.value == "" || correo.value == "" || justificacion.value == "") {
        send.disabled = true;
    } else {
        if (virtual.checked || presencial.checked == true) {
            send.disabled = false;
            console.log("se llenaron");
        } else {
            send.disabled = true;

        }
    }
}

send.addEventListener("click", function () {
    localStorage.setItem("verif", "1");
});