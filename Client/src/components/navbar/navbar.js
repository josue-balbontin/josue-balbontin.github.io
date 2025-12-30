
const urlNavbar = new URL('./navbar.html', import.meta.url).href;

export async function renderNavbar(id){
    const container = document.getElementById(id);

    if (!container) {
        console.error(`No se encontró el contenedor con id: ${id}`);
        return;
    }

    try{
        const response = await fetch(urlNavbar);
        const html = await response.text();
        
        container.innerHTML = html;


    
    }
    catch(error){
        console.error('Error al cargar navbard.html:', error);
        throw Error('Fallo al cargar el componente navbard');
    }
}