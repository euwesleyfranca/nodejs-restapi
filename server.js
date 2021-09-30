const customsExpress = require('./Configs/CustomExpress');
const connection = require('./Infra/Conection');
const Cron = require('./Cron/Cron');

connection.connect(err => {
    if (err) {
        console.log(err);
    }else{

    const app = customsExpress();

    app.listen(3000, () => {
        console.log('Express start in port:3000');
    })

    console.log('Connection with database effected with success!');

    //Cron.job();

    }
    
})


