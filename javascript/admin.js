

document.addEventListener("DOMContentLoaded", () => {
    try {

        if (localStorage.getItem('profile') !== 'admin') {
            alert('invalid user');
            window.location.href = "/tarea-2/index.html";
            return;
        }

        const createButton = document.getElementById('create_button');
        const searchButton = document.getElementById('search_button');
        const refreshButton = document.getElementById('refresh_button');
        const saveButton = document.getElementById('save_button');

        createButton.addEventListener('click', (e) => {
            e.preventDefault();
            createProduct();
        });
        searchButton.addEventListener('click', (e) => {
            e.preventDefault();
            searchProduct();
        });
        refreshButton.addEventListener('click', (e) => {
            e.preventDefault();
            refreshList();
        });
        saveButton.addEventListener('click', (e) => {
            e.preventDefault();
            var id = saveButton.value;
            saveProduct(id);
        });
        loadProducts();
        // readProducts();

    } catch (err) {
        console.log(err);
    }
});

var database = [];
//const data = readProducts() || [];

function loadProducts(){
    fetch('../public/products.json')
    .then(response => response.json())
    .then(data => {
        database = data.products;
        localStorage.setItem("data", JSON.stringify(database));
        makeList(database);
    });
}

function readProducts() {
    database = localStorage.getItem("data");
    database = JSON.parse(database);
    makeList(database);
}

function writeProducts(data) {
    // fetch('../public/products.json', {
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify(data)
    // })
    //     .then(response => {
    //         console.log('data save successfully');
    //     })
    //     .catch(error => {
    //         console.error('Error al guardar los datos:', error);
    //     });
}

function searchProduct() {
    // const productToLook = document.getElementById('searchproductbox').value.trim();
    // console.log("productToLook:", productToLook);
    // //hay que devolver un producto del arreglo!! 
    // return (productToLook !== "") ? productToLook : "no product";
}

function refreshList() {
    makeList(database);
}


function createProduct() {
    const form             = document.getElementById('form');
    const product_id       = (form[0].value !== "") ? form[0].value.trim() : "null";
    const product_name     = form[1].value !== "" ? form[1].value.trim() : "null";
    const product_price    = form[2].value !== "" ? form[2].value.trim() : "null";
    const product_img      = form[3].value !== "" ? form[3].value.trim() : "null";
    const product_num_invt = form[4].value !== "" ? form[4].value.trim() : "null";

    const newProduct = {
        "idProduct": product_id,
        "name":      product_name,
        "price":     product_price,
        "img":       product_img,
        "intNum":    product_num_invt
    }
    database.push(newProduct);
    localStorage.setItem("data", JSON.stringify(database));
    cleanForm(form);
    refreshList(database);
}

function cleanForm(form) {
    const inputs = form.getElementsByTagName('input');

    for (let i = 0; i < inputs.length; i++) {
        const input = inputs[i];
        if (input.type !== 'submit') {
            input.value = "";   
        }
    }
}

function makeCard(item) {
    if (item === undefined || item === null) return `<h1>No item</h1>`;

    const template =
    `<div class="card" >

        <div class="">
            <h2> ${ item.name} </h2>
            <p>id: ${ item.idProduct}</p>
            <p>price: ${ item.price}</p>
            <p>img: ${ item.img}</p>
            <p>inventary: ${ item.intNum}</p>
        </div>

        <div class="centered">
            <button  class="btn btn-outline-dark btn-edit" value=${ item.idProduct} >
                <i class="bi bi-pencil-square"></i>
                Edit
            </button>
            <button  class="btn btn-outline-danger btn-delete" value=${ item.idProduct}>
                <i class="bi bi-backspace-fill"></i>
                Delete
            </button>
        </div>
        
    </div>`
    //     `<div class="card" >

    //     <div class="">
    //         <h2> ${item.getName() || item.name} </h2>
    //         <p>id: ${item.getIdProduct() || item.idProduct}</p>
    //         <p>price: ${item.getPrice() || item.price}</p>
    //         <p>img: ${item.getImg() || item.img}</p>
    //         <p>inventary: ${item.getIntNum() || item.quantity}</p>
    //     </div>

    //     <div class="centered">
    //         <button  class="btn btn-outline-dark btn-edit">
    //             <i class="bi bi-pencil-square"></i>
    //             Edit
    //         </button>
    //         <button  class="btn btn-outline-danger btn-delete">
    //             <i class="bi bi-backspace-fill"></i>
    //             Delete
    //         </button>
    //     </div>
        
    // </div>`
    return template;
}

async function makeList(list) {
    const product_list = document.getElementById('product_list');
    product_list.innerHTML = ""

    if (list.length > 0) {
        list.map((item) => {
            const cardContainer = document.createElement('div');
            cardContainer.innerHTML = makeCard(item);
            product_list.append(cardContainer);
        })
    }

    const editButtons = document.getElementsByClassName('btn-edit');
    const deleteButtons = document.getElementsByClassName('btn-delete');

    for (const button of editButtons) {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            var id = button.value;
            editProduct(id);
        })
    }

    for (const button of deleteButtons) {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            var id = button.value;
            deleteProduct(id);
        })
    }

}





function editProduct(id) {
    database = localStorage.getItem("data");
    database = JSON.parse(database);
    let product = database.find(product => product.idProduct == id);
    const idproduct = document.getElementById("idproduct2");
    const nameproduct = document.getElementById("nameproduct2");
    const priceproduct = document.getElementById("priceproduct2");
    const imgproduct = document.getElementById("imgproduct2");
    const invtproduct = document.getElementById("invtproduct2");
    const saveButton = document.getElementById('save_button');
    idproduct.value = product.idProduct;
    nameproduct.value = product.name;
    priceproduct.value = product.price;
    imgproduct.value = product.img;
    invtproduct.value = product.intNum;
    saveButton.value = product.idProduct;
}

function saveProduct(id){
    database = localStorage.getItem("data");
    database = JSON.parse(database);
    let product = database.find(product => product.idProduct == id);
    const product_id       = document.getElementById("idproduct2");
    const product_name     = document.getElementById("nameproduct2");
    const product_price    = document.getElementById("priceproduct2");
    const product_img      = document.getElementById("imgproduct2");
    const product_num_invt = document.getElementById("invtproduct2");

    product.idProduct = product_id.value;
    product.name = product_name.value;
    product.price = product_price.value;
    product.img = product_img.value;
    product.intNum = product_num_invt.value;

    localStorage.setItem("data", JSON.stringify(database));
    const form = document.getElementById('form');
    cleanForm(form);
    refreshList(database);
}


function deleteProduct(id) {
    database = localStorage.getItem("data");
    database = JSON.parse(database);
    database = database.filter(product => product.idProduct != id);
    localStorage.setItem("data", JSON.stringify(database));
}

