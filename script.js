// Calculator
let rangTwo = document.getElementById('two');
let month = document.querySelector('.month');
let percent2 = document.querySelector('.percent');
let rangOne = document.getElementById('one');
let dollars = document.querySelector('.dollars');


dollars.innerHTML= rangOne.value;
month.innerHTML= rangTwo.value + 'Month';
let wholeRow = document.querySelector('.whole');
rangOne.addEventListener('input', calkOne);
let percent = 10;
let summ;
function calkOne() {
        percent2.innerHTML = percent;
        dollars.innerHTML= rangOne.value   + '$';
         summ = Number(rangOne.value);
        let percentsumm = summ + ( percent * summ ) / 100 + '$';
        wholeRow.innerHTML = percentsumm;
  
  
    calktwo();
}
calkOne();
rangTwo.addEventListener('input', calktwo);
function calktwo(){
  
    
        month.innerHTML= rangTwo.value   + 'Month';
        let summTwo = Number(rangTwo.value);
        let y = summ; 
      
        if (summTwo < 5) {
            percent2.innerHTML= 10 + '%';
            let x = y + (y * 10) / 100;
          
            wholeRow.innerHTML = x;
            
        }
        if (summTwo > 5) {
            percent2.innerHTML= 5 + '%';
            let x = y + (y * 5) / 100;
            console.log(x);
            wholeRow.innerHTML = x;
            
        }
        if (summTwo > 12) {
            percent2.innerHTML= 3 + '%';
            let x = y + (y * 3) / 100;
            console.log(x);
            wholeRow.innerHTML = x;
            
        }
        if (summTwo == 24) {
            percent2.innerHTML= 1 + '%';
            let x = y + (y * 1) / 100;
            console.log(x);
            wholeRow.innerHTML = x;
            
        }
  
}
//  23.06.2022 Карточка товаров
class Phonemobile{
    constructor( image,brand,memory,ram,screen,color){
        this.image = image;
        this.brand = brand;
        this.memory = memory;
        this.ram = ram;
        this.screen = screen;
        this.color = color;
    
    
    }
    
        card(number, discont){
            this.number = number;
            this.discont = discont;
           
            newcontainer.innerHTML+=  `
    
    <div>
        <img src = "${this.image}">
        <p class="brand_mobile">${this.brand}</p>
        <p>${this.memory}</p>
        <p>${this.ram}</p>
        <p>${this.screen}</p>
        <p>${this.color}</p>
        <p class="price_mobile"><span>Price:</span> ${this.number - (this.discont * this.number)/100}$</p>
        <p class="discountshow"> 
        <span class="old_price">${this.number} $</span>
        <span class="discount_price">Discount: ${(this.discont )}%</span>
        </p>
    </div>
    
    `;
    let block_array = document.getElementsByClassName('discountshow');
    console.log(block_array);
    for (let index = 0; index < block_array.length; index++) {
        // const element = block_array[index];
    //    console.log(element);
        if (discont==0) {
            // element.classList.add('none');
            block_array[index].className+='none';
            
        }
        else{
            block_array[index].className+='show'; 
        }
    }
        
    };
    
    
    }
    const info = new Phonemobile('image/samsung.jpg', 'Samsung Galaxy S 21', 'Memory: 4 gb', 'Ram: 64 gb', 'Screen: 6.2 inch', 'Color: silver', );
    const info2 = new Phonemobile('/image/xiaomi.jpg', 'Xiaomi Redmi Note 9 Pro', 'Memory: 6 gb', 'Ram: 64 gb', 'Screen: 6.67 inch', 'Color: gray',);
    const info3 = new Phonemobile('/image/iphone.jpg', 'Apple iPhone 11', 'Memory: 4 gb', 'Ram: 128 gb','Screen: 6.1 inch','Color: black');
    const cont_mobile = document.querySelector('.container_mobile');
    const title = document.createElement('h1');
    cont_mobile.appendChild(title);
    title.textContent ='discount on all smartphones up to 10%';
    title.classList.add('main_title');
    const newcontainer = document.createElement('div');
    cont_mobile.appendChild(newcontainer);
    newcontainer.classList.add('wrapper_mobile');
    
    
    
    info.card(300, 4);
    info2.card(400, 23);
    info3.card(600, 0);
    
    