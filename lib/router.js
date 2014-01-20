Router.configure({
    layoutTemplate: 'layout',
    loadingTemplate: 'loading',
    waitOn: function() { return [
        Meteor.subscribe('experience'),
        Meteor.subscribe('userProfile'),
        Meteor.subscribe('skills'),
        Meteor.subscribe('education')
    ]; }
});

Router.map(function() {
    this.route('main', {
        path: '/',
        template: 'main'
    });
    //for testing the loading spinner - spinner configured in main.js
    this.route('spin', {
        path: '/spin',
        template: 'loading'
    });
    this.route('edit', {
        path: '/edit',
        template: 'edit'
    });
});