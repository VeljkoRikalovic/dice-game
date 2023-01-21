let broj = Math.floor(Math.random() * 6) + 1

let broj1 = 'dice' + broj + '.png'

let broj2 = document.querySelectorAll('img')[0];

broj2.setAttribute('src', broj1)

let broj4 = Math.floor(Math.random() * 6) + 1

let broj5 = 'dice' + broj4 + '.png'

let broj3 = document.querySelectorAll('img')[1];

broj3.setAttribute('src', broj5)

if(broj===broj4){document.querySelector('h1').innerHTML = 'Draw!'}


if(broj>broj4){
    document.querySelector('h1').innerHTML = 'Player 1 won!'
}

if(broj<broj4){
    document.querySelector('h1').innerHTML = 'Player 2 won!'
}

