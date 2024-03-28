import express from "express";

const app = express();
const port = 9000;

app.get('/', (req, res) => {
    res.send('Welcome to my server!');
});

app.get('/hello', (req, res) => {
    res.send('Hello World!');
})

app.get('/healthcheck', (req, res) => {
    res.status(200).send( 'Server is up!');
});


app.listen(port, () => {
    console.log(`Server is running on port:${port}`);
});



export default app;
