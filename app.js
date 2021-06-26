const express = require('express');
const cors = require('cors');
const mainRoutes = require('./routes/mainRoutes');
const app = express();
const PORT = process.env.PORT || 3000;
app.use(cors());

app.use(express.static('public'));
// app.use(cors({origin: 'https://youtubedl.gq'}));

app.use(mainRoutes);
app.listen(PORT);
console.log('Server is live on port:'+PORT);