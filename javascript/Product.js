class Product {
    constructor(idProduct, name, price, img, intNum){
        this._idProduct = idProduct;
        this._name = name;
        this._price = price;
        this._img = img;
        this._intNum = intNum;
    }
    
    // Getters
    get idProduct() {
        return this._idProduct;
    }
    
    get name() {
        return this._name;
    }
    
    get price() {
        return this._price;
    }
    
    get img() {
        return this._img;
    }
    
    get intNum() {
        return this._intNum;
    }
    
    // Setters
    set idProduct(newIdProduct) {
        this._idProduct = newIdProduct;
    }
    
    set name(newName) {
        this._name = newName;
    }
    
    set price(newPrice) {
        this._price = newPrice;
    }
    
    set img(newImg) {
        this._img = newImg;
    }
    
    set intNum(newIntNum) {
        this._intNum = newIntNum;
    }
}
