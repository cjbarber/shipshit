Template.nextDay.helpers({
  projectsToAugment: function() {
    return Projects.find({currently_blocked: false}, {});
  }
});