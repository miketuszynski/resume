Meteor.publish('experience', function() {
    return Experience.find();
});
Meteor.publish('userProfile', function() {
    return UserProfile.find();
});
Meteor.publish('skills', function() {
    return Skills.find();
});
Meteor.publish('education', function() {
    return Education.find();
});