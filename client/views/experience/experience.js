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

        var bulletArea = document.getElementById('editBullet');

        if (bulletArea.childNodes.length > 1)
        {
            for (var j = bulletArea.childNodes.length; j <= 1 ; j--)
            {

                bulletArea.childNodes[j].parentNode.removeChild(bulletArea);
            }
        }

        for (var i=0; i < this.employmentBullets.length; i++)
        {
            var elem = document.createElement('textarea');
            elem.setAttribute("class","editBullet top-buffer");
            elem.innerHTML = this.employmentBullets[i].bullet;
            bulletArea.appendChild(elem);

        }
            //<textarea name="editBullet" class="editBullet top-buffer"></textarea>
        document.getElementById('editForm').style.display="block";


    }
});