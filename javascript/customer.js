document.addEventListener("DOMContentLoaded", () => {
    try {
        const car = document.getElementById('shopping_cart');
        const home = document.getElementById('btn-home');
        const admin = document.getElementById('btn2-admin');

        admin.addEventListener('click', (e)=>{
            e.preventDefault();
            localStorage.setItem('profile', 'admin');
            window.location.href ='../components/admin.html';
        });
        car.addEventListener('click', (e)=>{
            e.preventDefault();
            localStorage.setItem('profile', 'car');
            window.location.href ='../components/shopping_cart.html';
        });
        home.addEventListener('click', (e)=>{
            e.preventDefault();
            localStorage.setItem('profile', 'home');
            window.location.href ='../index.html';
        });

    }catch(error) {
        console.error(error);
    }
});