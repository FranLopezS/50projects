const panels = document.querySelectorAll('.panel') // Se cogen todos los panel

panels.forEach(panel => { // Para cada panel...
    panel.addEventListener('click', () => { // Se añade un listener de click
        removeActiveClasses() // Quita la clase activo a todos
        panel.classList.add('active') // Pone la clase active al que hemos seleccionado
    })
})

function removeActiveClasses() {
    panels.forEach(panel => { // Para cada panel...
        panel.classList.remove('active') // Se quita la clase active
    })
}