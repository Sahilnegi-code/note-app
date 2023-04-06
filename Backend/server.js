const express =  require("express");
const data = require("./data/notes.js")
const dotenv = require('dotenv'); 
const cors = require("cors");
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoute");
const noteRoutes = require("./routes/noteRoutes");
const path = require('path');
const app = express();
dotenv.config();
connectDB();
app.use(cors());
app.use(express.json());
app.use('/api/users',userRoutes);
app.use('/api/notes',noteRoutes);
// deployment 
__dirname = path.resolve();
console.log(process.env.NODE_ENV)
if( process.env.NODE_ENV === 'production'){
    console.log("tr")
    app.use(express.static(path.join(__dirname, '/my-app/build')))
    app.get('*', (req , res)=>{
        console.log("hello")
        res.sendFile(path.resolve(__dirname , "my-app", "build" , "index.html"));
    })
}
else{
    console.log("not working")
}

// deployment


const PORT = process.env.PORT ;
app.get('/api/notes/:id',(req,res)=>{
    const note = data.find((n)=>{
     return   n._id === req.params.id;
    }) 
    
    res.send(PORT);
});
app.listen( PORT , console.log(`server started on port  `));

