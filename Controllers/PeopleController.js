const PeopleRepository = require("../Repositories/PeopleRepository");

class PeopleController
{
    create(data, res){       
       PeopleRepository.create(data, res);        
    }

    show(id, res){
       PeopleRepository.show(id, res);
    }

    update(data, res){ 
        PeopleRepository.update(data,res);
    }

    delete(id, res){
        PeopleRepository.delete(id, res);
    }
}

module.exports = new PeopleController();