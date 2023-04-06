const Note = require("../modals/noteModels");
const getNotes = async(req,res)=>{
    try{

        const notes = await Note.find({user : req.user._id });
        res.json(notes)
    }
    catch(err){
       
    }
}
const   createNote = async(req,res)=>{
    const {title ,content , category } = req.body;
    
    
    if( !title || !content || !category  ) {
        res.status(400);
        throw new Error("Pls fill all the Field.");
        return;
    }
    
    
    try{
       
        
        const note = new Note({user : req.user._id , title , content , category });
        const createNote = await note.save();
        res.status(201).json(createNote);
    }
    catch(err){
       
    }
    
    
    
    
    
}
const getNoteById = async(req,res)=>{
    
    try{
        
    
        const note = await Note.findById(req.params.id);
        if(note){
         
            res.json(note);
        }
    }
    catch(err){
  
    }
}
const updatNote =  async(req , res )=>{
const {title , content , category} = req.body;
try{
    const note = await  Note.findById(req.params.id);


    if(note.user.toString() !== req.user._id.toString())
    {
        res.status(401);
        throw new Error("you cant perform this action");
    }else{
        if( note){
            note.title = title;
            note.content = content;
            note.category = category;
            try{

                const updateNote = await note.save();
                res.json(updateNote);
            }
            catch(err){
               
            }
            
        }
        else{
            res.status(404);
            throw new Error("note not found");
        }
    }
}
catch(err)
{

} 


};


const deleteNote = async(req , res)=>{
    try{
        console.log("|||==>|||", req.params.id);
        // console.log( "||||==>||||",req.body);
        const note = await Note.findById(req.params.id);
       
        if(note.user.toString() !== req.user.id.toString()){
            res.status(401);
            throw new Error("you cant perform this action");
            // return;
        }
        else{
            
            if(note){
                try{
    
                    let t = await note.remove();
                    res.json({message : "Note Removed"});
                }
                catch(err){
                    console.log(err);
                }
            }
        
        else{
            res.status(404);
            throw new error("Note not found");
        }
    }
    }
    catch(err){
     
    }
}
module.exports = { createNote , getNotes ,getNoteById , updatNote , deleteNote};