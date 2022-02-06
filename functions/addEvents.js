
const {google} = require('googleapis');
const current = require('../data/current_planning');
const axios = require('axios');
const moment = require('moment');
const {verify_events} = require('./verify_event');
const {AUTO_LOGIN} = require("../config.json");

module.exports.addEvents = async function(auth) {
    console.log('[Envoi du Planning]');
    const calendar = google.calendar({version: 'v3', auth});
    var planning = [];
    await axios.get(`https://intra.epitech.eu/${AUTO_LOGIN}/planning/load?format=json&start=${moment().format('YYYY-MM-DD')}&end=${moment().add(10, 'days').format('YYYY-MM-DD')}`).then(function (res) {
        for(const data of res.data) {
            if(data["event_registered"] == "registered" && verify_events(data) == false) {
                planning.push({
                    start: data.start,
                    end: data.end,
                    title: data.type_title + ': ' + data.acti_title,
                    room: data.room.code
                });
            }
        }
    });
    for(const data of planning) {
        var event = {
            'summary': data.title,
            'location' : data.room,
            'start': {
                'dateTime': moment(data.start).format(),
                'timeZone': 'Europe/Paris',
            },
            'end': {
                'dateTime': moment(data.end).format(),
                'timeZone': 'Europe/Paris',
            },
            'reminders' : {
                'useDefault' : true
            }
        }
        calendar.events.insert({
            auth: auth,
            calendarId: 'primary',
            resource: event,
        }, function(err, event) {
            if(err) {
                console.log(err);
                return;
            }
        });
    }
}
