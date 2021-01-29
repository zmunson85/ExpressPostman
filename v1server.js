
const express = require('express');

const app = express();


app.use(express.json())

class User {
    constructor() {
        this.user_id = faker.random.number();
        this.firstName = faker.user.firstName();
        this.lastName = faker.user.lastName();
        this.phoneNumber = faker.user.phoneNumber();
        this.email = faker.user.email();
        this.password = faker.user.password();
    }
}

class Company {
    constructor() {
        this.company_id = faker.random.number();
        this.companyName = faker.company.companyName();
        this.street = faker.company.streetName();
        this.address = {
            street : faker.address.streetAddress(),
            city : faker.address.city(),
            state : faker.company.state(),
            zipCode : faker.company.zipCode(),
            country : faker.company.country()
        }
        this.full_address = `${this.address.street} ${this.address.city}, ${this.address.state}, ${this.address.zipCode}`
    }
}

app.get('/', (req, res) => {
    const fake_user = new User();
    res.json({ message: fake_user })
});

app.post('/api/users', (req, res) => {
    console.log('REQUEST', req.body);
    res.json({ message: 'RESPONSE' })
})

app.get('/api/users/new', (req, res) => {
    console.log('REQUEST', req.body);
    res.json({ message: 'RECIEVED!' })
})

app.post('/api/companies', (req, res) => {
    console.log('REQUEST', req.body);
    res.json({ message: 'RESPONSE' })
})

app.get('/api/companies/new', (req, res) => {
    console.log('REQUEST', req.body);
    res.json({ message: 'RECIEVED' })
})
app.listen(8000, () => console.log('GO TO LOCALHOST:8000'));