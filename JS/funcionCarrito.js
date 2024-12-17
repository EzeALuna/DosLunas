document.addEventListener("DOMContentLoaded",()=>
    {
       const carritoItemsStorage = JSON.parse(localStorage.getItem("cart")) || [];
       const carritoTableBody = document.getElementById("carrito-item");
       const totalgeneral = document.getElementById("total");
       let total = 0;

       //cargar productos en la tabla del carrito
       carritoItemsStorage.forEach(item => {
        const row = document.createElement('tr');

        //nombre
        var nombreCelda = document.createElement('td');
        nombreCelda.textContent = item.title
        row.appendChild(nombreCelda);

        //precio
        var precioCelda = document.createElement('td');
        precioCelda.textContent = `$${item.price}`;
        row.appendChild(precioCelda);

        //cantidad
        var cantidadCelda = document.createElement('td');
        cantidadCelda.textContent = 1
        row.appendChild(cantidadCelda);

        //subtotal
        var subtotalCelda = document.createElement('td');
        subtotalCelda.textContent = `$${subtotal}`;
        row.appendChild(subtotalCelda);
       
        //aggregar fila
        carritoTableBody.appendChild(row);

        //suma total
        total += subtotal; 
    })
        totalgeneral.textContent = total.toFixed(2);

        //limpiar carrito
        document.getElementById('limpiarcarrito').addEventListener('click',() =>{
            localStorage.removeItem('cart');
            window.location.href = 'index.html';
        })

        document.getElementById('botoncarrito').addEventListener('click', ()=>{
            Swal.fire({
                title: "Compra procesada!",
                text: "Compra exitosa!",
                icon: "success",
                confirmButtonText: "Aceptar"
              });

              localStorage.removeItem('cart');

              setTimeout(() => {
                window.location.href = 'index.html';
              }, 4000);
        })
    })
