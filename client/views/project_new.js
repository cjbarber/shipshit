Template.projectNew.events({
  'submit form': function(e) {
    e.preventDefault();

    var projectName = $(e.target).find('[name=projectName]').val();
    var nextBlocker = $(e.target).find('[name=nextBlocker]').val();

    var now = new Date();

    Projects.insert({
      name: projectName,
      userId: Shippers.findOne({name: 'Chris'})._id,
      shipped: false,
      last_progress_day: now,
      current_blocker: nextBlocker,
      currently_blocked: true,
      completed_blockers: []
    });
  }
});