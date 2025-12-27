async function Main() {
    const app = document.getElementById('app');
    
    try {
        const response = await fetch('./src/main.html');
    
        if (!response.ok) {
            throw new Error('No se pudo cargar main.html');
        }

        const html = await response.text();

        app.innerHTML = html;
        
        console.log('Layout principal cargado');

    } catch (error) {
        console.error('Error:', error);
        app.innerHTML = '<h1>Error al cargar la aplicación</h1>';
    }
}

// Iniciar la carga
Main();


 


