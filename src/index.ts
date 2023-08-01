import express from 'express'
import userRoutes from './routes/userRoutes'
import trendRoutes from './routes/trendRoutes'
import authRoutes from './routes/authRoutes'
import { authenticateToken } from './middlewares/authMiddleware'
const app = express();
app.use(express.json());
app.use('/user',authenticateToken,userRoutes);
app.use('/trend',authenticateToken,trendRoutes);
app.use('/auth',authRoutes);

app.get('/',(req,res)=>{
    res.send('Hello Usama')
})



app.listen(3000,()=>{
    console.log("server ready")
})