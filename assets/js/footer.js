const createFooter = () => {
    let footer = document.querySelector('footer');

    footer.innerHTML = `
        <div class="footer-content">
            <img src="assets/images/Logo_DF_animated.svg" class="logo" alt="">
            <div class="info-container">
                <p class="info">
                    🌟Consultora de Belleza Independiente Mary Kay.
                    🙋‍♀️Te enseño a cuidar tu piel, maquillaje, fragancias y accesorios.
                    👜Emprendamos</p>
                <p class="info">Contacto: danitzajorge@gmail.com</p>
                <p class="info">Celular: 944442482</p>            
            </div>
            <div class="footer-ul-container">
                <ul class="category">
                    <li class="category-title">Cuidado de la piel</li>
                    <li><a href="#" class="footer-link">Cuidado facial</a></li>
                    <li><a href="#" class="footer-link">Cuidado corporal</a></li>
                    <li><a href="#" class="footer-link">Accesorio</a></li>
                </ul>
                <ul class="category">
                    <li class="category-title">Maquillaje</li>
                    <li><a href="#" class="footer-link">Rostro</a></li>
                    <li><a href="#" class="footer-link">Ojos</a></li>
                    <li><a href="#" class="footer-link">Labios</a></li>
                    <li><a href="#" class="footer-link">Accesorios</a></li>
                </ul>
            </div>
            <p class="footer-credit">DanitzaFiorellaMK - &copy; Copyright 2023</p></p>
        </div>        
        `;
}

createFooter();