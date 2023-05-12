const catchError = require('../utils/catchError');
const Song = require('../models/Song');

const getAll = catchError(async(req, res) => {
    // Operaciones...
const songs = await Song.findAll();
    return res.json(songs);
});

const create = catchError(async(req, res) => {  
    const {name, artist, genre, releaseYear} = req.body;
    const song = await Song.create({name, artist, genre, releaseYear});
    return res.status(201).json(song);
});
module.exports = {
    getAll,
    create
}