
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

    } catch (err) {
        console.log(err);
    }
});


//const data = readProducts() || [];

const database = [];

function readProducts() {
    // return fetch('../public/products.json', {
    //     headers: {
    //         'Content-Type': 'application/json',
    //         'Accept': 'application/json'
    //     }
    // })
    //     .then(response => response.json())
    //     .then(data => {
    //         console.log(data.data);
    //         return data.data;
    //     })
    //     .catch(error => {
    //         // Handle any errors that occur while fetching the JSON file
    //         console.error('Error fetching JSON file:', error);
    //     });
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
    const productToLook = document.getElementById('searchproductbox').value.trim();
    console.log("productToLook:", productToLook);
    //hay que devolver un producto del arreglo!! 
    return (productToLook !== "") ? productToLook : "no product";
}

function saveProduct(product) {
    if (product !== null || product !== undefined) {
        database.push(product);
        return true;
    }
    return false;
}

function refreshList() {
    makeList(database);
}


function createProduct() {
    const form = document.getElementById('form');
    const product_id = (form[0].value !== "") ? form[0].value.trim() : "null";
    const product_name = form[1].value !== "" ? form[1].value.trim() : "null";
    const product_price = form[2].value !== "" ? form[2].value.trim() : "null";
    const product_img = form[3].value !== "" ? form[3].value.trim() : "null";
    const product_num_invt = form[4].value !== "" ? form[4].value.trim() : "null";

    const newProduct = new Product(product_id,
        product_name,
        product_price,
        product_img,
        product_num_invt);
    saveProduct(newProduct);
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
            <h2> ${item.getName()} </h2>
            <p>id: ${item.getIdProduct()}</p>
            <p>price: ${item.getPrice()}</p>
            <p>img: ${item.getImg()}</p>
            <p>inventary: ${item.getQuantity()}</p>
        </div>

        <div class="centered">
            <button  class="btn btn-outline-dark btn-edit">
                <i class="bi bi-pencil-square"></i>
                Edit
            </button>
            <button  class="btn btn-outline-danger btn-delete">
                <i class="bi bi-backspace-fill"></i>
                Delete
            </button>
        </div>
        
    </div>`
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
            editProduct();
        })
    }

    for (const button of deleteButtons) {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            deleteProduct();
        })
    }

}





function editProduct() {
    console.log("funcion editProduct: ");
}


function deleteProduct() {
    console.log("funcion deleteProduct: ");
}

