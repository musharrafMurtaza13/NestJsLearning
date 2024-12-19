# NestJsLearning

node --->v22.12.0
npm -----> 10.9.0

Now it’s time to create a module. Create a songs module using nest cli
nest g module songs

You can create a controller very easily. We are going to use the Nest cli to create a
controller
nest g controller songs
 Please create the common folder inside the src directory and also create a middleware folder inside the
common directory. This could be the directory structure src/common/middleware/

nest g module common/middleware/logger --no-spec --no-flat


npm i --save class-validator class-transformer

{
"title": "Lasting Lover",
"artists": ["Siagla"],
"releasedDate" : "2022-07-29 00:00:00",
"duration" :"02:34"
}