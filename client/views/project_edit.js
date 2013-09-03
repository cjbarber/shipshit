Template.projectEdit.events({
  'submit form': function(e) {
    e.preventDefault();

    var nextBlocker = $(e.target).find('[name=nextBlocker]').val();

    Projects.update(this._id, {$set: {
      current_blocker: nextBlocker,
      currently_blocked: true
    }}, function(error) {
      if (error) {
        alert(error.reason);
      }
    });
  }
});