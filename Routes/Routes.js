const PeopleController = require("../Controllers/PeopleController");
const PeopleRepository = require("../Repositories/PeopleRepository");

module.exports = route => {
    
  route.post('/client', (req, res) => {PeopleController.create(req.body, res)})
  route.get('/client/:id', (req, res) => { PeopleRepository.show(req.params.id, res)})
  route.patch('/client', (req, res) => {PeopleController.update(req.body, res)})
  route.delete('/client/:id', (req, res) => {PeopleController.delete(req.params.id, res)})
}