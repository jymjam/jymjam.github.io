const img = document.getElementById('banner') 
const ran = Math.floor((Math.random() * 10) + 1)

if(ran % 2 == 0){
    img.src = './assets/katz-boomeranged.gif'
}else{
    img.src = './assets/minecraft.gif'
}