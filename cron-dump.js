const cron = require("node-cron");
const shell = require("shelljs");

// Backup database at 11:59 PM every day.
cron.schedule("* * * * * *", () => {
  console.log("-------------------------------------------");
  console.log("Running Cron Job");
  if (shell.exec("sqlite3 database.sqlite .dump > data_dump.sql").code !== 0)
    shell.exit(1);
  else shell.echo("Database backup complete");
});
