const divProductos = document.getElementById("divProductos");
const alertError = document.getElementById("alertError");
const URLMain = "https://fakestoreapi.com/products/";

function getData() {
  fetch(URLMain).then((response) => {
    response.json().then((res) => {
      createCards(res);
    });
  }).catch((err) => {
    alertError.innerHTML = `Problema al traer la información: ${err}`;
    alertError.style.display = "block";
  });
}

function createCards(products) {
  products.forEach((product) => { //ForEach para iterar sobre cada producto en el arreglo productos.
    let description = product.description;
    if (description.length > 100) {
      description = description.substring(0, 100) + "..."; //Limitar la descripción del producto a 100 caracteres
    }

    const card = `
      <div class="col mb-4">
        <div class="card" style="width: 18rem;">
          <img src="${product.image}" class="card-img-top" alt="${product.title}"> 
          <div class="card-body">
            <h5 class="card-title">${product.title}</h5> 
            <p class="card-text">${description}</p>
            <p class="card-text"><strong>Precio: $${product.price}</strong></p>
            <a href="#" class="btn btn-primary">Más info</a>
          </div>
        </div>
      </div>
    `;
    divProductos.insertAdjacentHTML("beforeend", card);
  });
}

getData();

