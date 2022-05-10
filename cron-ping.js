const cron = require("node-cron");

// Schedule tasks to be run on the server.
cron.schedule("* * * * *", () => {
  console.log("Running a task every minute");
});
