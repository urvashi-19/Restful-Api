const express = require('express');

const users = require('./MOCK_DATA.json');
const app = express()

// GET 


app.get('/' , (req , res)=>{
    const h = `
    <h   style= "color: red  ; font-size: 80px;">Hello welcome to my page </h>` ;
    res.send(h);

})


app.get('/api/users', (req , res)=>{
    res.json(users) ;
})

app.get('/users' , (req , res)=>{
    const html = `
    <ul>

     ${users.map((data)=>
        `<li>${data.first_name}</li>`
    ).join("")}
    </ul>`

    res.send(html);
});


//dynamic path users

app.get('/api/users/:userId' , (req , res)=>{
    
    const id = Number(req.params.userId);
    const user = users.find((user)=> user.id==id);
    res.send(user);

})


/// Browser basically uses 'GET' 

//routing of post , patch , put and delete req

app.post('/api/users' ,(req , res)=>{
    res.json({status:"pending"});
})



app.patch('/api/users/:id' , (req , res)=>{
    //for  edit(patch) we need id
    res.json({status:"pending"});
})

app.delete('/api/users/:id' , (req , res)=>{
    //for  edit(delete) we need id
    res.json({status:"pending"});
})







PORT = 8000;
app.listen(PORT , ()=>{
    console.log("server is running at " , PORT);
})