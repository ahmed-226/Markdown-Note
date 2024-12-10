const express = require('express');
const apiRouter = require('./Routes/api.js');

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.use('/api',apiRouter); 


// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
