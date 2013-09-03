Template.daily.helpers({
  projects: function() {
    return Projects.find({shipped: false}, {});
  }
});