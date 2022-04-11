//store the products array in localstorage as "data"

document.querySelector("form").addEventListener("submit",myfunction)

let Arr = JSON.parse(localStorage.getItem("data")) || [];

function dataobj(brand,name,price,image){
    this.brand = brand
    this.name = name
    this.price = price
    this.image = image
}

function myfunction(){
    event.preventDefault();
    
    let form = document.getElementById("product_form")

    let brand = form.product_brand.value
    let name = form.product_name.value
    let price = form.product_price.value
    let image = form.product_image.value
    let D1 = new dataobj(brand,name,price,image)

    Arr.push(D1)

    localStorage.setItem("data",JSON.stringify(Arr));
}