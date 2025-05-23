function toggleExtracurricular() {
    var section = document.getElementById('extracurricular');
    var button = document.getElementById('toggleButton');
    if (section.style.display === 'none' || section.style.display === '') {
        section.style.display = 'block';
        button.textContent = 'Ocultar Projetos e Extracurriculares';
    } else {
        section.style.display = 'none';
        button.textContent = 'Mostrar Projetos e Extracurriculares';
    }
}