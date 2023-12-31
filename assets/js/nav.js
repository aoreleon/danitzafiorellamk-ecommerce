//Crear el navegador constante para todas las páginas
const createNav = () => {
    let nav = document.querySelector('.navbar');

    nav.innerHTML = `
        <div class="nav">
            <img src="assets/images/Logo_DF_animated.svg" alt="DF Logo" class="brand-logo">
            <div class="nav-items">
                <div class="search">
                    <input type="text" class="search-box" placeholder="busca tu producto">
                    <button class="search-btn">Buscar</button>
                </div>
                <a href="#">
                    <img src="assets/icons/user.png" alt="">
                </a>
                <a href="#">
                    <img src="assets/icons/cart.png" alt="">
                </a>
            </div>
        </div>
        <ul class="links-container">
            <li class="link-item"><a href="#" class="link">Lanzamiento</a></li>
            <li class="link-item"><a href="#" class="link">Cuidado de la piel</a></li>
            <li class="link-item"><a href="#" class="link">Maquillaje</a></li>            
            <li class="link-item"><a href="#" class="link">Fragancias</a></li>            
            <li class="link-item"><a href="#" class="link">Hombres</a></li>            
        </ul>
    `;
}
createNav();