import { faker } from '@faker-js/faker';

export const randomData = {

        firstname: faker.name.firstName(),
        lastname: faker.name.lastName(),
        email: faker.internet.email(),
        password: faker.internet.password(12, true, /\w/, '2!Q'),
};

export const getData = (data) => {
        switch (data) {
                case "randomName":
                        data=randomData.firstname;
                        break;
                case "randomEmail":
                        data=randomData.email
                        break;
                case "randomPassword":
                        data=randomData.password
                        break;
                default:
                        break;
        }
        return data;
}