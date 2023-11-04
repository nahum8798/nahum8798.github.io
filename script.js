// ------- barra de navegación ----------------------

const menuIcon = document.querySelector('.menu-icon');
const menu = document.querySelector('.menu');

menuIcon.addEventListener('click', () => {
    menu.classList.toggle('open');
});

// ------ carousel principal ----------------
$(document).ready(function(){
    $('.carousel').slick({
        autoplay: true,
        autoplaySpeed: 3000, // Cambia la imagen cada 3 segundos
        dots: true, // Agrega indicadores de paginación
        responsive: [
            {
                breakpoint: 768, // Para pantallas más pequeñas
                settings: {
                    arrows: false, // Oculta las flechas de navegación
                }
            }
        ]
    });
});

// ----------- carousel mas vendidos -------------


/* ------------ login -------------------- */


$(document).ready(function() {
    // Manejador de eventos para el botón "Agregar al Carrito"
    $(".add-to-cart-button").on("click", function() {
        // Obtén información del producto
        var productName = $(".product-details h1").text();
        var productImage = $(".image-gallery img").attr("src");

        // Crea una tarjeta de producto en el carrito
        var cartItem = $("<div class='cart-item'></div>");
        cartItem.append("<img src='" + productImage + "' alt='" + productName + "'>");
        cartItem.append("<h3>" + productName + "</h3>");
        cartItem.append("<p>Cantidad: <span class='quantity'>1</span></p>");
        cartItem.append("<button class='increase-quantity'>+</button>");
        cartItem.append("<button class='decrease-quantity'>-</button>");

        // Agrega la tarjeta al carrito
        $(".cart-items").append(cartItem);

        // Manejador de eventos para aumentar la cantidad
        cartItem.find(".increase-quantity").on("click", function() {
            var quantityElement = cartItem.find(".quantity");
            var currentQuantity = parseInt(quantityElement.text());
            quantityElement.text(currentQuantity + 1);
        });

        // Manejador de eventos para disminuir la cantidad
        cartItem.find(".decrease-quantity").on("click", function() {
            var quantityElement = cartItem.find(".quantity");
            var currentQuantity = parseInt(quantityElement.text());
            if (currentQuantity > 1) {
                quantityElement.text(currentQuantity - 1);
            }
        });
    });
});

// JavaScript para mostrar/ocultar el botón de "Volver arriba"
window.onscroll = function() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("scroll-to-top").style.display = "block";
    } else {
        document.getElementById("scroll-to-top").style.display = "none";
    }
};

// JavaScript para hacer scroll al principio de la página
document.getElementById("scroll-to-top").addEventListener("click", function() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});

/* compra  */
