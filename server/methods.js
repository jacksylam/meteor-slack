/**
 * Created by Jack on 10/6/2015.
 */
Meteor.methods({
  newMessage: function (message) {
    message.timestamp = Date.now();
    message.user = Meteor.userId();
    Messages.insert(message);
  }
})