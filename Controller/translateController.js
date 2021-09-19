const translate = require('translate-google');

const Translation = require('../Models/translateModel');
const sequelize = require('../connection');








exports.gettranslateData = (req,res) => {
    const {from,to,text} = req.body;

    translate('I speak Hindi', {from:'en', to: 'hi'}).then(res => {
        console.log(res);
    }).catch(error => {
        console.log(error)
    })

    sequelize.query('CALL getTranslatedResponse(:fromLang, :toLang,:textContent)',
        {replacements: {fromLang: from, toLang: to, textContent: text} })
        .then(data => {
            console.log(data);
            if(data && data.length > 0) {
                res.status(200).json({message: "Translation Response Fetched Successfully From DB",translatedText: data[0].translatedText})
            }
            else {
                translate(text,{from: from,to:to}).then(response => {
                    sequelize.query('CALL addTranslatedResponse(:fromLang, :toLang, :textContent, :translatedText)',
                    {replacements: {fromLang: from, toLang: to, textContent:text, translatedText: response} })
                    .then(data => {
                        res.status(200).json({message:"Translated Response Fetched Successfully From 3rd Party Service",translatedText: response })
                    })

                }).catch(error => {
                    console.log(error);

                })
            }
        })
        .catch(error => {
            res.status(500).json({message: error.message || "Some error occurred...."});
        });


}