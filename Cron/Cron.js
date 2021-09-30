const CronJob = require('cron').CronJob;

class Cron{
    
    job(){         
        const job = new CronJob('* * * * * *', function() {
            console.log('Cron com Nodejs');
          }, null, true, 'America/Los_Angeles');
          job.start();           
    }
}
module.exports = new Cron();