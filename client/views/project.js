Template.project.helpers({
  days: function() {
    var minutes = 1000*60;
    var hours = minutes*60;
    var days = hours*24;
    var now = new Date();

    var diff = now- this.last_progress_day;
    var day_diff = diff / days;
    var rounded_diff = Math.round(day_diff);
    return rounded_diff;
  }
});

Template.project.events({
  'click .unblocked': function(e) {
    e.preventDefault();

    Projects.update(this._id, {$addToSet: {
      completed_blockers: {
        name: this.current_blocker,
        time: new Date().getTime()
      }
    }, $set: {
      current_blocker: '',
      currently_blocked: false,
      last_progress_day: new Date()
    }}, function(error) {
      if (error) {
        alert(error.reason);
      }
    });
  },

  'click .shipped': function(e) {
    e.preventDefault();

    Projects.update(this._id, {$set: {
      current_blocker: '',
      currently_blocked: false,
      shipped: true,
      last_progress_day: new Date()
    }}, function(error) {
      if (error) {
        alert(error.reason);
      }
    });
  }
})