const product = document.querySelector('.products');

fetch('scripts/productsData.json')
  .then(res => res.json())
  .then(prodctsData => {
    prodctsData.forEach(car => {
      product.insertAdjacentHTML("beforeend",
        `
        <div class="product">
                    <h3 class="carName">${car.name}</h3>
                    <p class="carType">${car.type}</p>
                    <img src="${car.productImg}" alt="Audi a1">
                    <div class="rent-info">
                        <div class="capacity">
                            <div class="icon-inf"><i class='bx bx-user'></i></div>
                            <div class="text-inf">${car.capacity} Person</div>
                        </div>
                        <div class="capacity">
                            <div class="icon-inf"><i class='bx bx-cog'></i></div>
                            <div class="text-inf">${car.gear}</div>
                        </div>
                    </div>
                    <div class="rent-option">
                        <p><b>$${car.price}</b>/day</p>
                        <button>Rent Car</button>
                    </div>
                </div>
        `
      );
    });
  })
