const Sequelize = require('sequelize');

const sequelize = require('../connection');

const Translation = sequelize.define('translation', {
    translationId: {
        type: Sequelize.INTEGER,
        primaryKey:true,
        allowNull: false,
        autoIncrement: true
    },
    toLang: {
        type: Sequelize.STRING,
        allowNull: false
    },
    fromLang: {
        type: Sequelize.STRING,
        allowNull: false
    },
    textContent: {
        type: Sequelize.STRING,
        allowNull: false
    },
    translatedText: {
        type: Sequelize.STRING,
        allowNull: false

    },
    createdAt: {
        typ: Sequelize.DATE,
        allowNull: false,
        defaultValue: new Date()
    },
    updatedAt: {
        type: Sequelize.DATEONLY,
        allowNull: false,
        defaultValue: new Date()

    }
    

});

module.exports = Translation;