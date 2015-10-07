/**
 * Created by Jack on 10/6/2015.
 */
Meteor.publish('messages', function () {
  return Messages.find();
});

Meteor.publish("allUsernames", function () {
  return Meteor.users.find({}, {fields: {
    "username": 1,
    "services.github.username": 1
  }});
});