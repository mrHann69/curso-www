class Product {
    constructor(idProduct, name, price, img, quantity){
        this._idProduct = idProduct;
        this._name = name;
        this._price = price;
        this._img = img;
        this._quantity = quantity;
    }
    // Getters
    getIdProduct() {
        return this._idProduct;
    }
    
    getName() {
        return this._name;
    }
    
    getPrice() {
        return this._price;
    }
    
    getImg() {
        return this._img;
    }
    
    getQuantity() {
        return this._quantity;
    }
    
    // Setters
    setIdProduct(newIdProduct) {
        this._idProduct = newIdProduct;
    }
    
    setName(newName) {
        this._name = newName;
    }
    
    setPrice(newPrice) {
        this._price = newPrice;
    }
    
    setImg(newImg) {
        this._img = newImg;
    }
    
    setQuantity(newQuantity) {
        this._quantity = newQuantity;
    }

    applyData(json) {
        Object.assign(this, json);
    }
}
