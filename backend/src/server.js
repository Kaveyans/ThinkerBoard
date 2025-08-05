import express from 'express';
import NoteRoutes from './Routes/NoteRoutes.js';
import dotenv from 'dotenv';
import {connectdb} from './config/db.js';
import { rateLimitMiddleware } from './middlewares/ratelimit.js';
import cors from 'cors';

dotenv.config();
const app = express();
app.use(cors());
app.use(rateLimitMiddleware);
app.use(express.json());
app.use('/api/notes', NoteRoutes);

const port=process.env.port || 5000;
connectdb().then(()=>{app.listen(port, '0.0.0.0', () => {
   console.log(' Server is running on ',port);
});
});

