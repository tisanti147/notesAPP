const express = require('express');
const router = express.Router();
const note = require('../models/note');

router.get('/getNotes', async (req, res) => {
    try{
        const notes =  await note.find();
        res.json(notes);
    }
    catch (err){
        res.status(500).json({message: err.message})
    }
})

router.post('/postNote', async (req, res) => {
    const n = new note({
        title: req.body.title,
        content: req.body.content,
        category: req.body.category,
        archived: req.body.archived
    })
    try{
        const newNote = await n.save();
        res.status(201).json(newNote);
    }catch (err){
        res.status(400).json({message: err.message})
    }
})

router.get('/getNote/:id', getNoteById, (req, res) => {
    res.send(res.n);
})

router.patch('/putNote/:id', getNoteById, async (req, res) => {
    if(req.body.title != null){
        res.n.title = req.body.title
    }
    if(req.body.content != null){
        res.n.content = req.body.content
    }
    if(req.body.category != null){
        res.n.category = req.body.category
    }
    if(req.body.archived != null){
        res.n.archived = req.body.archived
    }
    try{
        const updatedNote = await res.n.save();
        res.json(updatedNote)
    }catch (err){
        res.status(400).json({message: err.message})
    }
})

router.delete('/deleteNote/:id', getNoteById, async (req, res) => {
    try{
        await note.findByIdAndDelete(req.params.id)
        res.json({message: 'Note deleted'})
    }catch (err){
        res.status(500).json({message: err.message})
    }
})

async function getNoteById(req, res, next){
    let n
    try{
        n = await note.findById(req.params.id)
        if(n == null){
            return res.status(404).json({message: 'Note not found'})
        }
    }catch(err){
        return res.status(500).json({message: err.message})
    }
    res.n = n
    next()
}

module.exports = router

