const express = require('express');
const app=express();
const hbs=require('hbs');
const path=require('path');
const port=process.env.PORT || 3000;
const static_path=path.join(__dirname, '../views');
const partials_path=path.join(__dirname, '../views/partials');

app.set('view engine', 'hbs');
app.set('views', static_path);
app.use('/public', express.static(path.join(__dirname, "../public")));
app.use('/css', express.static(path.join(__dirname, "../node_modules/bootstrap/dist/css")));
app.use('/js', express.static(path.join(__dirname, "../node_modules/bootstrap/dist/js")));
hbs.registerPartials(partials_path);

app.get('/', (req, res)=>{
    res.render("Home")

})
app.listen(port, ()=>{
    console.log(`listern to the port at ${port}`);
})