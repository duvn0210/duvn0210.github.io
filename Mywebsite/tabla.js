function tabla(){
document.getElementById("agregarFila").addEventListener("click", function () {
    // Crear una ventana emergente (modal) para agregar datos
    var modal = document.createElement("div");
    modal.classList.add("modal");

    // Contenido del modal
    var modalContent = document.createElement("div");
    modalContent.classList.add("modal-content");

    // Campos de entrada para los datos de la fila
    var inputFields = `
    <input type="text" id="nombreCientifico" placeholder="Nombre científico">
    <input type="text" id="nombre" placeholder="Nombre">
    <input type="text" id="conservacion" placeholder="Conservación">
    <input type="text" id="rolEcologico" placeholder="Rol ecológico">
    <input type="text" id="habitat" placeholder="Habitat">
    <input type="text" id="descripcion" placeholder="Descripción del animal">
    <input type="text" id="lugarAvistamiento" placeholder="Lugar de avistamiento">
    `;

    // Botón para agregar la fila
    var addButton = document.createElement("button");
    addButton.textContent = "Agregar";

    // Agregar el contenido al modal
    modalContent.innerHTML = inputFields;
    modalContent.appendChild(addButton);
    modal.appendChild(modalContent);

    // Agregar el modal al cuerpo del documento
    document.body.appendChild(modal);

    // Agregar evento al botón "Agregar"
    addButton.addEventListener("click", function () {
      // Obtener los valores de los campos de entrada
    var nombreCientifico = document.getElementById("nombreCientifico").value;
    var nombre = document.getElementById("nombre").value;
    var conservacion = document.getElementById("conservacion").value;
    var rolEcologico = document.getElementById("rolEcologico").value;
    var habitat = document.getElementById("habitat").value;
    var descripcion = document.getElementById("descripcion").value;
    var lugarAvistamiento = document.getElementById("lugarAvistamiento").value;

      // Crear una nueva fila y agregarla a la tabla
    var table = document.querySelector(".table");
      var newRow = table.insertRow(-1); // -1 para agregar la fila al final

    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    var cell3 = newRow.insertCell(2);
    var cell4 = newRow.insertCell(3);
    var cell5 = newRow.insertCell(4);
    var cell6 = newRow.insertCell(5);
    var cell7 = newRow.insertCell(6);

    cell1.innerHTML = nombreCientifico;
    cell2.innerHTML = nombre;
    cell3.innerHTML = conservacion;
    cell4.innerHTML = rolEcologico;
    cell5.innerHTML = habitat;
    cell6.innerHTML = descripcion;
    cell7.innerHTML = lugarAvistamiento;

      // Cerrar el modal
    modal.remove();

      // Mostrar un mensaje de alerta
    alert("Los datos se han agregado exitosamente.");
    });
});
}