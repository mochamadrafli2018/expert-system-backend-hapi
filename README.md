## Expert System for Diagnostic Eye Disease Backend build with Hapi (Node Js Framework)

https://hapi.dev/

## Development Dependencies

## Install nodemon 
To keep the local server running when the code was changed

`npm install nodemon --save-dev`

## Install ESLint for javascript styling

`npm install eslint --save-dev`

`npx eslint --init`

Execute ESLint with

`npm run lint`

Some of javascript styling in ESLint:
1. https://google.github.io/styleguide/jsguide.html
2. https://github.com/airbnb/javascript#arrow-functions
3. https://standardjs.com/

## Install Hapi (Node Js Framework)

`npm install @hapi/hapi`

Then check package.json

## Running Hapi

`cd name_of_hapi_folder`

`npm run start-dev` for deployment (in CMD/Node.js command prompt/Git bash/Git CMD)

or

`npm run start` for build production (in Netlify or Heroku)

## Check the output at Postman or browser at :

1. localhost:5000 to access data with GET HTTP Method
2. localhost: 5000 to post data trough client side with POST HTTP Method and get diagnostic eye disease result
 
## Reference - Eye diseases data to build algorithms for diagnostic eye diseases

[1] http://jcosine.if.unram.ac.id/index.php/jcosine/article/download/11/2/
[2] https://ejournal.stmik-time.ac.id/index.php/jurnalTIMES/article/download/5/3/13
 
Reference: https://www.dicoding.com/academies/261/tutorials

## License

This project was released under MIT License
