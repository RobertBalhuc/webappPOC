var express=require('express');
var app=express();
var userData=[
{'id':1,'fname':'Mark','lname':'Otto','username':'@modo'},
{'id':2,'fname':'Jacob','lname':'Thronton','username':'@afat'},
{'id':3,'fname':'Larry','lname':'The bhird','username':'@twitter'}
];
app.use(function(req,res,next){
	res.header("Access-Control-Allow-Origin","*");
	res.header("Access-Control-Allow-Headers","Origin,X-Requested-with,Content-Type,Accept")
	next();
})

app.get('/users',function (req,response){
	response.setHeader('Content-Type','application/JSON');
	response.send(JSON.stringify(userData));
});

app.listen(3001,function(){
	console.log('Server started on port 3001!');
});
