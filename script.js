document.addEventListener('DOMContentLoaded', function() {
    const processes = document.querySelectorAll('.process');
    const modal = document.getElementById('modal');
    const modalTitle = document.getElementById('modal-title');
    const modalDescription = document.getElementById('modal-description');
    const closeModal = document.querySelector('.close');

    const definitions = {
        "Entrada": "Responsable: Patieros. Registro de ingreso con información del operador y unidad.",
        "Salida": "Responsable: Patieros. Registro de salida de la unidad.",
        "Verificación": "Responsable: Recibo. Clasificación de producto y registro de tiempos.",
        "RDR & Pedimento": "Responsable: Recibo. Documentación de unidad y descarga en PDF.",
        "Avance operativo": "Responsable: Embarques y Distribución. Estatus de surtido y ETAs de unidades.",
        "Fin de carga": "Responsable: Embarques. Registro de cortes y tiempos.",
        "Diagramas de carga": "Responsable: Embarques. Documentación de carga de la unidad.",
        "Inicio de ruta": "Responsable: Monitoreo. Registro de inicio a ruta cliente de la unidad.",
        "Monitoreo transito": "Responsable: Monitoreo. Monitoreo activo de unidades en tránsito.",
        "POD": "Responsable: Distribución y Monitoreo. Documentación de entrega a cliente.",
        "Análisis del rechazo": "Responsabilidad: Logística Inversa. Registro de evidencias del rechazo.",
        "Registro": "Responsable: Distribución y Logística Inversa. Registro de unidades con siniestro.",
        "Documentación": "Responsable: Distribución y Monitoreo. Adjuntos de evidencias solicitadas por la aseguradora."
    };

    processes.forEach(process => {
        process.addEventListener('click', function() {
            const items = this.querySelector('.process-items');
            if (items.style.display === 'none' || items.style.display === '') {
                closeAllProcesses();
                items.style.display = 'flex';
                this.classList.add('active');
            } else {
                items.style.display = 'none';
                this.classList.remove('active');
            }
        });
    });

    function closeAllProcesses() {
        processes.forEach(p => {
            p.querySelector('.process-items').style.display = 'none';
            p.classList.remove('active');
        });
    }

    document.querySelectorAll('.process-items button').forEach(button => {
        button.addEventListener('click', function(e) {
            e.stopPropagation();
            const definition = definitions[this.textContent] || 'Definición no disponible';
            modalTitle.textContent = this.textContent;
            modalDescription.textContent = definition;
            modal.style.display = 'block';
        });
    });

    closeModal.onclick = function() {
        modal.style.display = 'none';
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    }

    // Add smooth scrolling for internal links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
