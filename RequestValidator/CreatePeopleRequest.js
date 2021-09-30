
class CreatePeopleRequest
{
    validate(data){
        const nameValidate = data.name.length > 3;
        const email = /^\S+@\S+\.\S+$/;
        const emailValidator = email.test(data.email);
        
        const requestValidate = [
            {
                name: 'name',
                validate: nameValidate,
                message: 'O campo nome deve ter mais que 3 letras'
            },

            {
                email: 'email',
                validate: emailValidator,
                message: 'Campo email inválido, verifique e tente novamente'
            }
        ]

        return requestValidate;
    }
}

module.exports = new CreatePeopleRequest();