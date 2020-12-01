import { Template } from 'meteor/templating';
import './body.html';
const raw_data = require('/imports/api/IPIP120.json');



import 'meteor/jkuester:blaze-bs4'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.css' // this is the default BS theme as example
import popper from 'popper.js'
global.Popper = popper // fixes some issues with Popper and Meteor


import { BlazeBs4 } from 'meteor/jkuester:blaze-bs4'

BlazeBs4.button.load()
  .then(loaded => console.log('button template loaded'));

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

