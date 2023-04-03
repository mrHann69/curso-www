document.addEventListener("DOMContentLoaded", () => {
    try {
        const admin = document.getElementById('btn-admin');
        const customer = document.getElementById('btn-customer');

        admin.addEventListener('click', (e)=>{
            e.preventDefault();
            localStorage.setItem('profile', 'admin');
            window.location.href ='components/admin.html';
        });
        customer.addEventListener('click', (e)=>{
            e.preventDefault();
            localStorage.setItem('profile', 'customer');
            window.location.href ='components/customer.html';
        });

    }catch(error) {
        console.error(error);
    }
});