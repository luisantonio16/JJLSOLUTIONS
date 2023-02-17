const about__btn = document.getElementById('about__btn');

const about__leer = document.getElementById('about__hide');

about__btn.addEventListener('click' , hidetext);

function hidetext()
{
    about__leer.classList.toggle('about__show')

    if(about__leer.classList.contains('about__show'))
    {
        about__btn.innerHTML = 'Leer Menos';

    }
    else
    {
        about__btn.innerHTML = 'Leer Mas';

    }
}

