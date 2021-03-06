import Ember from 'ember';
import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { belongsTo, hasMany } from 'ember-data/relationships';

export default Model.extend({
  // A string representation of this model, based on its attributes.
  // This is what mu-cl-resources uses to search on, and how the model will be presented while editing relationships.
  stringRep: Ember.computed.collect.apply(this,['name']),

  name: attr('string'),
  subject: belongsTo('subject', {inverse: null }),
  teachers: hasMany('person', {inverse: null }),
  students: hasMany('person', {inverse: null }),
  grades: hasMany('grade', {inverse: null })
});
