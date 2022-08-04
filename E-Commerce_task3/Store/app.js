const musicSection=document.getElementById('music-div')
const notification=document.querySelector('.notification')
const count=document.getElementById(`count`)
const cartItems=document.querySelector(`.cartItems`)
const totalPriceTag=document.getElementById(`totalPrice`)
let countItem=0
let totalPrice=0
let id;
let database=[
    {title:`album 1`,
    content:` <div class="item">
    <span  class="itemTopic"><img src="http://funilab-prod-2.s3.amazonaws.com/2017/10/31/10/31/20/101/Colorslab.png" alt=""><span>Album 1</span></span>
    <span  class="priceTopic">12.99</span>
    <span  class="quantityTopic"><input value="1" type="text" name="" id=""><button>REMOVE</button></span>
</div>`,price:12.99},
{title:`album 2`,
content:` <div class="item">
<span  class="itemTopic"><img src="https://cdn.wallpapersafari.com/87/23/Vcsk2Z.jpg" alt=""><span>Album 2</span></span>
<span  class="priceTopic">14.99</span>
<span  class="quantityTopic"><input value="1" type="text" name="" id=""><button>REMOVE</button></span>
</div>`,price:14.99},
{title:`album 3`,
content:` <div class="item">
<span  class="itemTopic"><img src="https://uploads.dailydot.com/918/6c/LHdMYpp.jpg?auto=compress&fit=scale&fm=pjpg" alt=""><span>Album 2</span></span>
<span  class="priceTopic">9.99</span>
<span  class="quantityTopic"><input value="1" type="text" name="" id=""><button>REMOVE</button></span>
</div>`,price:9.99
},
{title:`album 4`,
content:` <div class="item">
<span  class="itemTopic"><img src="https://cdn.pixabay.com/photo/2016/12/15/20/21/texture-1909992_960_720.jpg" alt=""><span>Album 2</span></span>
<span  class="priceTopic">19.99</span>
<span  class="quantityTopic"><input value="1" type="text" name="" id=""><button>REMOVE</button></span>
</div>`,price:19.99
},
{title:`album5`,
content:` <div class="item">
<span class="itemTopic"><img src="https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1648657741_8743286.jpg?format=webp&w=376&dpr=1.0" alt=""><span>T-Shirt</span></span>
<span class="priceTopic">12.99</span>
<span class="quantityTopic"><input value="1" typ="text" name="" id=""><button>REMOVE</button></span>
</div>`,price:12.99}]
musicSection.addEventListener('click',(e) => {
    
    if (e.target.innerHTML===`ADD TO CART`) {
        id=e.target.id

        notification.classList.add(`active`)
        setTimeout(() => {
            notification.classList.remove(`active`)
        }, 2000);
        notification.innerHTML=`<h3>Your product: ${database[id-1].title} is added to cart</h3>`
        countItem++
        count.innerHTML=`${countItem}`
        let div = document.createElement('div')
        div.innerHTML=database[id-1].content
        cartItems.appendChild(div)
        totalPrice+=database[id-1].price
        totalPriceTag.innerHTML=`${totalPrice}`
    }

})
console.log(count);

const merchSection =document.getElementById(`merch-section`)
merchSection.addEventListener(`click`,(e)=>{

     if (e.target.innerHTML===`ADD TO CART`) {
        id=e.target.id
        notification.classList.add(`active`)
        setTimeout(() => {
            notification.classList.remove(`active`)
        }, 2000);
        notification.innerHTML=`<h3>Your product: ${id} is added to cart</h3>`
        countItem++
        count.innerHTML=`${countItem}`
}
})

const cartbtn=document.getElementById(`cartBtn`)
const cartContainer=document.getElementById(`cartContainer`)


cartbtn.addEventListener(`click`,()=>{
    cartContainer.classList.add(`active`)
    console.log(`hi`);
})
const seeTheCartBtn=document.getElementById(`seeTheCartBtn`)
seeTheCartBtn.addEventListener(`click`,()=>{
    cartContainer.classList.add(`active`)
})
const cartCloseBtn=document.getElementById(`cartCloseBtn`)
cartCloseBtn.addEventListener(`click`,()=>{
    cartContainer.classList.remove(`active`)
})







