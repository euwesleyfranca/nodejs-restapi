const CreatePeopleRequest = require('../RequestValidator/CreatePeopleRequest');
const connection = require('../Infra/Conection');
const moment = require('moment');

class PeopleRepository {

    create(data, res) {

        const created_at = moment().format("YYYY-MM-DD HH:mm:ss");
        const fullData = { ...data, created_at }

        const requestValidate = CreatePeopleRequest.validate(data);
        const errors = requestValidate.filter(input => !input.validate)
        const errorsVerify = errors.length;

        if (errorsVerify) {
            res.status(400).json(errors)
        } else {
            const sql = 'insert into clients SET ?';
            connection.query(sql, fullData, (error, success) => {
                if (error) {
                    res.status(400).json(error)
                } else {
                    res.status(200).json({...fullData})
                }
            })
        }
    }

    show(id, res) {
        const dataId = parseInt(id);
        const sql = `select * from clients where id = ${dataId}`;

        connection.query(sql, (error, success) => {
            const client = success[0]
            if (error) {
                res.status(400).json(error)
            } else {
                res.status(200).json(client)
            }
        })
    }

    update(data, res) {
        const dataId = parseInt(data.id);
        const sql = `update clients set ? where id = ?`;

        connection.query(sql, [data, dataId], (error, success) => {
          
            if (error) {
                res.status(400).json(error)
            } else {
                res.status(200).json({...data, dataId})
            }
        })
    }

    delete(id, res) {
        const dataId = parseInt(id);
        const sql = `delete from clients where id = ${dataId}`;

        connection.query(sql, (error, success) => {
            if (error) {
                res.status(400).json(error)
            } else {
                res.status(200).json('Conta finalizada com sucesso!')
            }
        })
    }
}

module.exports = new PeopleRepository();


