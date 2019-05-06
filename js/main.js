'use strict'






const init = () => {
    const body = document.querySelector('body');
    const loadingPage = document.querySelector('[data-loading]');

    body.style.overflow = 'hidden';


    window.onload = () => {
        loadingPage.dataset.loading = 'close';
        body.style.overflow = 'auto';
        welcomeTextAnim();
        


        let bodyClass = body.getAttribute('class');
        
        switch (bodyClass) {
            case 'index':
                sliderInit();
                faqClick();
            break;

            case 'services':
                getElementsOffSet();
            break;

            case 'about':
            break;
        }

  
        
        window.onscroll = () => {
            windowPosAnim();

            
            
        }
    }
    
}


const welcomeTextAnim = () => {
    const dataMoveElements = document.querySelectorAll('[data-move="welcome-text"]');
    let element = 0;


    const interval = setInterval(() => {
        dataMoveElements[element].classList.add('animation');
        element++;
        if(element === dataMoveElements.length) {
            
            clearInterval(interval);
        }

    },100)
}

const windowPosAnim = () => {
    const currentPosition = window.pageYOffset + window.innerHeight * 0.75;
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



// FAQ QUESTIONS ANIMATION
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


/* 
    SERVICES PAGE
 */

 const getElementsOffSet = () => {
    const elementsToGo = document.getElementsByClassName('s1');
    const listBtn = document.querySelectorAll('.links-list li');
    const offSetList = []
    
     for(let i = 0; i < listBtn.length; i++) {
        offSetList.push(elementsToGo[i].offsetTop);
         listBtn[i].addEventListener('click',() => {
            windowMoveTo(i, offSetList);
            
            });
     }

     

    

     
 }


 const windowMoveTo = (i, offSetList) => {
    window.scrollTo({
        top: offSetList[i], 
        behavior: 'smooth'
    }) 
 }

init();










