var images={
    0:"https://cdn-fbcdm.nitrocdn.com/lCsZbdoeFoBheKwUKyjvhZqMoGaBchBA/assets/static/optimized/wp-content/uploads/2021/11/aea7837408eaf9b3ff95c81e83e95336.clothing.jpg",
    1:"https://cdn-fbcdm.nitrocdn.com/lCsZbdoeFoBheKwUKyjvhZqMoGaBchBA/assets/static/optimized/wp-content/uploads/2021/11/197a8b04ea67cac1cf8e2816eb07dfa1.electronics.jpg",
    2:"https://cdn-fbcdm.nitrocdn.com/lCsZbdoeFoBheKwUKyjvhZqMoGaBchBA/assets/static/optimized/wp-content/uploads/2021/11/14d9fb896ca438ce1dc83c4cb338bf23.grocery.jpg",
    3:"https://cdn-fbcdm.nitrocdn.com/lCsZbdoeFoBheKwUKyjvhZqMoGaBchBA/assets/static/optimized/wp-content/uploads/2021/11/0c26185b6238738f8a2571712e2cb361.health-care.jpg",
    4:"https://cdn-fbcdm.nitrocdn.com/lCsZbdoeFoBheKwUKyjvhZqMoGaBchBA/assets/static/optimized/wp-content/uploads/2021/11/561e65272d3bd364101a26253b3782d5.kitchenwear.jpg",
}
localStorage.setItem("Project",JSON.stringify(images));

var x;

        let imag_arr = JSON.parse(localStorage.getItem('Project'));
      console.log("imag_arr:",imag_arr);

      let slidshow=document.getElementById("slidehow");
       let i=0;

        x= setInterval(function (){
           if(i===5){
               i=0;
           }
           slidshow.src = imag_arr[i];
           i=i+1;
           console.log("i:",i);
       },3000)

       const kitchen=[{
           img1:"https://cdn-fbcdm.nitrocdn.com/lCsZbdoeFoBheKwUKyjvhZqMoGaBchBA/assets/static/optimized/wp-content/uploads/elementor/thumbs/941cd02d9da8503aeb6ace676353de63.kitchen-ware-heading-pkx8tvxfmbbsdlrzrk3iwlbxruc7cn5sq339xkx9cg.png",
           name:"KITCHEN WARE",
           img2:"https://cdn-fbcdm.nitrocdn.com/lCsZbdoeFoBheKwUKyjvhZqMoGaBchBA/assets/static/optimized/wp-content/uploads/elementor/thumbs/941cd02d9da8503aeb6ace676353de63.kitchen-ware-heading-pkx8tvxfmbbsdlrzrk3iwlbxruc7cn5sq339xkx9cg.png",
       }]

      let kitch=document.getElementById("kitchen");

       kitchen.forEach(ele => {
           
       let div=document.createElement("div");
       let div1=document.createElement("div");
       let div2=document.createElement("div");
       let div3=document.createElement("div");

       let img=document.createElement("img");
       img.src=ele.img1;

       let img1=document.createElement("img");
       img1.src=ele.img2;
       console.log("img1");

       let p=document.createElement("p");
       p.textContent=ele.name;

       div1.append(img1);
       div2.append(p);
       div3.append(img);
           

       div.append(div1,div2,div3);

     kitch.append(div);
       });

       const threImg=[{
            due1:"https://cdn-fbcdm.nitrocdn.com/lCsZbdoeFoBheKwUKyjvhZqMoGaBchBA/assets/static/optimized/wp-content/uploads/2020/12/598b8916eb34beb82b5baee240d1a5cc.kithchen-tools.jpg",
            due2:"https://cdn-fbcdm.nitrocdn.com/lCsZbdoeFoBheKwUKyjvhZqMoGaBchBA/assets/static/optimized/wp-content/uploads/2020/12/e8a6c50de9b798158ae291524fa47029.Air-Tight-Containers.jpg",
            due3:"https://cdn-fbcdm.nitrocdn.com/lCsZbdoeFoBheKwUKyjvhZqMoGaBchBA/assets/static/optimized/wp-content/uploads/2020/12/7659733165ab46ed82909226d7a04e54.Gas-Lighter-1024x1024.jpg",
       },]

       let guest=document.getElementById("three");

       threImg.forEach(elm=>{

        let div=document.createElement("div");

        let img=document.createElement("img");
        img.src=elm.due1;
        img.addEventListener("click",function(){
            window.location.href="kitchen.html";
        })

        let img1=document.createElement("img");
        img1.src=elm.due2;
        img1.addEventListener("click",function(){
            window.location.href="../pages/product_page.html";
        })

        let img2=document.createElement("img");
        img2.src=elm.due3;
        img2.addEventListener("click",function(){
            window.location.href="lighter.html";
        })

        div.append(img,img1,img2);

        guest.append(div);

       });

       let bigImg=document.getElementById("Big")

       let div=document.createElement("div");

       let img=document.createElement("img");
       img.src="https://cdn-fbcdm.nitrocdn.com/lCsZbdoeFoBheKwUKyjvhZqMoGaBchBA/assets/static/optimized/wp-content/uploads/2020/08/e61547414b36a64ea9b24b726acd7018.Uboric-1.jpg";

       div.append(img);
       bigImg.append(div);

       const Cato=[{
        img1:"https://cdn-fbcdm.nitrocdn.com/lCsZbdoeFoBheKwUKyjvhZqMoGaBchBA/assets/static/optimized/wp-content/uploads/elementor/thumbs/302a8708a1f07b4b13e21afd27ece18c.other-category-heading-pkx8tu1r8n97qduq2ja9rlt0l2lgx8yc1tsaz101ow.png",
        name:"OTHER CATEGORIES",
        img2:"https://cdn-fbcdm.nitrocdn.com/lCsZbdoeFoBheKwUKyjvhZqMoGaBchBA/assets/static/optimized/wp-content/uploads/elementor/thumbs/302a8708a1f07b4b13e21afd27ece18c.other-category-heading-pkx8tu1r8n97qduq2ja9rlt0l2lgx8yc1tsaz101ow.png",
    }]

   let Cat=document.getElementById("Other");

    Cato.forEach(ele => {
        
    let div=document.createElement("div");
    let div1=document.createElement("div");
    let div2=document.createElement("div");
    let div3=document.createElement("div");

    let img=document.createElement("img");
    img.src=ele.img1;

    let img1=document.createElement("img");
    img1.src=ele.img2;
    console.log("img1");

    let p=document.createElement("p");
    p.textContent=ele.name;

    div1.append(img1);
    div2.append(p);
    div3.append(img);

    div.append(div1,div2,div3);

  Cat.append(div);
    });

    
    const threeImg=[{
        due1:"https://cdn-fbcdm.nitrocdn.com/lCsZbdoeFoBheKwUKyjvhZqMoGaBchBA/assets/static/optimized/wp-content/uploads/2021/12/5334fd931b1776f2118ca25c4ccf7aba.banner1-1-1.jpg",
        due2:"https://cdn-fbcdm.nitrocdn.com/lCsZbdoeFoBheKwUKyjvhZqMoGaBchBA/assets/static/optimized/wp-content/uploads/2021/12/69a2a9464ccb6585356c65172e99dce7.banner2-1.jpg",
   },]

   let gueest=document.getElementById("thee");

   threeImg.forEach(elm=>{

    let div=document.createElement("div");

    let img=document.createElement("img");
    img.src=elm.due1;

    let img1=document.createElement("img");
    img1.src=elm.due2;

    div.append(img,img1);

    gueest.append(div);

   });

   let bigImgg=document.getElementById("Newb")

   let div1=document.createElement("div");

   let img1=document.createElement("img");
   img1.src="https://cdn-fbcdm.nitrocdn.com/lCsZbdoeFoBheKwUKyjvhZqMoGaBchBA/assets/static/optimized/wp-content/uploads/2021/02/47504e7c33c45e30ca88c4ad185e8fc1.Headphone.jpg";

   div1.append(img1);
   bigImgg.append(div1);

   const Clothing=[{
    due1:"https://cdn-fbcdm.nitrocdn.com/lCsZbdoeFoBheKwUKyjvhZqMoGaBchBA/assets/static/optimized/wp-content/uploads/2021/12/7c374f52c07abe3fa449845840b773b8.banner3-1.jpg",
    due2:"https://cdn-fbcdm.nitrocdn.com/lCsZbdoeFoBheKwUKyjvhZqMoGaBchBA/assets/static/optimized/wp-content/uploads/2021/12/3624246af5f1f65e52ce77850d7e2f13.banner4-1.jpg",
},]

let Guest=document.getElementById("theee");

Clothing.forEach(elm=>{

let div=document.createElement("div");

let img=document.createElement("img");
img.src=elm.due1;

let img1=document.createElement("img");
img1.src=elm.due2;

div.append(img,img1);

Guest.append(div);

});
let catto=document.getElementById("Catt");
const ShortData=[{
     pic1:"https://cdn-fbcdm.nitrocdn.com/lCsZbdoeFoBheKwUKyjvhZqMoGaBchBA/assets/static/optimized/wp-content/uploads/2020/12/694008a6996d60ae9e25df8a8b2ba911.Socks.jpg",
     pic2:"https://cdn-fbcdm.nitrocdn.com/lCsZbdoeFoBheKwUKyjvhZqMoGaBchBA/assets/static/optimized/wp-content/uploads/2020/12/fc65546ebaa05cc4b8142fb9fb91eacb.Personal-Care.jpg",
     pic3:"https://cdn-fbcdm.nitrocdn.com/lCsZbdoeFoBheKwUKyjvhZqMoGaBchBA/assets/static/optimized/wp-content/uploads/2020/12/0673b33151ceaf7e2ab67cec28d48b37.Braclate.jpg",
     pic4:"https://cdn-fbcdm.nitrocdn.com/lCsZbdoeFoBheKwUKyjvhZqMoGaBchBA/assets/static/optimized/wp-content/uploads/2020/12/3127979d5ea0fa2c5a6cee9d82b9c7dc.Grocery.jpg",
     pic5:"https://cdn-fbcdm.nitrocdn.com/lCsZbdoeFoBheKwUKyjvhZqMoGaBchBA/assets/static/optimized/wp-content/uploads/2020/12/d0661e126af81e0cdf42bd09b88b99cc.Health-Care.jpg",
}];


ShortData.forEach(rat=>{

let div=document.createElement("div");

let img=document.createElement("img");
img.src=rat.pic1;

let img1=document.createElement("img");
img1.src=rat.pic2;

let img2=document.createElement("img");
img2.src=rat.pic3;

let img3=document.createElement("img");
img3.src=rat.pic4;

let img4=document.createElement("img");
img4.src=rat.pic5;

div.append(img,img1,img2,img3,img4);
 
catto.append(div);

});


const Catoo=[{
    img1:"https://cdn-fbcdm.nitrocdn.com/lCsZbdoeFoBheKwUKyjvhZqMoGaBchBA/assets/static/optimized/wp-content/uploads/elementor/thumbs/3d9dbd3314991fd570d0e1403c9ad75d.spices-heading-2-e1608267173425-pkx8te2i0gnc90hxnudm37u6his8ae6wbmp1tbnqmo.png",
    name:"SPICES",
    img2:"https://cdn-fbcdm.nitrocdn.com/lCsZbdoeFoBheKwUKyjvhZqMoGaBchBA/assets/static/optimized/wp-content/uploads/elementor/thumbs/3d9dbd3314991fd570d0e1403c9ad75d.spices-heading-2-e1608267173425-pkx8te2i0gnc90hxnudm37u6his8ae6wbmp1tbnqmo.png",
}]

let Catt=document.getElementById("Ray");

Catoo.forEach(ele => {
    
let div=document.createElement("div");
let div1=document.createElement("div");
let div2=document.createElement("div");
let div3=document.createElement("div");

let img=document.createElement("img");
img.src=ele.img1;

let img1=document.createElement("img");
img1.src=ele.img2;
console.log("img1");

let p=document.createElement("p");
p.textContent=ele.name;

div1.append(img1);
div2.append(p);
div3.append(img);

div.append(div1,div2,div3);

Catt.append(div);
});



let Tream=document.getElementById("Nove");
const ShoortData=[{
     pic1:"https://cdn-fbcdm.nitrocdn.com/lCsZbdoeFoBheKwUKyjvhZqMoGaBchBA/assets/static/optimized/wp-content/uploads/2020/12/88f4b3bfdea867e5de0e011db0884c0f.Spices-1.jpg",
     pic2:"https://cdn-fbcdm.nitrocdn.com/lCsZbdoeFoBheKwUKyjvhZqMoGaBchBA/assets/static/optimized/wp-content/uploads/2020/12/f15bad777af9be19e1e19889814d2368.Spices-2.jpg",
     pic3:"https://cdn-fbcdm.nitrocdn.com/lCsZbdoeFoBheKwUKyjvhZqMoGaBchBA/assets/static/optimized/wp-content/uploads/2020/12/6437b3977ac13cc3f3aab237db3b2440.Spices-3.jpg",
     pic4:"https://cdn-fbcdm.nitrocdn.com/lCsZbdoeFoBheKwUKyjvhZqMoGaBchBA/assets/static/optimized/wp-content/uploads/2020/12/c2383dfdd3627bb81ee9124ef111a939.Spices-5.jpg",
     pic5:"https://cdn-fbcdm.nitrocdn.com/lCsZbdoeFoBheKwUKyjvhZqMoGaBchBA/assets/static/optimized/wp-content/uploads/2020/12/1a72e2d44cfe169f9e489ef527c18d16.Spices-4.jpg",
}];


ShoortData.forEach(rat=>{

let div=document.createElement("div");

let img=document.createElement("img");
img.src=rat.pic1;

let img1=document.createElement("img");
img1.src=rat.pic2;

let img2=document.createElement("img");
img2.src=rat.pic3;

let img3=document.createElement("img");
img3.src=rat.pic4;

let img4=document.createElement("img");
img4.src=rat.pic5;

div.append(img,img1,img2,img3,img4);
 
Tream.append(div);

});


const Ftoo=[{
    img1:"https://cdn-fbcdm.nitrocdn.com/lCsZbdoeFoBheKwUKyjvhZqMoGaBchBA/assets/static/optimized/wp-content/uploads/elementor/thumbs/59231685c59bc2fe4babdfd461dc1396.shoes-icon-right-e1605175492472-pkxdahmpc96i32hqyh9qfkc7owqxivqr4zuwukso7k.png",
    name:"FOOT WEAR",
    img2:"https://cdn-fbcdm.nitrocdn.com/lCsZbdoeFoBheKwUKyjvhZqMoGaBchBA/assets/static/optimized/wp-content/uploads/elementor/thumbs/59231685c59bc2fe4babdfd461dc1396.shoes-icon-right-e1605175492472-pkxdahmpc96i32hqyh9qfkc7owqxivqr4zuwukso7k.png",
}]

let Foot=document.getElementById("Foot");

Ftoo.forEach(ele => {
    
let div=document.createElement("div");
let div1=document.createElement("div");
let div2=document.createElement("div");
let div3=document.createElement("div");

let img=document.createElement("img");
img.src=ele.img1;

let img1=document.createElement("img");
img1.src=ele.img2;
console.log("img1");

let p=document.createElement("p");
p.textContent=ele.name;

div1.append(img1);
div2.append(p);
div3.append(img);

div.append(div1,div2,div3);

Foot.append(div);
});


let bigIImg=document.getElementById("Biig")

let div2=document.createElement("div");

let img3=document.createElement("img");
img3.src="https://cdn-fbcdm.nitrocdn.com/lCsZbdoeFoBheKwUKyjvhZqMoGaBchBA/assets/static/optimized/wp-content/uploads/elementor/thumbs/44342466a1a935f6c6e77989836d9d60.men-fashion-pf2rgkwglk7z47uh031vpxcshl64adc389ivxapmss.jpg";

div2.append(img3);
bigIImg.append(div2);


let Cream=document.getElementById("Clove");
const SrtData=[{
     pic1:"https://cdn-fbcdm.nitrocdn.com/lCsZbdoeFoBheKwUKyjvhZqMoGaBchBA/assets/static/optimized/wp-content/uploads/2020/12/671b399df37f0f7821945802ae7a2294.Foot-Wear-1.jpg",
     pic2:"https://cdn-fbcdm.nitrocdn.com/lCsZbdoeFoBheKwUKyjvhZqMoGaBchBA/assets/static/optimized/wp-content/uploads/2020/12/24ed565685469a3c12e30fd6c0c9d28d.Foot-Wear-3.jpg",
     pic3:"https://cdn-fbcdm.nitrocdn.com/lCsZbdoeFoBheKwUKyjvhZqMoGaBchBA/assets/static/optimized/wp-content/uploads/2020/12/0fc5c251a7eca44842f8f16d92687672.Foot-Wear-2.jpg",
     pic4:"https://cdn-fbcdm.nitrocdn.com/lCsZbdoeFoBheKwUKyjvhZqMoGaBchBA/assets/static/optimized/wp-content/uploads/2020/12/02ab4e150174637177a0d9cba8dd0bf8.Foot-Wear.jpg",
     pic5:"https://cdn-fbcdm.nitrocdn.com/lCsZbdoeFoBheKwUKyjvhZqMoGaBchBA/assets/static/optimized/wp-content/uploads/2020/12/9632e44e08695407666df56ea50b0350.Foot-Wear-5.jpg",
}];


SrtData.forEach(rat=>{

let div=document.createElement("div");

let img=document.createElement("img");
img.src=rat.pic1;

let img1=document.createElement("img");
img1.src=rat.pic2;

let img2=document.createElement("img");
img2.src=rat.pic3;

let img3=document.createElement("img");
img3.src=rat.pic4;

let img4=document.createElement("img");
img4.src=rat.pic5;

div.append(img,img1,img2,img3,img4);
 
Cream.append(div);

});
let decc=document.getElementById("dec");
const text=[
    {
        Play1:"The Ultimate Domestic Online Shopping Experience Platform in India",
        play2:"Online shopping with Uboric is quick, convenient and trouble-free. You can shop for the desired product right from the comfort of your home and get them delivered straight to your doorstep. Uboric offers you the chance to choose top branded products sitting in the comfort of your homes and just clicking on your requirements to get it delivered at your doorstep. Your search for the latest trending variety of unique products ends right here. A wide range of international products from global brands are available at your fingertips. We provide you with a world-class online shopping experience, along with superior service, to suit all your specific requirements. Our products are very reasonably priced and are not easily available elsewhere. Our high-end technology-based systems, combined with a human approach, ensure that you have an amazing and blissful online shopping experience with us. Our emphasis on customer delight drives every activity we undertake to provide you an ultimate, hassle-free and pleasant shopping experience. Our diverse categories of products comprise of fashion & jewellery, mobiles and tablets, home and furniture, electronics, health care and supplements, sports and fitness, beauty and perfumes. We offer almost every variety of product that your heart desires. Just Go Ahead and Explore the magical world of online shopping with Uboric! 24×7 Customer Care: For all your queries and concerns regarding your shopping orders.",
        play3:"Benefits of shopping on Uboric :",
    }
];

text.forEach(emm=>{
    let div=document.createElement("div");

    let hed=document.createElement("h1");
    hed.innerText=emm.Play1;
    hed.setAttribute("id","scrum");

    let hed1=document.createElement("p");
    hed1.innerText=emm.play2;
    hed1.setAttribute("id","scrum1");

    let hed2=document.createElement("p");
    hed2.innerText=emm.play3;
    hed2.setAttribute("id","scrum2");
    

    div.append(hed,hed1,hed2);

    decc.append(div);
});

const text1=[{
    picc:"https://www.marlec.co.uk/wp-content/uploads/2020/03/tick1.png",
    lans:"User-Friendly",
    lans1:"Safe & Secure Shopping ",
    lans2:"Check Out Closely",
    lans3:"Multiple Payment Options: ",
    lans4:"Order History:",
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
    let div5=document.createElement("div");
    div5.setAttribute("id","funny")

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

    let nam4=document.createElement("h2");
    nam4.innerText=wel.lans4;

    div1.append(img,nam);
    div2.append(img1,nam1);
    div3.append(img2,nam2);
    div4.append(img3,nam3);
    div5.append(img4,nam4);

    div.append(div1,div2,div3,div4,div5);
    glad.append(div);
})







