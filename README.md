# About this project

You can check the website here [http://www.gusinhoadesivos.com.br/](http://www.gusinhoadesivos.com.br) 

I created this website from scratch, using Gulp, HTML, CSS and javascript.


---

## Run project

* clone this repo
* run `npm install` to install all dependencies
* run `gulp` in console
    * When you run `gulp` it will create a `dist` folder with all files. The base directory for the server is the `dist` folder.
    * It will open in `http://localhost:3000`
    * Any change that you do in HTML, SCSS or Javascript (from `js` folder), will update the `dist` folder
    * If you change other file that is not listed above, you need to run `gulp copy` to copy all files to `dist` folder