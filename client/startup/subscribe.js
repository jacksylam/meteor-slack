/**
 * Created by Jack on 10/6/2015.
 */
Meteor.subscribe('channels');
Meteor.subscribe('allUsernames');

Template.messages.onCreated(function() {
  var self = this;
  self.autorun(function() {
    self.subscribe('messages', Session.get('channel'));
  });
});

Meteor.startup(function() {
  Session.set('channel', 'general');
});