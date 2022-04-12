const elRamSixth = document.getElementById("ram-sixth");
const elTitle = document.getElementById("title");
const elMemoryFirst = document.getElementById("memory-first");
const elMemorySecond = document.getElementById("memory-second");
const elOneTb = document.getElementById("memory-third");
const elRamEight = document.getElementById("ram-eight");
const elEight = document.getElementById("eight");
const elMemory = document.getElementById("memory");
const elColor = document.getElementById("colr");
const elGold = document.getElementById("gold");
const elSilver = document.getElementById("silver");
const elGray = document.getElementById("gray");
const elPrice = document.getElementById("price");



elRamSixth.addEventListener("click", ()=> {
  elEight.textContent = "16";
  elRamSixth.classList.add("active");
  elRamEight.classList.remove("active");
  elOneTb.style.display = "block";
  elRamEight.style.display = "block";
  elPrice.textContent = "16 935 000 so'm";
});

elRamEight.addEventListener("click", ()=>{
  elEight.textContent = "8";
  elMemory.textContent = "256 ";
  elRamSixth.classList.remove("active");
  elRamEight.classList.add("active");
  elOneTb.style.display = "none";  
  elPrice.textContent = "12 497 000 so'm";
})  

elMemoryFirst.addEventListener("click", ()=> {
  elMemory.textContent = "256 ";
  elMemoryFirst.classList.add("active");
  elMemorySecond.classList.remove("active");
  elOneTb.classList.remove("active");
  elOneTb.style.display = "block";
  elPrice.textContent = "16 935 000 so'm";
})

elMemorySecond.addEventListener("click", ()=> {
  elMemory.textContent = "512 ";
  elMemoryFirst.classList.remove("active");
  elMemorySecond.classList.add("active");
  elOneTb.classList.remove("active");
  elOneTb.style.display = "block";
  elPrice.textContent = "19 270 500 so'm";
  elRamEight.style.display = "block";
})

elOneTb.addEventListener("click", ()=> {
  elMemory.textContent = "1tb";
  elMemoryFirst.classList.remove("active");
  elMemorySecond.classList.remove("active");
  elOneTb.classList.add("active");
  elRamEight.style.display = "none";
  elRamSixth.classList.add("active");
  elPrice.textContent = "20 438 500 so'm";
  elOneTb.style.display = "block";
})

elSilver.addEventListener("click", ()=> {
  elColor.textContent = "Silver";
  elSilver.classList.add("active");
  elGold.classList.remove("active");
  elGray.classList.remove("active");
  elOneTb.style.display = "block"; 
});

elGray.addEventListener("click", ()=> {
  elColor.textContent = "Space Gray";
  elSilver.classList.remove("active");
  elGold.classList.remove("active");
  elGray.classList.add("active");
  elOneTb.style.display = "block"; 
})

elGold.addEventListener("click", ()=> {
  elColor.textContent = "Gold";
  elSilver.classList.remove("active");
  elGold.classList.add("active");
  elGray.classList.remove("active");
})