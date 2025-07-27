import Note from '../models/note.js'
export const getNotes= async (req, res) =>{
  try{
    const notes= await Note.find().sort({createdAt:-1});
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
export const findNote=async (req,res) =>{
  try{
    const id=req.params.id;
    const note= await Note.findById(id);
    if(!note){
      res.status(404).json({"message":"Note not fount"});
    }
    else{
      res.status(200).json({"message":note});
    }
  }
  catch(error){
    res.send(error);
  }
}
export const updateNotes=async (req, res) =>{
   try
   {
    const {title,content}=req.body;
    const id=req.params.id;
    const updateNote=await Note.findByIdAndUpdate(id,{title,content},{new:true,});
    if (!updateNote) {
      return res.status(404).json({ message: "Note not found" });
    }
    res.send(updateNote);
  }
  catch(error){
    res.send(error);
  }
 };

export const deleteNotes=async (req, res) =>{
  try{const id=req.params.id;
  const deleted= await Note.findByIdAndDelete(id);
  if(!deleted){
    res.status(404).json({"message":"Note not found"});
  }
  
  res.status(200).json({"message":"Note deleted successfully"});
}
  catch(error){
    res.send(error);
  }
 };