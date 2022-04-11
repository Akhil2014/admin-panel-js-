let displaydata = JSON.parse(localStorage.getItem("data"))

displaydata.map(function(elem){
    let box = document.createElement("div");
    box.setAttribute("id","box1");

    let Iimage = document.createElement("img")
    Iimage.src = elem.image 
    
    let Ibrand = document.createElement("h3");
    Ibrand.innerText = elem.brand 

    let Iname = document.createElement("h3");
    Iname.innerText = elem.name 

    let Iprice = document.createElement("h3");
    Iprice.innerText = elem.price 

    let removebtn = document.createElement("button")
    removebtn.innerText = "Remove";

    removebtn.addEventListener("click",function(){
        removetocart(elem);
    })

    box.append(Iimage,Ibrand,Iname,Iprice,removebtn)

    var conatainer = document.getElementById("products_data")
    conatainer.append(box)
})


function removetocart(elem){
    displaydata.splice(elem, 1);
}