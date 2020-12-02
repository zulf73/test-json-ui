import { Mongo } from 'meteor/mongo';
import { Session } from 'meteor/session';
import { Template } from 'meteor/templating';
import './body.html';
const raw_data = require('/imports/api/IPIP120.json');

Template.body.onCreated(()=>{
    Session.set('doc',{})
    //var res_coll= Mongo.Collection('survey_IPIP120')
    //Session.set('res_collection', res_coll)
})
  
Template.body.events({
    'click'(e,t){
        var val = $(e.target).data('value');
        var src = $(e.target).data('src');
        var doc = Session.get('doc');
        doc[src] = val;
          Session.set('doc', doc)
    },
//    'submit'(e,t){
//      Session.get('res_collection').insert( Session.get('doc'))  
//    },
});

Template.body.events({
    'submit .new-task'(event) {
      // Prevent default browser form submit
      event.preventDefault();
  
      // Get value from form element
      const target = event.target;
      const text = target.text.value;
  
      // Insert a task into the collection
      Tasks.insert({
        text,
        createdAt: new Date(), // current time
      });
  
      // Clear form
      target.text.value = '';
    },
  });

Template.body.helpers({
    question(doc,idx){
      console.log( doc.question +  " " + idx)
    }
})
  

Template.body.helpers({

//  questions: [
//    { question: 'This is task 1' },
//    { question: 'This is task 2' },
//    { question: 'This is task 3' },
    //  ],
    questions: raw_data['value'],

});

