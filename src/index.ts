import express from 'express';
import userRoutes from './routes/userRoutes';
import tweetRoutes from './routes/tweetRoutes';
import authRoutes from './routes/authRoutes';
import { authenticateToken } from './middlewares/authMiddlewares';


const app = express();
app.use(express.json());
app.use('/user', authenticateToken, userRoutes);
app.use('/tweet', authenticateToken, tweetRoutes);
app.use('/auth', authRoutes);

app.get('/', (req,res)=> {
    res.send("Hello World updated");
});

//Time on backend video
//2:19:00


app.listen(3000, () => {
    console.log("Server ready at localhost:3000");
});

//time stamp 20:32