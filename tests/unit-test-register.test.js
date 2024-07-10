const request = require('supertest');
const { faker } = require('@faker-js/faker');
const urlRegister = "http://localhost:8080";

describe('Realizando testes unitários no endpoint de registro de um novo usuário.', () => {
    const payloadNewUserRegister = {
        email: faker.internet.exampleEmail(),
        first_name: faker.person.fullName(),
        last_name: faker.person.lastName(),
        password: faker.internet.password(),
        username: faker.internet.userName()
    };

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
});
