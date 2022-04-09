const express = require('express');
const PORT = process.env.PORT || 3000;
const app = express();

app.get('/',(req,res)=>{
    res.send('hello')
})



const server = app.listen(PORT, ()=> console.log(`server started on port ${PORT}`))

// process.on('SIGTERM',()=>{
//     server.close(()=>{
//         console.log('process terminated')
//     })
// })