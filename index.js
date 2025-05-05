let openSshooping = document.querySelector('.openSshooping');
let closeSopping = document.querySelector('.closeShoping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');

openSshooping.addEventListener('click',()=>{
    body.classList.add('active');
})

closeSopping.addEventListener('click',()=>{
    body.classList.remove('active');
})

let products = [
    {
       id:1,
       Image:"image-waffle-desktop.jpg",
       name:"Vanilla Bean Crème Brûlée",
       category:"Waffle",
       price:"6.50"
    },
    {
   
       id:2,
       Image:"image-brownie-tablet.jpg",
       name:"Vanilla Bean Crème Brûlée",
       category:"Crème Brûlée",
       price:"7.00"
     },
     {
        id:3,
       Image:"image-macaron-desktop.jpg",
       name:"Macaron Mix of Five",
       category:"Macaaron",
       price:"8.00"
     },
     {
        id:4,
        Image:"image-tiramisu-desktop.jpg",
       name:"Classic Tiramisu",
       category:"Triramisu",
       price:"5.50"
     },
     {
        id:5,
        Image:"image-baklava-desktop.jpg",
        name:"Pistachio Baklava",
        category:"Baklava",
        price:"4.0"
     },
     {
        
        id:6,
        Image:"image-meringue-desktop.jpg",
        name:"Lemon Meringue Pie",
        category:"Pie",
        price:"4.0"
     },
     {
        id:7,
        Image:"image-cake-desktop.jpg",
        name:"Red Velvet Cake",
        category:"Cake",
        price:"4.50"
     },
     {
        id:8,
        Image:"image-brownie-desktop.jpg",
        name:"Salted Caramel Brownie",
        category:"Brownie",
        price:"4.0"
     },
     {
        id:9,
        Image:"image-panna-cotta-desktop.jpg",
        name:"Vanilla Panna Cotta",
        category:"Panna Cotta",
        price:"6.50"
        
     },
];

nevDiv = document.createElement('div');
nevDiv.classList.add('item');
nevDiv.textContent = "this is"
list.appendChild(nevDiv);

let listcard = [];
function initApp(){
    products.forEach((value, Rey)=>{
        let nevDiv = document.createElement('div');
        nevDiv.classList.add('item');
        nevDiv.innerHTML= `
          <div><img src="images/${value.Image}"/>
          <div class="title">${value.name}</div>
          <div class="price">${(value.price.toLocaleString())}</div>
          <button onclick="addToCard(${Rey})">add To Cart</button>
        `;
        list.appendChild(nevDiv);
    })
   }
    

    function addToCard(Rey){
      if(listCard[Rey] == null){
         listCard[Rey] = products[Rey];
         listCard[Rey].quantity = 1;
      }
      reloadCard();
    }
    

    function reloadCard(){
      listCard.innerHTML="";
      let count = 0;
      let totalPrice = 0;
      listCard.forEach((value, Rey) =>{
         totalPrice = totalPrice + value.price;
         count = count + value.quantity;

         if(value != null){
            let nevDiv = document.createElement('li');
            nevDiv.innerHTML = `
            <div><img src="images/${value.image}"/></div>
            <div>${value.name}</div>
            <div>${value.price.toLocaleString()}</div>
            <div>${value.quantity}</div>
            <div>
            <button oncklik="changeQuantit(${Rey}, ${value.quantity - 1})">-</button>
            <div class="count">${value.quantity}</div>
            <button oncklik="changeQuantit(${Rey}, ${value.quantity + 1})">+</button>
            
            </div>
            
            `;
            listCard.appendChild(nevDiv);
         }
      })
      total.innerText = totalPrice.toLocaleString();
      quantity.innerText = count;
    }
    
    initApp();