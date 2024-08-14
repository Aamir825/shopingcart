
// Responsive Navbar
let toggleBtn = document.getElementById("toggle-btn");
let menus = document.getElementById("menus");
toggleBtn.addEventListener('click', ()=>{
    menus.classList.toggle("hide");
})

// dynamic Gallery
let fullImage = document.getElementById("top-img");
let allImages = document.querySelectorAll(".below-gallery div img");
allImages.forEach((elem)=>{
    elem.addEventListener('click', (img)=>{
        console.log(img.target.src)
        let finalImg = img.target.src;
        fullImage.src = finalImg;

        document.querySelector(".active").classList.remove("active");
        img.target.classList.add("active");
    })
})


// couter
let decrease = document.getElementById("decrease");
let increase = document.getElementById("increase");
let value = document.getElementById("value");
let counter = 1;
value.innerHTML = counter;
decrease.addEventListener('click', ()=>{
    if(counter >1){
       value.innerHTML = --counter;
    }
})
increase.addEventListener('click', ()=>{
    value.innerHTML = ++counter;
})

// cart btn toggle
let cartIcon = document.getElementById("carticon");
let cartdata = document.getElementById("cart-data");
cartIcon.addEventListener('click', ()=>{
    cartdata.classList.toggle("show");
})

// Add to cart
let cartBtn = document.getElementById("addcart");
let cartImg = document.getElementById("cart-img");
let cartHead = document.getElementById("cart-head");
let itemVal = document.getElementById("cvalue");
let cartval = document.getElementById("cval");
let counVal = document.getElementById("couvalue");
let total = document.getElementById("total");
let cartempty = document.getElementById("cart-empty");
let cartinfo = document.getElementById("cart-info");
cartBtn.addEventListener('click', ()=>{
    alert(`the counter value is ${counter}`)
    let img = fullImage.src;
    // console.log(img);
    cartImg.src = img;
    counVal.innerHTML = counter;
    total.innerHTML = (itemVal.innerHTML * counter);
    cartempty.style.display = "none";
    cartinfo.style.display = "flex";

})




// Popup Gallery
let clickImg = document.getElementById("top-img");
let popupGallery = document.getElementById("popup-gallery");
let closePopup = document.getElementById("close");
let slides = document.querySelectorAll(".slide");
let next = document.getElementById("next");
let prev = document.getElementById("previous");
let count = 0;

clickImg.addEventListener("click", ()=>{
    popupGallery.style.display = "block"
})
closePopup.addEventListener('click', ()=>{
    popupGallery.style.display = "none"
})

slides.forEach((slide,index)=>{
    slide.style.left = `${index * 100}%`;
})

next.addEventListener('click', ()=>{
    if(count <3){
        count++;
        slideImage();
    }
})
prev.addEventListener('click', ()=>{
    if(count >0){
        count--;
        slideImage();
    }
})

const slideImage = () =>{
    slides.forEach((slide)=>{
        slide.style.transform = `translateX(-${count * 100}%)`;
    })
}
