// Implement debouncing for network request
// On clicking book now store the selected movie in localstorage as key "movie"
// so that you can retrive it on checkout.html page

const wallet = +localStorage.getItem('amount') || 0;
const walletH1 = document.querySelector('#wallet');
walletH1.innerText = wallet;

const movies_div = document.querySelector('#movies');
let id;

async function searchMovies()
{
    try 
    {
        const m_name = document.querySelector('#search').value;
        const request = await fetch(`http://www.omdbapi.com/?s=${m_name}&apikey=1a175640`);
        const data = await request.json();
        const movies = data.Search;
        return movies;
    }
    catch (error)
    {
        console.log('error:', error);
    }
}

function appendMovies(data)
{

    movies_div.innerHTML = null;

    data.forEach(function (el) 
    {
        let childDiv = document.createElement('div');
        let img = document.createElement('img');
        img.src = el.Poster;
        let p = document.createElement('p');
        p.innerText = el.Title;
        let button = document.createElement('button');
        button.innerText = 'Book Now';
        button.setAttribute('class','book_now');
        button.addEventListener('click', function()
        {
            
            function remoteMovie()
            {
                this.Title = el.Title;
                this.Poster = el.Poster; 
            }
            let movie = new remoteMovie();
            localStorage.setItem('movie',JSON.stringify(movie))

            window.location.href = 'checkout.html';
        });
        childDiv.append(img, p, button);

        movies_div.append(childDiv);
    });

}

async function main() 
{

    let data = await searchMovies();
    if (data === undefined)
    {
        movies_div.innerHTML = null;
        return false;
    }
    appendMovies(data);

}

function debounce(func, delay)
{

    if (id) 
    {
        clearTimeout(id);
    }

    id = setTimeout(function ()
    {
        func();
    }, delay);

}