const usersAPI = "https://api.github.com/users/"
async function getUserData(uid){
    let cardData = {}
    try {
        const userData = await (await fetch(usersAPI+uid)).json()
        if(userData.message){
            alert(userData.message)
            return false
        }
        cardData.name = userData.login;
        cardData.image = userData.avatar_url;
        cardData.url = userData.html_url;
        cardData.followers = userData.followers;
        const repos = await (await fetch(userData.repos_url)).json()
        cardData.repos = repos.length;
        let stars = 0;
        let forks = 0;
        repos.forEach(repo => {
            forks+= repo.forks_count;
            stars+= repo.stargazers_count;
        })
        cardData.forks= forks;
        cardData.stars= stars;
        return cardData;
    }catch(e){
        console.log(e)
    }
}
getUserData('gunjanrajtiwari')

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

function displayCards(data){
    const cards = document.getElementById('myCard')
    cards.innerHTML='';
    for(user of data){
        let total = user.repos+user.forks+2*user.stars+2*user.followers;
        let card = `
        <div class="profile-card">
            <h2 class="card-title">${user.name}</h2>
            <div class="img-div"><img class="profile-pic" src=${user.image} alt="Photo"></div>
            <div class="github-info">
                <p>Total Followers: <span>${user.followers}</span></p>
                <p>Total Stars: <span>${user.stars}</span></p>
                <p>Total Forks: <span>${user.forks}</span></p>
                <p>Public Repos: <span>${user.repos}</span></p>
            </div>
            <h2 class="final-score">Your score is: ${total}</h2>
            <button onclick="window.open('${user.url}','_blank')" class="btn-card">Profile</button>
        </div>
        `
        cards.innerHTML+=card;
    }
}

async function getScore(form){
    event.preventDefault()
    const userData = await getUserData(form.uid.value)
    if(userData){
        displayCards([userData]);
    }
}

async function compareScore(form){
    event.preventDefault()
    const [user1,user2] = await Promise.all([getUserData(form.uid1.value),getUserData(form.uid2.value)])
    if(user1 && user2){
        displayCards([user1,user2])
    }
}
