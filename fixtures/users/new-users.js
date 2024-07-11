const { faker } = require('@faker-js/faker');

const payloadNewUserRegister = {
    email: faker.internet.exampleEmail(),
    first_name: faker.person.fullName(),
    last_name: faker.person.lastName(),
    password: faker.internet.password(),
    username: faker.internet.userName()
};

module.exports={
    payloadNewUserRegister
}