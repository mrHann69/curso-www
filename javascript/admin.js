
document.addEventListener("DOMContentLoaded", () => {
    try {

        if (localStorage.getItem('profile') !== 'admin') {
            alert('invalid user');
            window.location.href = "/tarea-2/index.html";
            return;
        }

        const createButton = document.getElementById('create_button');
        const searchButton = document.getElementById('search_button');


        createButton.addEventListener('click', (e) => {
            e.preventDefault();
            createProduct();
        });
        searchButton.addEventListener('click', (e) => {
            e.preventDefault();
            searchProduct();
        });

    } catch (err) {
        console.log(err);
    }
});


const data = readProducts() || [];

function readProducts() {
    return fetch('../public/products.json', {
        headers: {
            'Content-Type': 'application/json', 
            'Accept': 'application/json'
        }
    })
        .then(response => response.json())
        .then(data => {
            console.log(data.data);
            return data.data;
        })
        .catch(error => {
            // Handle any errors that occur while fetching the JSON file
            console.error('Error fetching JSON file:', error);
        });
}

function writeProducts(data) {
    fetch('../public/products.json', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(response => {
            console.log('Los datos han sido guardados con éxito');
        })
        .catch(error => {
            console.error('Error al guardar los datos:', error);
        });
}

function searchProduct() {
    const productToLook = document.getElementById('searchproductbox').value.trim();
    console.log("funcion searchProduct text: ", productToLook);

}


function createProduct(form) {
    // const product_id = (form[0].value !== "") ? form[0].value.trim() : "no value";
    // const product_name = form[1].value !== "" ? form[4].value.trim() : "no value";
    // const product_price = form[2].value !== "" ? form[4].value.trim() : "no value";
    // const product_img = form[3].value !== "" ? form[4].value.trim() : "no value";
    // const product_num_invt = form[4].value !== "" ? form[4].value.trim() : "no value";

    // const newProduct = new Product(product_id, product_name, product_price, product_img, product_num_invt);
    // // data.unshift(newProduct);
    // data[data.length + 1] = newProduct;
    // writeProducts(...data);
    // makeList();
    // alert("product added")
    console.log("funcion createPRoduct");
}


async function makeList(item) {
    const products = await readProducts();
    const product_list = document.getElementById('product_list');

    if (item.length === 0 && data.length > 0) {
        products.map(item => {
            const div = document.createElement('div');
            div.innerHTML = makeCard(item);
            product_list.appendChild(div);
        });
        return;
    }

    // product_list.appendChild(document.createElement('h1').innerHTML = "No data")
}

function makeCard(item) {
    console.log("funcion makeCard");
    return `<h1>${item}</h1>`;
    // if (item === undefined || item === null) return;

    // const template =
    //     `<div style="
    //     border:1px solid;
    //     border-radius:10px;
    //     margin-bottom:10px;
    //     padding:10px;" class="bg-warning">
    //     <h2> ${item.name} </h2>
    //     <p>id: ${item.idProduct}</p>
    //     <p>price: ${item.price}</p>
    //     <p>img: ${item.img}</p>
    //     <p>inventary: ${item.intNum}</p>
    // </div>`
    // return template;
}



function deleteProduct(product) {
    console.log("funcion deleteProduct");
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

