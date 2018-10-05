const CronJob = require('cron').CronJob; // cron is a huge package, only going to be used for CronJob

const mainWorker = new CronJob('* * * * * *', () => function() {
    console.log('you will see this message each second in the console');
}, 
    null, // replace of the onComplete function, 
    false, 
    'America/New_York' // time it's tracking is America-New York
);

module.exports = mainWorker;

