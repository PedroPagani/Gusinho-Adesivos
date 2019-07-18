'use strict'



const gallery = new GalleryControl();


const init = () => {
    const body = document.querySelector('body');
    const loadingPage = document.querySelector('[data-loading]');

  

    body.style.overflow = 'hidden';


    window.onload = () => {

        loadingPage.dataset.loading = 'close';
        body.style.overflow = 'auto';

        
        
        

        let bodyClass = body.getAttribute('class');
        
        switch (bodyClass) {
            case 'index':
                sliderInit();
                faqClick();
            break;

            case 'about':
            break;
        }

  
        
        window.onscroll = () => {
            windowPosAnim();
            //fixedCategorieHeader();

            
        }
    }
    
}





const windowPosAnim = () => {
    let currentPosition = window.pageYOffset + window.innerHeight * 0.75;
    showElement(currentPosition);
    
}



const showElement = (pos) => {
    const dataMove = document.querySelectorAll('[data-move]');
    
    dataMove.forEach((element) => {
        if(pos > element.offsetTop) {
            element.classList.add('animation');
        }
    })

}

// REPENSAR!!!
/* const fixedCategorieHeader = () => {

    const elCategorieHeader = document.getElementById('test');
    
        const headerOffset = elCategorieHeader.offsetTop;
        
        console.log(headerOffset);


    let winPosition = window.pageYOffset;

    console.log(headerOffset);
    

    if (headerOffset < winPosition) {
        elCategorieHeader.classList.add('fixed');
        
    } else {
        elCategorieHeader.classList.remove('fixed');
    }



 
    
    


}
*/


// FAQ QUESTIONS ANIMATION
// aqui verifica se o botão que foi apertado é o mesmo da faqlist
const faqClick = () => {
    const faqList = document.querySelectorAll('[data-switch]');
    const faqBtnQuestion = document.querySelectorAll('.q-title-container');
    const show = document.querySelector('.show');
    
    

    for(let i = 0; i < faqBtnQuestion.length; i++) {
        faqBtnQuestion[i].addEventListener('click', () => {
            for (let f = 0; f < faqList.length; f++) {
                
                
        
                setTimeout(() => {
                    if (i === f) {
                        windowSize(f, faqList, show);                    
                    } else {
                        faqList[f].dataset.switch = 'close'
                        faqBtnQuestion[i].style.color = 'white';
                        
                    }
                },100)
            }
        })
    }

}


// Verify window width to adjust how FAQ list open
// aqui estou pegando o ul de cada lista das respostas e colocando dentro do .show
function windowSize(f, faqList, show) {
    
    const body = document.querySelector('body');
    
    if (faqList[f].dataset.switch === 'close') {
        faqList[f].dataset.switch = 'open';
        show.innerHTML = '';
    } else {
        faqList[f].dataset.switch = 'close';
    }
    
    if (window.innerWidth > 1024 || body.clientWidth + 17 > 1024) {
        show.appendChild(faqList[f]);
    }
    

}


const sliderInit = () => {
    $('.responsive').slick({
        autoplay: true,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              autoplay: true,
              slidesToShow: 1,
              slidesToScroll: 1
            }
          },
         
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
        ]
      });
                      
}



 const windowMoveTo = (i, offSetList) => {
    window.scrollTo({
        top: offSetList[i], 
        behavior: 'smooth'
    }) 
 }

init();










