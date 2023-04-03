class Product {
    constructor(idProduct, name, price, img, intNum){
        this._idProduct = idProduct;
        this._name = name;
        this._price = price;
        this._img = img;
        this._intNum = intNum;
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
    
    getIntNum() {
        return this._intNum;
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
    
    setIntNum(newIntNum) {
        this._intNum = newIntNum;
    }
}
