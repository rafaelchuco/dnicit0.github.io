let boton=document.getElementById("boton");
boton.addEventListener("click", traerDatos)

function traerDatos(){
    let dni=document.getElementById("dni").value;
    fetch("https://apiperu.dev/api/dni/"+ dni +"?api_token=ca5bd09d8a800dabf88c02a5e5474b5d44a45073656167dc6ebd563c21466ccd")
    .then((datos)=>datos.json())
    .then((datos)=>{
        console.log(datos.data)
        document.getElementById("doc").value=datos.data.numero
        document.getElementById("nombre").value=datos.data.nombres
        document.getElementById("apellido").value=datos.data.apellido_paterno + " " + datos.data.apellido_materno 
        document.getElementById("cui").value=datos.data.codigo_verificacion


    })
}
