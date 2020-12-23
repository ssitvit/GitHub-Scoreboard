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

function getScore(){
    alert('Your Score is very good.')
}

function compareScore(){
    alert('Your Score is compared')
}
