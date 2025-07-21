import express from 'express';
import NoteRoutes from './Routes/NoteRoutes.js';
import dotenv from 'dotenv';
import {connectdb} from './config/db.js';

dotenv.config();
const app = express();

app.use(express.json());
app.use('/api/notes', NoteRoutes);
connectdb();
const port=process.env.port || 5000;
app.listen(port, '0.0.0.0', () => {
   console.log(' Server is running on ',port);
});

