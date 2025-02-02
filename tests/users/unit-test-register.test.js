const request = require('supertest');
require('dotenv').config();
const {
    payloadNewUserRegister
} = require('../../fixtures/users/new-users');

const payloadError = {

}

const urlRegister = process.env.URL_API_LOCAL;

describe('Realizando testes unitários no endpoint de registro de um novo usuário.', () => {

    it('Quando inserir um usuário passando todas as informações obrigatórias, e os dados não existirem na base, então deverá ser retornado 201.', async () => {
        try {
            const response = await request(urlRegister)
                .post('/register')
                .set('Accept', 'application/json')
                .send(payloadNewUserRegister);

            // validando se a resposta foi 201
            expect(response.status).toBe(201);
            console.log(payloadNewUserRegister);
        } catch (error) {
            console.error('Ocorreu um erro desconhecido ao enviar a requisição.');
            throw error;
        }
    });

    it('Quando inserir um usuário deixando de passar o body com as informações obrigatórias, então deverá ser retornado um erro 422.', async () => {
        try {
            const response = await request(urlRegister)
                .post('/register')
                .set('Accept', 'application/json')
                .send(payloadError);

            // validando se a resposta foi 400
            expect(response.status).toBe(400);
            expect(response.body.error).toBe('400 Bad Request: User name is missing');
            console.log(payloadError);
        } catch (error) {
            console.error('Ocorreu um erro desconhecido ao enviar a requisição.');
            throw error;
        }
    });
});
