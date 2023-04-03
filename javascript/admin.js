
document.addEventListener("DOMContentLoaded", () => {
    try {

        if (localStorage.getItem('profile') !== 'admin') {
            alert('invalid user');
            window.location.href = "/tarea-2/index.html";
            return;
        }

        const form = document.getElementById('form');
        const producList = document.getElementById('product_list');
        const productCreate = document.getElementById('product_button');
        const showProductsButton = document.getElementById('showProducts');

        productCreate.addEventListener('click', (e) => {
            e.preventDefault();
            createProduct(form);
        });
        showProductsButton.addEventListener('click', (e) => {
            e.preventDefault();
            makeList();
        });

    } catch (err) {
        console.log(err);
    }
});

const data = readProducts();

function readProducts() {
    return fetch('../public/products.json')
        .then(response => response.json())
        .then(data => data.data)
        .catch(error => {
            // Handle any errors that occur while fetching the JSON file
            console.error('Error fetching JSON file:', error);
        }) || [];
}

function createProduct(form) {
    const product_id = (form[0].value !== "") ? form[0].value.trim() : "no value";
    const product_name = form[1].value !== "" ? form[4].value.trim() : "no value";
    const product_price = form[2].value !== "" ? form[4].value.trim() : "no value";
    const product_img = form[3].value !== "" ? form[4].value.trim() : "no value";
    const product_num_invt = form[4].value !== "" ? form[4].value.trim() : "no value";

    const newProduct = new Product(product_id, product_name, product_price, product_img, product_num_invt);
    products.unshift(newProduct);
    console.log(products);
    alert("product added")
}


async function makeList() {
    const data = await readProducts();
    console.log(data);
    const product_list = document.getElementById('product_list');

    data.map(item => {
        const div = document.createElement('div');
        div.innerHTML = makeCard(item);
        product_list.appendChild(div);
    });
}

function makeCard(item) {
    const template = 
    `<div>
        <h2> ${item.getName()} </h2>
        <p>id: ${item.getId()}\n
            price: ${item.getPrice()}\n
            img: ${item.getImg()}\n
            inventary: ${item.getIntNum()}
        </p>
    </div>`
    return template;
}



function deleteProduct(product) {

}







// function showFile(input) {
//     let file = input.files[0];
//     const reader = new FileReader();
//     reader.readAsText(file);

//     reader.onloadend = () => {
//         const data = JSON.parse(reader.result);
//         console.log(data);
//     }
// }

