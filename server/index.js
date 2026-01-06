const express = require('express')

const app = express();

app.get('/', (req,res) =>{
    const dummy = [
        {username: 'sarthak',
            city: 'bhopal',
            age:22,
        }
    ]
    res.json({data:dummy})
})

app.listen(8000, ()=>{
    console.log('server is running at 8000 ...');
    
})