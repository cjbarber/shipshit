shipshit
========

ShipShit

You'll probably want to add a fixtures.js in /server.

Something like:

if (Shippers.find().count() === 0) {
  var now = new Date();

  var chrisId = Shippers.insert({
    name: 'Chris'
  });

  var admissionsAppId = Projects.insert({
    name: 'Project Name',
    userId: chrisId,
    shipped: false,
    last_progress_day: now,
    current_blocker: 'My Next Action',
    currently_blocked: true,
    completed_blockers: []
  });
};
