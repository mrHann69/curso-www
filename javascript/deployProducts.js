/*fetch("../public/products.json")

.then(function(response){
    return response.json();
})

.then(function(products){
    let placeholder = document.querySelector("#data-output");
    let out = "";
    for(let product of products){
        out += `
            <div class="item">
                <div class="card">
                    <p class="info">'${product.data.id}'. '${product.data.name}'</p>
                    <img src='${product.data.img}' alt="">
                    <span class="prize">'${product.data.price}'</span>
                </div>
            </div>
        `;
    }

    placeholder.innerHTML = out;
})*/

let comoQuiera=require("../public/products.json");
console.log(comoQuiera)