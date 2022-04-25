// Store the wallet amount to your local storage with key "amount"
const wallet = +localStorage.getItem('amount') || 0;
const walletH1 = document.querySelector('#wallet');
walletH1.innerText = wallet;

const addToWallet = document.querySelector('#add_to_wallet');
addToWallet.addEventListener('click', function()
{

    const amountInput = +document.querySelector('#amount').value;

    const wallet = +localStorage.getItem('amount') || 0;
    localStorage.setItem('amount', amountInput + wallet);
    walletH1.innerText = amountInput + wallet;

});

const bookMovies = document.querySelector('#book_movies');
bookMovies.addEventListener('click', function()
{
    window.location.href = 'movies.html';
});