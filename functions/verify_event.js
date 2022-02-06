const current = require('../data/current_planning');
const moment = require('moment');

module.exports.verify_events = function(data) {
    for (const event of current) {
        if (event.summary == data.type_title + ': ' + data.acti_title && moment(data.start).format() == event.start.dateTime) {
            console.log(`${data.acti_title} ===> Déjà enregistré <===`);
            return (true);
        }
    }
    console.log('Enregistré');
    return (false);
}