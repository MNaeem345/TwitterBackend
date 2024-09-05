import express from 'express';
import userRoutes from './routes/userRoutes';
import tweetRoutes from './routes/tweetRoutes';


const app = express();
app.use(express.json());
app.use('/user', userRoutes);
app.use('/tweet', tweetRoutes);

app.get('/', (req,res)=> {
    res.send("Hello World updated");
});

//Time on backend video
//2:04:43


app.listen(3000, () => {
    console.log("Server ready at localhost:3000");
});

//time stamp 20:32