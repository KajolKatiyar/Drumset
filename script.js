window.addEventListener('keydown', (e)=>{
    var audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    var btn = document.querySelector(`.btn[data-key="${e.keyCode}"]`);

    if(audio){
        audio.play();
        audio.currentTime = 0;
        btn.classList.add('play');
    }else{
        // alert('Press the right key!');
        return;
    }
})
var btn = document.querySelectorAll('.btn');
btn.forEach((e) => {
    e.addEventListener('transitionend', remove)
});
function remove(k) {
    if(k.propertyName= "transform"){
        this.classList.remove("play");
    }else{
        return
    }
    
}

