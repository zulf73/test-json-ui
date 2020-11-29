import { Template } from 'meteor/templating';
import './body.html';
const raw_data = require('/imports/api/IPIP120.json');

Template.body.helpers({

//  questions: [
//    { question: 'This is task 1' },
//    { question: 'This is task 2' },
//    { question: 'This is task 3' },
    //  ],
    questions: raw_data['value'],

});

Template.body.events({
});

