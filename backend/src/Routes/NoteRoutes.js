import express from 'express';
import { getNotes, createNotes, updateNotes, deleteNotes,findNote } from '../Controller/NoteController.js';
const route=express.Router();

route.get('/',getNotes);
route.get('/find/:id',findNote);
route.post('/create',createNotes);
route.put('/update/:id',updateNotes);
route.delete('/delete/:id',deleteNotes);
export default route;