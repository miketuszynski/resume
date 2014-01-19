Template.skills.helpers({
    skills: function() {
        return Skills.find();
    },
    progressIndicator: function() {
        var skillLevel = this.proficiency, returnVal = '';
        if (skillLevel > 50) {
            returnVal = "progress-bar-success"
        } else {
            returnVal = "progress-bar-info"
        }
        return returnVal;
    }
});