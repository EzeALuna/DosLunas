document.addEventListener("DOMContentLoaded",()=>
{
    const productosContainer=document.getElementById("card-grid");
    
    function fetchProductos()
    {
    fetch("https://dummyjson.com/products?limit=20")
    .then((response) =>response.json()) //encabezado y datos
    .then((data)=>{

        const productos = data.products;

        ///limpia el contenedor de productos
        productosContainer.innerHTML = "";

        productos.forEach((product) => 
            {
            const cardDiv = document.createElement("div");
            cardDiv.className = 'col-md-4 card';
            //agrega una card por cada elemento de la API
            cardDiv.innerHTML = `
                                <div class="card">
                                    <h3>${product.title}</h3>
                                    <div class="product_img-box" >
                                        <h4>${product.description}</h4>
                                        <img src="${product.thumbnail}" alt="${product.title}" />
                                        <h4>${product.price}</h4>
                                        <button class="botoncarrito">Agregar</button>
                                    </div>
                                </div>
            `;
            
            //boton agregar
            const botonAgregar = cardDiv.querySelector("button");
            botonAgregar.addEventListener("click",() =>{
                agregarAlCarrito(product);
            });
            productosContainer.appendChild(cardDiv);
        });
    })
    .catch((error)=>console.error("Error", error));
}

function agregarAlCarrito(product){
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));
    alert(`${product.title} ha sido agregado al carro de compras`);
}

fetchProductos();
});