import express from 'express'
import userRoutes from './routes/userRoutes'
import trendRoutes from './routes/trendRoutes'
const app = express();
app.use(express.json());
app.use('/user',userRoutes);
app.use('/trend',trendRoutes);
app.get('/',(req,res)=>{
    res.send('Hello Usama')
})



app.listen(3000,()=>{
    console.log("server ready")
})