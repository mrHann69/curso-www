import { showCardComponent } from "./cardComponent.js";

document.addEventListener("DOMContentLoaded", () => {
    try {

        if (localStorage.getItem('profile') !== 'Admin') {
            alert('invalid user');
            window.location.href = "/tarea-2/index.html";
            return;
        }
        console.log('page already loaded!');

        const form = document.getElementById('form');
        const producList = document.getElementById('product_list');
        const productButton = document.getElementById('product_button');

        
        
        productButton.addEventListener('click', (e)=>{
            e.preventDefault();
            createProduct(form);
        });






    } catch (err) {
        console.log(err);
    }
});




function createProduct(form){
    const product_id = form[0].value !== ""? form[0].value: "no value";
    const product_name = form[1].value !== ""? form[4].value: "no value";
    const product_price = form[2].value !== ""? form[4].value: "no value";        
    const product_img = form[3].value !== ""? form[4].value: "no value";
    const product_num_invt = form[4].value !== ""? form[4].value: "no value";

    new Product(product_id,product_name,product_price,product_img,product_num_invt);
    
    console.log(inputs);
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
