const express= require("express")
const app= express();

app.use(express.json());
app.use(express.urlencoded({ extended:false}));

app.use("/add-new-usedcar", (req, res,next) =>{
 res.send(
    `
    <h1>New Used Car</h1>
    <form action="/usedcar" method="POST">
        <input type="text" placeholder="motor name" name="name" /> 
         <input type="text"  placeholder="ID"  name="id"/>
        <input type="submit" value="send"/>
    </form>
    `
 )   
})

app.use("/usedcar", (req,res,next)=>{
console.log(req.body);
//res.send('<h1>Student List</h1>')
res.redirect("/")
})
app.use("/",(req,res,next) => {
    console.log("MidleWare...");
    res.send('<h1>UsedCar</h1>'
    );
});

const PORT = process.env.PORT || 5009;
app.listen(PORT, ()=>{
    console.log("Server running on port:", PORT);
});