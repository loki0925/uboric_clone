let glad=document.getElementById("glam");
const text1=[{
    picc:"https://www.marlec.co.uk/wp-content/uploads/2020/03/tick1.png",
    lans:"Checkout",
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
var name = document.getElementById("pricee")
var name1 = JSON.parse(localStorage.getItem("price12"))
// console.log(name1)




document.getElementById("pricee").innerText = `Rs ${name1}`;