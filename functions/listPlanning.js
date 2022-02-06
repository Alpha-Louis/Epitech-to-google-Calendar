const {CURRENT_PLANNING} = require('../config.json');
const fs = require("fs");
const moment = require('moment');

module.exports.listPlanning = function() {
    console.log("==== PLANNING SAUVEGARDÉ ====");
    let rawdata = fs.readFileSync(CURRENT_PLANNING);
    current = JSON.parse(rawdata);
    for(const data of current) {
        console.log(`${data.summary} | ${moment(data.start.dateTime).format('MMMM Do YYYY, h:mm:ss a')}`);
        console.log(`----`);
    }
};