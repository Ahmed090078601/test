const { request } = require("express");
const express =require("express");
const app=express();

var fruit=[
    {id:1,fruitName:"apple",fruitColor:"red"},
    {id:2,fruitName:"banana",fruitColor:"yellow"},
    {id:3,fruitName:"carrot",fruitColor:"light red"},
   
]

app.get("/fruit",(request,response)=>{
var result =`<table border=1>
<tr><th>ID</th>
<th>Name</th>
<th>Colour</th></tr>
`
fruit.map((value2)=>{
result += `<tr><th>${value2.id}</th>
<th>${value2.fruitName}</th>
<th>${value2.fruitColor}</th>
</tr>`
});
result +=`</table>`
response.send("ahmed program"+result);

});
//get response via postman
app.get("/fruit/:id",(request,response)=>
{
    var fruits=fruit.find(i => i.id === parseInt(request.params.id))
    response.send("The id is this"+JSON.stringify(fruits))
})
app.use(express.json())
//TO add record
app.post("/fruit",(request,response)=>
{
var fruits={
    id: fruit.length + 1,
    fruitName: request.body.fruitName,
    fruitColor:request.body.fruitColor
    

}

fruit.push(fruits)
console.log("Fruit added"+fruits +"Total"+fruit.length);

response.send("The record is added in to stream")
});

//To delete record
app.delete("/fruit/:id",(request,response)=>
{
var fruits=fruit.find(i => i.id ===parseInt(request.params.id))
console.log(fruits);
var index= fruit.indexOf(fruits)
console.log(index);
fruit.splice(index,1)
response.send ("fruit is deleted")
console.log(fruit.splice)
});


app.listen(9099,()=>{
console.log("Demo app is running")
});
