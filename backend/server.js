import express from 'express'
import products from './productsData.js'
import expressAsyncHandler from 'express-async-handler'
import cors from "cors"
import cookieParser from "cookie-parser"
import bodyParser from "body-parser"
import dotenv from "dotenv"
import { generateToken } from './utils.js'
import gyik from './gyikKerdesek.js'
import slides from './mainPageSlides.js'



dotenv.config();
const app = express();
app.use(cors())

//app.use(cors())
app.use(cookieParser());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Credentials", true)
    next();
});




app.get('/api/products', (req, res) => {
    res.send(products)
});

app.get('/api/gyik', (req, res) => {
    res.send(gyik)
});

app.get('/api/slides', (req, res) => {
    res.send(slides)
});


app.get('/', (req, res) => {
    res.send("Server is ready");
});





app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});
const port = process.env.PORT || 5000;
app.listen(5000, () => {
    console.log(`Server at http://localhost:${port}`)
})


app.post('/api/signin', expressAsyncHandler(async (req, res) => {
    //ToDo check password in database 
    const user = { _id: 1, name: "Bokor Ádám", email: "bokoradam112@gmail.com" }
    res.send({
        _id: user.id,
        name: user.name,
        email: user.email,
        locations: [],
        token: generateToken(user)
    });
    return;
}))
