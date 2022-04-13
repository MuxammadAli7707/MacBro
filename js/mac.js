const elTitle = document.getElementById("title");
const elEight = document.getElementById("eight");
const elMemory = document.getElementById("memory");
const elColor = document.getElementById("colr");
const elGold = document.getElementById("gold");
const elSilver = document.getElementById("silver");
const elGray = document.getElementById("gray");
const elPrice = document.getElementById("price");
const elImage = document.getElementById("main-img");
const RamBox = document.getElementById("ram-box");
const MemoryBox = document.getElementById("memory-box");
const ColorBox = document.getElementById("color-list");
const imgList = document.getElementById("img-list");

macObject.forEach((item) => {
  let li = document.createElement("li");
  li.innerHTML = `
    <button id="ram-sixth" class="ram__btn">${item.ram}GB</button>
  `;
  RamBox.appendChild(li);

})
const PriceBtn = document.querySelectorAll('.ram__btn');
PriceBtn[0].classList.add('active');

PriceBtn.forEach(item =>{
  item.addEventListener('click', ()=>{
    PriceBtn.forEach(element =>{
      element.classList.remove('active');
    })
    item.classList.add('active');
  })
})

macObject[1].mem.forEach((item) => {
  let li = document.createElement("li");
    li.innerHTML = `
      <button id="memory-first" class="ram__btn memory__btns">${item.memory}</button>
    `;
    MemoryBox.appendChild(li);
    console.log(MemoryBox);
})

const MemBtn = document.querySelectorAll(".memory__btns");
MemBtn[0].classList.add("active");
MemBtn.forEach(item =>{
  item.addEventListener('click', ()=>{
    MemBtn.forEach(element =>{
      element.classList.remove('active');
    })
    item.classList.add('active'); 
  })
})

MemBtn[2].style.display = "none";

PriceBtn[1].addEventListener("click", ()=> {
  elEight.textContent = `${macObject[1].ram}`
  PriceBtn[0].style.display = "block";
  MemBtn[2].style.display = "block"; 
  elPrice.textContent = `${macObject[1].mem[0].price}` 
});

PriceBtn[0].addEventListener("click", ()=>{
  elEight.textContent = `${macObject[0].ram}`;
  MemBtn[2].style.display = "none";  
  elMemory.textContent = `${macObject[0].mem[0].memory}`;
  elPrice.textContent = macObject[0].mem[0].price;
})  

MemBtn[0].addEventListener("click", ()=> {
  elMemory.textContent = `${macObject[0].mem[0].memory}`;
  MemBtn[2].style.display = "block";
  PriceBtn[0].style.display = "block";
  elPrice.textContent = "16 935 000 so'm";
})

MemBtn[1].addEventListener("click", ()=> {
  elMemory.textContent = `${macObject[0].mem[1].memory}`;
  MemBtn[2].style.display = "block";
  PriceBtn[0].style.display = "block";
  elPrice.textContent = `${macObject[0].mem[1].price}`
})

MemBtn[2].addEventListener("click", ()=> {
  elMemory.textContent = `${macObject[1].mem[2].memory}`;
  PriceBtn[0].style.display = "none";
  elPrice.textContent = `${macObject[1].mem[2].price}`;
  MemBtn[2].style.display = "block";
})

elSilver.addEventListener("click", ()=> {
  imgList.innerHTML = "";
  mainImg.innerHTML = "";
  listItem.innerHTML = "";
  mainImging.innerHTML = "";
  macObject[0].silver.forEach((item) => {
    let li = document.createElement("li");
    li.innerHTML = `
        <button class="hero__slide slide silvr sliding">
          <img class="slide__img" src="${item}" alt="img">
        </button>
    `;
    imgList.appendChild(li);
  })

  macObject[0].imgSilver.forEach((item) => {
    let li = document.createElement("li");
    li.innerHTML = `
      <img class="hero__imaging" src="${item}" alt="img">
    `;
  
    mainImg.appendChild(li);
  })

  macObject[0].imgSilver.forEach((item) => {
    let li = document.createElement("li");
    li.innerHTML = `
      <img class="hero__imaging" src="${item}" alt="img">
    `;
  
    mainImging.appendChild(li);
  });
  

  macObject[0].silver.forEach((item) => {
    let li = document.createElement("li");
    li.innerHTML = `
        <button class="hero__slide slide itms">
          <img class="slide__img" src="${item}" alt="img">
        </button>
    `;
    listItem.appendChild(li);
  });
  
  
  let imgMod = document.querySelectorAll(".itms");
  imgMod[0].classList.add("aktive");
  console.log(imgMod[0]);
  
  imgMod.forEach(item =>{
    item.addEventListener('click', ()=>{
      imgMod.forEach(element =>{
        element.classList.remove('aktive');
      })
      item.classList.add('aktive');
    })
  })

  let slider = document.querySelectorAll(".sliding");
  let count = 0;

  slider[1].addEventListener("click", ()=> {
    count = 1;
    mainImg.style.transform = `translateX(-${400}px)`
  })

  slider[2].addEventListener("click", ()=> {
    count = 2;
    mainImg.style.transform = `translateX(-${800}px)`
  })
  slider[3].addEventListener("click", ()=> {
    count = 3;
    mainImg.style.transform = `translateX(-${1200}px)`
  })
  slider[4].addEventListener("click", ()=> {
    count = 4;
    mainImg.style.transform = `translateX(-${1600}px)`
  })

  slider[0].addEventListener("click", ()=> {
    count = 0;
    mainImg.style.transform = `translateX(-${0}px)`
  })

  let modItms = document.querySelectorAll(".itms");
  let counting = 0;

  modItms[1].addEventListener("click", ()=> {
    counting = 1;
    mainImging.style.transform = `translateX(-${400}px)`;
  })

  modItms[2].addEventListener("click", ()=> {
    counting = 2;
    mainImging.style.transform = `translateX(-${800}px)`;
  })
  modItms[3].addEventListener("click", ()=> {
    counting = 3;
    mainImging.style.transform = `translateX(-${1200}px)`;
  })
  modItms[4].addEventListener("click", ()=> {
    counting = 4;
    mainImging.style.transform = `translateX(-${1600}px)`;
  })

  modItms[0].addEventListener("click", ()=> {
    counting = 0;
    mainImging.style.transform = `translateX(-${0}px)`;
  })

  let imgSilver = document.querySelectorAll(".silvr");
  imgSilver[0].classList.add("aktive");
  imgSilver.forEach(item =>{
    item.addEventListener('click', ()=>{
      imgSilver.forEach(element =>{
        element.classList.remove('aktive');
      })
      item.classList.add('aktive');
    })
  })

  elColor.textContent = "Silver";
  MemBtn[2].style.display = "block";

});


elGray.addEventListener("click", ()=> {
  imgList.innerHTML = "";
  listItem.innerHTML = "";
  mainImg.innerHTML = "";
  mainImging.innerHTML = "";
  macObject[0].SpaceGray.forEach((item) => {
    let li = document.createElement("li");
    li.innerHTML = `
        <button class="hero__slide slide gry sliding">
          <img class="slide__img" src="${item}" alt="img">
        </button>
    `;
    imgList.appendChild(li);
  })
  macObject[0].imgGray.forEach((item) => {
    let li = document.createElement("li");
    li.innerHTML = `
      <img class="hero__imaging" src="${item}" alt="img">
    `;
  
    mainImg.appendChild(li);
  })

  macObject[0].imgGray.forEach((item) => {
    let li = document.createElement("li");
    li.innerHTML = `
      <img class="hero__imaging" src="${item}" alt="img">
    `;
  
    mainImging.appendChild(li);
  });
  

  macObject[0].SpaceGray.forEach((item) => {
    let li = document.createElement("li");
    li.innerHTML = `
        <button class="hero__slide slide itms">
          <img class="slide__img" src="${item}" alt="img">
        </button>
    `;
    listItem.appendChild(li);
  });
  
  
  let imgMod = document.querySelectorAll(".itms");
  imgMod[0].classList.add("aktive");
  console.log(imgMod[0]);
  
  imgMod.forEach(item =>{
    item.addEventListener('click', ()=>{
      imgMod.forEach(element =>{
        element.classList.remove('aktive');
      })
      item.classList.add('aktive');
    })
  })

  let slider = document.querySelectorAll(".sliding");
  let count = 0;

  slider[1].addEventListener("click", ()=> {
    count = 1;
    mainImg.style.transform = `translateX(-${400}px)`
  })

  slider[2].addEventListener("click", ()=> {
    count = 2;
    mainImg.style.transform = `translateX(-${800}px)`
  })
  slider[3].addEventListener("click", ()=> {
    count = 3;
    mainImg.style.transform = `translateX(-${1200}px)`
  })
  slider[4].addEventListener("click", ()=> {
    count = 4;
    mainImg.style.transform = `translateX(-${1600}px)`
  })

  slider[0].addEventListener("click", ()=> {
    count = 0;
    mainImg.style.transform = `translateX(-${0}px)`
  })

  let modItms = document.querySelectorAll(".itms");
  let counting = 0;

  modItms[1].addEventListener("click", ()=> {
    counting = 1;
    mainImging.style.transform = `translateX(-${400}px)`;
  })

  modItms[2].addEventListener("click", ()=> {
    counting = 2;
    mainImging.style.transform = `translateX(-${800}px)`;
  })
  modItms[3].addEventListener("click", ()=> {
    counting = 3;
    mainImging.style.transform = `translateX(-${1200}px)`;
  })
  modItms[4].addEventListener("click", ()=> {
    counting = 4;
    mainImging.style.transform = `translateX(-${1600}px)`;
  })

  modItms[0].addEventListener("click", ()=> {
    counting = 0;
    mainImging.style.transform = `translateX(-${0}px)`;
  })

  let imgGray = document.querySelectorAll(".gry");
  imgGray[0].classList.add("aktive");

  imgGray.forEach(item =>{
    item.addEventListener('click', ()=>{
      imgGray.forEach(element =>{
        element.classList.remove('aktive');
      })
      item.classList.add('aktive');
    })
  })
  elColor.textContent = "Space Gray";
  MemBtn[2].style.display = "block";
})

elGold.addEventListener("click", ()=> {
  imgList.innerHTML = "";
  mainImg.innerHTML = "";
  listItem.innerHTML = "";
  mainImging.innerHTML = "";
  macObject[0].gold.forEach((item) => {
    let li = document.createElement("li");
    li.innerHTML = `
        <button class="hero__slide slide sliding">
          <img class="slide__img" src="${item}" alt="img">
        </button>
    `;
    imgList.appendChild(li);
  })
  
  macObject[0].imgGold.forEach((item) => {
    let li = document.createElement("li");
    li.innerHTML = `
      <img class="hero__imaging" src="${item}" alt="img">
    `;
  
    mainImg.appendChild(li);
  })
  macObject[0].imgGold.forEach((item) => {
    let li = document.createElement("li");
    li.innerHTML = `
      <img class="hero__imaging" src="${item}" alt="img">
    `;
    mainImging.appendChild(li);
  });
  

  macObject[0].gold.forEach((item) => {
    let li = document.createElement("li");
    li.innerHTML = `
        <button class="hero__slide slide itms">
          <img class="slide__img" src="${item}" alt="img">
        </button>
    `;
    listItem.appendChild(li);
  });
  
  
  let imgMod = document.querySelectorAll(".itms");
  imgMod[0].classList.add("aktive");
  console.log(imgMod[0]);
  
  imgMod.forEach(item =>{
    item.addEventListener('click', ()=>{
      imgMod.forEach(element =>{
        element.classList.remove('aktive');
      })
      item.classList.add('aktive');
    })
  })

  let slider = document.querySelectorAll(".sliding");
  let count = 0;

  slider[1].addEventListener("click", ()=> {
    count = 1;
    mainImg.style.transform = `translateX(-${400}px)`
  })

  slider[2].addEventListener("click", ()=> {
    count = 2;
    mainImg.style.transform = `translateX(-${800}px)`
  })
  slider[3].addEventListener("click", ()=> {
    count = 3;
    mainImg.style.transform = `translateX(-${1200}px)`
  })
  slider[4].addEventListener("click", ()=> {
    count = 4;
    mainImg.style.transform = `translateX(-${1600}px)`
  })

  slider[0].addEventListener("click", ()=> {
    count = 0;
    mainImg.style.transform = `translateX(-${0}px)`
  })

  let modItms = document.querySelectorAll(".itms");
  let counting = 0;

  modItms[1].addEventListener("click", ()=> {
    counting = 1;
    mainImging.style.transform = `translateX(-${400}px)`;
  })

  modItms[2].addEventListener("click", ()=> {
    counting = 2;
    mainImging.style.transform = `translateX(-${800}px)`;
  })
  modItms[3].addEventListener("click", ()=> {
    counting = 3;
    mainImging.style.transform = `translateX(-${1200}px)`;
  })
  modItms[4].addEventListener("click", ()=> {
    counting = 4;
    mainImging.style.transform = `translateX(-${1600}px)`;
  })

  modItms[0].addEventListener("click", ()=> {
    counting = 0;
    mainImging.style.transform = `translateX(-${0}px)`;
  })

  let imgActive = document.querySelectorAll(".hero__slide");
  imgActive[0].classList.add("aktive");
  
  imgActive.forEach(item =>{
    item.addEventListener('click', ()=>{
      imgActive.forEach(element =>{
        element.classList.remove('aktive');
      })
      item.classList.add('aktive');
    })
  })
  elColor.textContent = "Gold";
  MemBtn[2].style.display = "block";
})

macObject[0].gold.forEach((item) => {
  let li = document.createElement("li");
  li.innerHTML = `
      <button class="hero__slide slide sliding">
        <img class="slide__img" src="${item}" alt="img">
      </button>
  `;
  imgList.appendChild(li);
})


let imgActive = document.querySelectorAll(".hero__slide");
imgActive[0].classList.add("aktive");

imgActive.forEach(item =>{
  item.addEventListener('click', ()=>{
    imgActive.forEach(element =>{
      element.classList.remove('aktive');
    })
    item.classList.add('aktive');
  })
})

const mainImg = document.getElementById("imgbox");

macObject[0].imgGold.forEach((item) => {
  let li = document.createElement("li");
  li.innerHTML = `
    <img class="hero__imaging" src="${item}" alt="img">
  `;

  mainImg.appendChild(li);
})

// ---- MODAL MAIN IMG ---- 
const mainImging = document.getElementById("imgboxing");

macObject[0].imgGold.forEach((item) => {
  let li = document.createElement("li");
  li.innerHTML = `
    <img class="hero__imaging" src="${item}" alt="img">
  `;

  mainImging.appendChild(li);
})

const listItem = document.getElementById("lists");
macObject[0].gold.forEach((item) => {
  let li = document.createElement("li");
  li.innerHTML = `
      <button class="hero__slide slide itms">
        <img class="slide__img" src="${item}" alt="img">
      </button>
  `;
  listItem.appendChild(li);
})


let imgMod = document.querySelectorAll(".itms");
imgMod[0].classList.add("aktive");
console.log(imgMod[0]);

imgMod.forEach(item =>{
  item.addEventListener('click', ()=>{
    imgMod.forEach(element =>{
      element.classList.remove('aktive');
    })
    item.classList.add('aktive');
  })
})


let slider = document.querySelectorAll(".sliding");
let count = 0;

slider[1].addEventListener("click", ()=> {
  count = 1;
  mainImg.style.transform = `translateX(-${400}px)`
})

slider[2].addEventListener("click", ()=> {
  count = 2;
  mainImg.style.transform = `translateX(-${800}px)`
})
slider[3].addEventListener("click", ()=> {
  count = 3;
  mainImg.style.transform = `translateX(-${1200}px)`
})
slider[4].addEventListener("click", ()=> {
  count = 4;
  mainImg.style.transform = `translateX(-${1600}px)`
})

slider[0].addEventListener("click", ()=> {
  count = 0;
  mainImg.style.transform = `translateX(-${0}px)`
})

let modItms = document.querySelectorAll(".itms");
let counting = 0;

modItms[1].addEventListener("click", ()=> {
  counting = 1;
  mainImging.style.transform = `translateX(-${400}px)`
})

modItms[2].addEventListener("click", ()=> {
  counting = 2;
  mainImging.style.transform = `translateX(-${800}px)`
})
modItms[3].addEventListener("click", ()=> {
  counting = 3;
  mainImging.style.transform = `translateX(-${1200}px)`
})
modItms[4].addEventListener("click", ()=> {
  counting = 4;
  mainImging.style.transform = `translateX(-${1600}px)`
})

modItms[0].addEventListener("click", ()=> {
  counting = 0;
  mainImging.style.transform = `translateX(-${0}px)`
})


const elPlus = document.getElementById("plus");
const elSub = document.getElementById("text");
const elMinus = document.getElementById("minus");
elPlus.addEventListener("click", ()=> {
  elSub.value++;
})

elMinus.addEventListener("click", ()=> {
  elSub.value--;
})