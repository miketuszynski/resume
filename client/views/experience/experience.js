Template.experience.helpers({
    experiences: function() {
        return Experience.find();
    }
});

Template.experienceEdit.helpers({
    experiences: function() {
        return Experience.find();
    }
});

Template.experienceEdit.events({
    "click li": function(e) {
        e.preventDefault();

        $('[name=companyName]').val(this.companyName);
        $('[name=employmentDateRange]').val(this.employmentDateRange);
        $('[name=jobTitle]').val(this.title);
        $('[name=editBullet]').style.visibility='hidden';

        var bulletArea = $('[name=editBullet]');

        for (var i=0; i < this.employmentBullets.length; i++)
        {
            var elem = document.createElement('textarea');
            elem.setAttribute("class","editBullet top-buffer");
            elem.setAttribute("name", this._id)
            elem.innerHTML = this.employmentBullets[i].bullet;
            bulletArea.appendChild(elem);

        }
            //<textarea name="editBullet" class="editBullet top-buffer"></textarea>
        $('[name=editBullet]').style.visibility='visible';


    }
});