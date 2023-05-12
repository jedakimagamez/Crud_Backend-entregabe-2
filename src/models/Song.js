const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection'); 


const Song = sequelize.define('song', {
    name: { type: DataTypes.STRING(100),
    allowNull: false
    },
    artist: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    genre: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    releaseDate: {
        type: DataTypes.DATE,
        allowNull: false
    },
});

module.exports = Song;