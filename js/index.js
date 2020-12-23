function changeTheme(code){
    document.documentElement.style
    .setProperty('--neon', code);
}

function homePage(){
    $('.container').load('home.html')
}

function checkPage(){
    $('.container').load('check.html')
}

function comparePage(){
    $('.container').load('compare.html')
}

function getScore(form){
    alert('You entered: '+form.uid.value)
}

function compareScore(form){
    alert('You entered :'+form.uid1.value+' and '+form.uid2.value)
}
