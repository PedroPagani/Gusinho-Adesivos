'use strict'




class GalleryControl {

    constructor() {

        this.body = document.querySelector('body');
        this.blackBg = document.querySelector('.black-bg');

        this.photoModalContainer = document.querySelector('.photo-modal-container img');
        this.description = document.querySelector('.description');
        this.photoModal = document.querySelector('[data-isopen]');
        this.closeModalBtn = document.querySelector('.close-button');

        this.photosGrid = document.querySelector('.grid-container');
        this.photosBtn = document.querySelectorAll('.links-list li');
        this.dataPhotos = '';



        this.fetchData();
        this.categorieBtn();
        this.closeBtn();
        

        
        
    }


    fetchData() {
        fetch('../photos-gallery.json')
            .then(res => res.json())
            .then(data => {

                this.dataPhotos = data.photos;

                //console.log(this.dataPhotos);

                for(let p = 0;p < this.dataPhotos.categories[0].photoInfo.length; p++) {

                    this.render(this.dataPhotos.categories[0].photoInfo[p]);
                    this.thumbSelect(this.dataPhotos.categories[0].photoInfo);
                }

            })
            .catch(err => {
                console.log(err);
            })
    }

    //When user click in categorie button, change photo grid;
    categorieBtn() {

        //Check the how many buttons in categories.
        for(let p = 0;p < this.photosBtn.length; p++) {

            this.photosBtn[p].addEventListener('click', (e) => {
                

                if(!e.target.classList.contains('selected')) {

                    // Loop all buttons to remove the selected class
                    for(let s = 0; s < this.photosBtn.length; s++) {
                        
                        if(this.photosBtn[s].classList.contains('selected')) {
                            this.photosBtn[s].classList.remove('selected');
                        }

                    }
                    e.target.classList.add('selected');
                }

                this.photosGrid.innerHTML = '';

                // p defines wich categorie is displaying
                let photoListInfo = this.dataPhotos.categories[p].photoInfo;
                
                
                photoListInfo.forEach(data => {
                    
                    this.render(data);
                    
                })
                //send the array of all photoInfo of the categorie
                this.thumbSelect(photoListInfo);
                
            })
        }
        

       
        
    }

    //Recieve the photoInfo data
    thumbSelect(data) {

        //Get all img container from the grid
        let photoThumbList = document.querySelectorAll('.grid-img-container img');


        for(let t = 0; t < photoThumbList.length; t++) {
            
            // if the user click in the thumb 0, it will open the 0 in photoInfo
            photoThumbList[t].addEventListener('click', () => {

                this.openModal(t, data);

            })
        }
    }

    openModal(t, data) {

        this.photoModalContainer.src = `${data[t].largeThumb}`;

        this.description.innerHTML = `${data[t].description}`;

        this.photoModal.dataset.isopen = 'open';

        this.blackBg.style.display = 'block';
    }


    // Close Photo modal Button
    closeBtn() {

        this.closeModalBtn.addEventListener('click', () => {

            this.photoModal.dataset.isopen = 'close';

            this.blackBg.style.display = 'none';
            
            this.photoModalContainer.src = '';

           
            
        })
        

    }





    render(p) {

        
        let imgContainer = document.createElement('div');
        imgContainer.classList.add('grid-img-container');
        this.photosGrid.appendChild(imgContainer);

        let img = document.createElement('img');
        img.src = `${p.largeThumb}`;
        img.alt = `${p.description}`;
        imgContainer.appendChild(img);

        
        


    }
        
}