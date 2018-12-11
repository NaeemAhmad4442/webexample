// Imported to make path - This gives directory name in default
const path = require('path');
// Express Node Js Packet, to ease the Nodejs functionalities
const express = require('express');
// Body Parser to read data from body in parsed way
const bodyParser = require('body-parser');
// Requiring controller for fetching errors
const errorController = require('./controllers/error');
// Using express function to initialize
const app = express();
//Setting express engine to ejs, this will look into the views folder and search for ejs files and will convert them into html
app.set('view engine', 'ejs');
app.set('views', 'views');
// Importing admin and shop routes from routes folder
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
// Using body parser for every request
app.use(bodyParser.urlencoded({ extended: false }));
// Allowing public folder containing assets to be accessed globally
app.use(express.static(path.join(__dirname, 'public')));
// Directing every request starting with /admin towards admin routes folder
app.use('/admin', adminRoutes);
// Directing every request towards shop routes folder
app.use(shopRoutes);
// Directing towards error controller
app.use(errorController.get404);
// Starting App
let port = process.env.PORT;
if (port == null || port == "") {
  port = 8000;
}
app.listen(port);