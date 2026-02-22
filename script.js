
function checkLove(){

let d1 = document.getElementById("d1").value
let m1 = document.getElementById("m1").value
let d2 = document.getElementById("d2").value
let m2 = document.getElementById("m2").value

let d3 = document.getElementById("d3").value
let m3 = document.getElementById("m3").value
let d4 = document.getElementById("d4").value
let m4 = document.getElementById("m4").value

if(
d1=="1" && m1=="0" &&
d2=="8" && m2=="8" &&
d3=="2" && m3=="0" &&
d4=="3" && m4=="5"
){

document.body.innerHTML += "<div id='unlock'>💖 Opening Love Gate 💖</div>"

setTimeout(()=>{
window.location.href="rollcall.html"
},1500)

}
else{
alert("Sai rồi nè ❤️ thử lại đi")
}

}



let images = [
"assets/img/1.jpg",
"assets/img/2.jpg",
"assets/img/3.jpg",
"assets/img/4.jpg",
"assets/img/5.jpg",
"assets/img/6.jpg",
"assets/img/7.jpg",
"assets/img/8.jpg",
"assets/img/9.jpg",
"assets/img/10.jpg",
"assets/img/11.jpg"
]

let index = 0

function showRoll(){

let img = document.getElementById("photo")
let cap = document.getElementById("caption")

// reset animation để lần sau chạy lại
img.style.animation = "none"

setTimeout(()=>{
img.style.animation = "photoEnter 0.8s ease"
},10)

img.src = images[index]

typeCaption(captions[index])

index++

if(index >= images.length)
index = 0

}

setInterval(showRoll,3000)
showRoll()

// tạo trái tim bay

function createHeart(){

let heart = document.createElement("div")

heart.className="heart-float"

heart.innerHTML="❤️"

heart.style.left = Math.random()*window.innerWidth + "px"

heart.style.fontSize = 20 + Math.random()*20 + "px"

heart.style.animationDuration = 4 + Math.random()*4 + "s"

document.querySelector(".hearts").appendChild(heart)

setTimeout(()=>{
heart.remove()
},8000)

}

setInterval(createHeart,400)


// tạo sparkle

function createSparkle(){

let sparkle = document.createElement("div")

sparkle.className="sparkle"

sparkle.style.left = Math.random()*100 + "vw"

sparkle.style.top = Math.random()*100 + "vh"

document.querySelector(".sparkles").appendChild(sparkle)

setTimeout(()=>{
sparkle.remove()
},2000)

}

setInterval(createSparkle,300)

function typeCaption(text){

let cap = document.getElementById("caption")

cap.innerHTML=""

let i=0

let typing = setInterval(()=>{

cap.innerHTML += text.charAt(i)

i++

if(i>=text.length){

clearInterval(typing)

}

},40)

}

let startX = 0

document.addEventListener("touchstart",function(e){

startX = e.touches[0].clientX

})

document.addEventListener("touchend",function(e){

let endX = e.changedTouches[0].clientX

if(startX - endX > 50){

nextImage()

}

if(endX - startX > 50){

prevImage()

}

})

function nextImage(){

index++

if(index >= images.length){
index = 0
}

showRoll()

}

function prevImage(){

index--

if(index < 0){
index = images.length-1
}

showRoll()

}

function createPhotoSparkle(){

let sparkle = document.createElement("div")

sparkle.className="sparkle-ring"

sparkle.style.left = Math.random()*320 + "px"

sparkle.style.top = Math.random()*320 + "px"

document.querySelector(".rollcall").appendChild(sparkle)

setTimeout(()=>{
sparkle.remove()
},2000)

}

setInterval(createPhotoSparkle,500)

let musicStarted = false

document.body.addEventListener("click",function(){

if(!musicStarted){

let audio = document.querySelector("audio")

audio.play()

musicStarted = true

}

})

// auto focus giống OTP

let inputs = document.querySelectorAll("input")

inputs.forEach((input,index)=>{

input.addEventListener("input",function(){

if(this.value.length==1){

if(index < inputs.length-1){

inputs[index+1].focus()

}

}

})

})

inputs.forEach(input=>{

input.addEventListener("input",function(){

this.value = this.value.replace(/[^0-9]/g,'')

})

})

function createHeartParticles(){

let heart = document.querySelector(".heart")

if(!heart) return

for(let i=0;i<6;i++){

let p = document.createElement("div")

p.className="heart-particle"

p.innerHTML="💖"

p.style.animationDuration = 2 + Math.random()*2 + "s"

heart.appendChild(p)

}

}

createHeartParticles()

function checkInputs(){

let inputs = document.querySelectorAll("input")

let filled = true

inputs.forEach(i=>{
if(i.value===""){
filled=false
}
})

let btn = document.querySelector("button")

if(filled){
btn.classList.add("active")
}
else{
btn.classList.remove("active")
}

}

document.querySelectorAll("input").forEach(input=>{
input.addEventListener("input",checkInputs)
})

let music = document.getElementById("bgMusic")
let notice = document.getElementById("musicNotice")

notice.addEventListener("click", ()=>{

music.play()

notice.style.display="none"

})