const express = require('express');
const cors = require('cors');
//const mainRoutes = require('./routes/mainRoutes');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 3000;

app.use(express.static('public'));
// app.use(cors());
app.get('/',(req, res, next)=>{
    res.sendFile('Index.html', { root: path.join(__dirname, 'public') });
});
//app.use(mainRoutes);
app.listen(PORT);
console.log('Server is live on port:'+PORT);