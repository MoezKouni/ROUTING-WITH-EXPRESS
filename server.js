const express = require('express')
const app = express()


app.get('/', (req, res, next) => {
    let timenow = new Date().getHours()
    console.log(timenow)
    if ( timenow > 8 && timenow < 17 ) res.sendFile(__dirname + '/public/home.html'); 

    else {
        res.sendFile(__dirname + '/public/not_open.html');
    }
})

app.use(express.static(__dirname+'/public'))



// app.get('/', (req, res) => {
//     res.sendFile(__dirname + '/public/home.html')
// })

app.listen(3000, () => console.log('server is running on port 3000 !'))