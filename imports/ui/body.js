import { Mongo } from 'meteor/mongo';
import { Session } from 'meteor/session';
import { Template } from 'meteor/templating';
import { Blaze } from 'meteor/blaze';
import './body.html';
import './custom.css';

const raw_data = require('/imports/api/IPIP120.json');

Template.body.onCreated(()=>{
    Session.set('doc',{})
    //var res_coll= Mongo.Collection('survey_IPIP120')
    //Session.set('res_collection', res_coll)
})
  
Template.body.events({
});


Template.body.helpers({

//  questions: [
//    { question: 'This is task 1' },
//    { question: 'This is task 2' },
//    { question: 'This is task 3' },
    //  ],
    questions: raw_data['value'],

});

Template.full_survey.onCreated(()=>{

})

Template.full_survey.helpers({

    //  questions: [
    //    { question: 'This is task 1' },
    //    { question: 'This is task 2' },
    //    { question: 'This is task 3' },
        //  ],
        questions: raw_data['value'],
    });

Template.full_survey.events({
    'click .submit'(e,t){
        var doc = Settings.get('doc')
        res_coll= Mongo.Collection('survey_IPIP120')
        Session.set('res_collection', res_coll)
        res_coll.insertOne(doc)
    }
})

Template.survey_answer.events({
    'click'(e,t){
        // the name of the radio group for question i
        // is just {{i}}
        var control= e.target;
        var val = control.value;
        console.log(val);
        
        // set value to Session doc
        var doc = Session.get('doc')
        // document has just the answers
        // <question number>:<answer>
        // the click produced the answer
        doc[control.name] = val
        Session.set('doc',doc)
    }
})