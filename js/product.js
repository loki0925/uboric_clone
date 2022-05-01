const text1=[{
    picc:"https://www.marlec.co.uk/wp-content/uploads/2020/03/tick1.png",
    lans:"Home",
    lans1:"Products",
    lans2:"Kitchen Ware",
    lans3:" Kitchen Tools ",
   
}]
let glad=document.getElementById("glam");
text1.forEach(wel=>{
    let div=document.createElement("div");

    let div1=document.createElement("div");
    div1.setAttribute("id","funny")
    let div2=document.createElement("div");
    div2.setAttribute("id","funny")
    let div3=document.createElement("div");
    div3.setAttribute("id","funny")
    let div4=document.createElement("div");
    div4.setAttribute("id","funny")
   

    let img=document.createElement("img");
    img.src=wel.picc;

    let img1=document.createElement("img");
    img1.src=wel.picc;

    let img2=document.createElement("img");
    img2.src=wel.picc;

    let img3=document.createElement("img");
    img3.src=wel.picc;

    let img4=document.createElement("img");
    img4.src=wel.picc;
 
    let nam=document.createElement("h2");
    nam.innerText=wel.lans;

    let nam1=document.createElement("h2");
    nam1.innerText=wel.lans1;

    let nam2=document.createElement("h2");
    nam2.innerText=wel.lans2;

    let nam3=document.createElement("h2");
    nam3.innerText=wel.lans3;

  

    div1.append(nam);
    div2.append(img1,nam1);
    div3.append(img2,nam2);
    div4.append(img3,nam3);

    div.append(div1,div2,div3,div4);
    glad.append(div);
})


var lowerSlider = document.querySelector('#lower');
var  upperSlider = document.querySelector('#upper');

document.querySelector('#two').value=upperSlider.value;
document.querySelector('#one').value=lowerSlider.value;

var  lowerVal = parseInt(lowerSlider.value);
var upperVal = parseInt(upperSlider.value);

upperSlider.oninput = function () {
    lowerVal = parseInt(lowerSlider.value);
    upperVal = parseInt(upperSlider.value);

    if (upperVal < lowerVal + 4) {
        lowerSlider.value = upperVal - 4;
        if (lowerVal == lowerSlider.min) {
        upperSlider.value = 4;
        }
    }
    document.querySelector('#two').value=this.value
};

lowerSlider.oninput = function () {
    lowerVal = parseInt(lowerSlider.value);
    upperVal = parseInt(upperSlider.value);
    if (lowerVal > upperVal - 4) {
        upperSlider.value = lowerVal + 4;
        if (upperVal == upperSlider.max) {
            lowerSlider.value = parseInt(upperSlider.max) - 4;
        }
    }
    document.querySelector('#one').value=this.value
}; 


const newData=[

    {
        imgUrl:"https://www.uboric.com/wp-content/uploads/2021/12/81oIinPi8L._SL1500_-1-400x531.jpg",
        title:"1000 Thermosteel Hot and Cold Water...",
        price:"1399",
    },
    {
        imgUrl:"https://www.uboric.com/wp-content/uploads/2021/12/61PRuIt-ILL._SL1500_-400x400.jpg",
        title:"1000 Thermosteel Hot and Cold Water...",
        price:"1399",
    },
    {
        imgUrl:"https://www.uboric.com/wp-content/uploads/2021/12/61c-GtJ0eL._SL1500_-400x383.jpg",
        title:"1000 Thermosteel Hot and Cold Water...",
        price:"1299",
    },
    {
        imgUrl:"https://www.uboric.com/wp-content/uploads/2021/12/61aUqDnNokL._SL1500_-400x383.jpg",
        title:"1000 Thermosteel Hot and Cold Water...",
        price:"1199",
    },
    {
        imgUrl:"https://www.uboric.com/wp-content/uploads/2020/12/61q57KwueBL._SL1280_-400x587.jpg",
        title:"big shoptool vegetable chopper (900ml) purple",
        price:"139",
    },
    {
        imgUrl:"https://www.uboric.com/wp-content/uploads/2020/08/shoptool-82-400x400.jpg",
        title:"500 ml Shoptool Compact Mini Vegetable...",
        price:"399",
    },
    {
        imgUrl:"https://www.uboric.com/wp-content/uploads/2020/08/1-400x400.png",
        title:"Shoptool Fruit and Vegetable Chipser 11...",
        price:"199",
    },
    {
        imgUrl:"https://www.uboric.com/wp-content/uploads/2021/12/6112lAJ3NtL._SL1200_-400x400.jpg",
        title:"1st Time In India Dori Blender...",
        price:"1199",
    },
    {
        imgUrl:"https://www.uboric.com/wp-content/uploads/2021/12/71I3R4zvlL._SL1500_-400x400.jpg",
        title:"2 in 1 Slap Chop Folding...",
        price:"99",
    },
    {
        imgUrl:"https://www.uboric.com/wp-content/uploads/2021/12/412Sh8obGvL-400x400.jpg",
        title:"2 Layer Plastic Modular Drawer System...",
        price:"399",
    },
    {
        imgUrl:"https://www.uboric.com/wp-content/uploads/2021/12/61fwB8qJ4rL._SL1500_-400x400.jpg",
        title:"3 in 1 Atta Maker Dough...",
        price:"199",
    },
    {
        imgUrl:"https://www.uboric.com/wp-content/uploads/2021/12/61GhzjnscGL._SL1080_-400x271.jpg",
        title:"3 in 1 Large Durable Plastic...",
        price:"499",
    },
    {
        imgUrl:"https://www.uboric.com/wp-content/uploads/2021/12/61I2W8slZmS._SL1280_-400x315.jpg",
        title:"3 in 1 Plastic Dry Fruit...",
        price:"299",
    },
    {
        imgUrl:"https://www.uboric.com/wp-content/uploads/2021/12/51OzhBHOeaL._SL1024_-400x263.jpg",
        title:"4 in 1 Multipurpose Plastic 2...",
        price:"399",
    },
    {
        imgUrl:"https://www.uboric.com/wp-content/uploads/2021/12/61XzlTs7upL._SL1500_-400x500.jpg",
        title:"4 Layer Modular Drawer Storage Organiser...",
        price:"199",
    },
]
 let van=document.getElementById("faccct");

newData.forEach(function(ele,index){

  let div = document.createElement("div");

  let img=document.createElement("img");
  img.src=ele.imgUrl;

  let title=document.createElement("p");
  title.innerText=ele.title;

  let rice=document.createElement("p");
  rice.innerText=`₹${ele.price}`;

  let btn=document.createElement("button");
  btn.innerHTML="Add To Cart";
  btn.setAttribute("id","addtocart");
  btn.addEventListener("click",function(){
      cart(ele,index);
  })

  div.append(img,title,rice,btn);
  

  van.append(div);
})

function cart(ele,index){
     addtocart=JSON.parse(localStorage.getItem("carto"))||[];
    addtocart.push(ele);
    // let num2=Number(addtocart.length)
    // let len=Number(num2);
   document.querySelector("#count").textContent=(addtocart.length);

    localStorage.setItem("carto",JSON.stringify(addtocart));
}