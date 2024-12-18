// Función para eliminar tareas seleccionadas
function deleteSelectedTasks() {
    // Selecciona todas las casillas de verificación
    const checkboxes = document.querySelectorAll('.task-checkbox');
    let anySelected = false; // Variable para verificar si alguna tarea está seleccionada

    // Revisa si alguna tarea está seleccionada
    checkboxes.forEach(checkbox => {
        if (checkbox.checked) {
            anySelected = true;
        }
    });

    // Si no hay tareas seleccionadas, muestra un mensaje de alerta
    if (!anySelected) {
        alert("Por favor, selecciona una tarea para eliminar.");
        return; // Sale de la función si no hay tareas seleccionadas
    }

    // Confirmación antes de eliminar las tareas seleccionadas
    if (confirm("¿Estás seguro de que deseas eliminar las tareas seleccionadas?")) {
        checkboxes.forEach(checkbox => {
            if (checkbox.checked) {
                const taskItem = checkbox.parentElement; // Obtiene el <li> contenedor de la tarea
                taskItem.remove(); // Elimina el elemento de la lista
            }
        });
    }
}
