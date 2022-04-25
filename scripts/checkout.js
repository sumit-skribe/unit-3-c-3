// Each ticket will cost 100 Rupees
// If wallet amount is insufficient show alert "Insufficient Balance!";
// Else show "Booking successfull!" and adjust the wallet amount in real time
const wallet = +localStorage.getItem('amount') || 0;
const movie = JSON.parse(localStorage.getItem('movie')) || undefined;
const walletH1 = document.querySelector('#wallet');
walletH1.innerText = wallet;

const movie_div = document.querySelector('#movie');
const title = document.createElement('h3');
title.innerText = movie.Title;
const image = document.createElement('img');
image.src = movie.Poster;

movie_div.append(title, image);


const button = document.querySelector('#confirm');
button.addEventListener('click', function()
{
    const user_name = document.querySelector('#user_name').value;
    if(user_name === '' || user_name === ' ')
    {
        alert('Enter User Name!');
        return;
    }
    const numOfSeat = +document.querySelector('#number_of_seats').value;
    if(numOfSeat < 1)
    {
        alert('Enter Number Of Seat!');
        return;
    }

    const amount = numOfSeat * 100;

    const wallet = +localStorage.getItem('amount') || 0;
    if(wallet < amount)
    {
        alert('Insufficient Balance!');
    }
    else
    {
        localStorage.setItem('amount', wallet - amount);
        walletH1.innerText = wallet - amount;
        alert('Booking successful!');
    }
});