import Note from '../models/note.js'
export const getNotes= async (req, res) =>{
  try{
    const notes= await Note.find()
    res.status(200).send(notes);
  }
  catch(error){
    res.status(500).send(error.message);
  }
  
 };
export const createNotes= async (req, res) =>{
  const {title, content} = req.body;
  try {
    if(!title || !content) {
      return res.status(400).send('Title and content are required');
    }
    const newNote = new Note({title, content});
    await newNote.save();
    res.status(201).send(newNote);
  } catch (error) {
    res.status(500).send(error.message);
  }
 };
export const updateNotes=(req, res) =>{
  res.status(200).send('updated');
 };
export const deleteNotes=async (req, res) =>{
  
  res.status(200).send('deleted');
 };