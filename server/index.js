const express =require('express');
const router =require('./src/routes/api');
const app= new express();

const rateLimit =require('express-rate-limit');
const helmet =require('helmet');
const mongoSanitize =require('express-mongo-sanitize');

const xss =require('xss-clean');
const hpp =require('hpp');
const cors =require('cors');
const cookieParser = require('cookie-parser');
const mongoose =require('mongoose');
const path = require("path");

const dotenv = require("dotenv");

dotenv.config({});

const _dirname = path.resolve();




/* let option = { user: "admin", pass: "123456", autoIndex: true }; */
//let URL="mongodb://localhost:27017/ecom4"
//let option={user:'',pass:"",autoIndex:true};
/* mongoose.connect(URI).then((res)=>{
    console.log("Database Connected")
}).catch((err)=>{
    console.log(err)
})
 */
const corsOptions = {
  origin: "http://localhost:5173",
  credentials: true,
};
app.use(cors(corsOptions));
app.use(cookieParser());
app.use(helmet())
app.use(mongoSanitize())
app.use(xss())
app.use(hpp())

app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({limit: '50mb'}));


const limiter= rateLimit({windowMs:15*60*1000,max:3000})
app.use(limiter)

app.set('etag', false);
app.use("/api/v1",router)

/* app.use(express.static('client/dist')); */

// Add React Front End Routing
app.use(express.static(path.join(_dirname, "/client/dist")));

app.get("*", (_, res) => {
  res.sendFile(path.resolve(_dirname, "client", "dist", "index.html"));
});

mongoose
  .connect(process.env.database, { autoIndex: true })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log("Error connecting to MongoDB");
  });

const PORT = process.env.PORT || 5050;

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`);
});

