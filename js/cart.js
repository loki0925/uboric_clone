let glad=document.getElementById("glam");
const text1=[{
    picc:"https://www.marlec.co.uk/wp-content/uploads/2020/03/tick1.png",
    lans:"Cart",
    lans1:"Home",
   
   
}]
text1.forEach(wel=>{
    let div=document.createElement("div");

    let div1=document.createElement("div");
    div1.setAttribute("id","funny")
   
   

    let img=document.createElement("img");
    img.src=wel.picc;

 
    let nam=document.createElement("h2");
    nam.innerText=wel.lans;

    
    let nam1=document.createElement("h2");
    nam1.innerText=wel.lans1;


  

    div1.append(nam1,img,nam);
   
    div.append(div1);
    glad.append(div);
})


let addfont = JSON.parse(localStorage.getItem("carto"))

let cost =0;
let container=document.getElementById("cart")

window.addEventListener("load",function(){
    createdata(addfont);
})

addfont.forEach(function (temp, index) {
 
    let div = document.createElement("div");

    
    let name = document.createElement("p");
    name.innerText = temp.title;
    console.log(name);

    let price = document.createElement("p");
    price.innerText = `₹${temp.price}`;
    cost = Number(cost) + Number(temp.price);
    console.log(cost);
       

    let img = document.createElement("img");
    img.src = temp.imgUrl;
    console.log(img);

    let del = document.createElement("button");
    del.innerHTML = "Remove";
    del.addEventListener("click", function () {
               
        let total=addfont.reduce(function(acc,cv){
            return acc+Number(cv.price);
        },0);
     
        
        document.querySelector("#total-price").textContent = `₹${total}`;
        document.querySelector("#price").textContent = `₹${total}`;
        div.innerHTML = null;
        deleteT(index);
     
        
        
    })

    div.append(img, name, price, del);

    container.append(div);


});

    


   let total=addfont.reduce(function(acc,cv){
       return acc+Number(cv.price);
   }, 0);
   localStorage.setItem("price12", JSON.stringify(total));

   document.querySelector("#total-price").textContent=`₹${total}`;
   document.querySelector("#price").textContent=`₹${total}`;

   function deleteT(index){
       console.log(index);
    addfont.splice(index,1);
    console.log( addfont);

    localStorage.setItem("carto",JSON.stringify(addfont));
    createdata(addfont);
   } 