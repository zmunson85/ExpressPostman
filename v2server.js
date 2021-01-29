//This is a link to faker documentation https://github.com/marak/Faker.js/
const express = require('express'); 
const cors = require ('cors');
//npm install cors>>https://expressjs.com/en/resources/middleware/cors.html
const app = express();
//npm install express
const faker = require('faker')
//npm install faker
const port = 5000;
// to test this i will switch the port to 3000/5000 too
//THANK YOU SHAWN--TA> IN ORDER TO SEE ANYTHING YOU NEED TO GO TO the LOCAL HOST 8000...
//this is the port set to listen for api events ref this later>>https://nodejs.org/en/docs/guides/getting-started-guide/
app.use(cors());       //this is telling the app to use a local host port for cross origin reference
app.use(express.json()); //express will take in the api data and provide a response with the appropriate output, such as user or company

class User{              //this is my fake api data for new user
    constructor() {
        this.user_id = faker.random.number();
        this.firstName = faker.name.firstName();
        this.lastName = faker.name.lastName();
        this.phoneNumber = faker.phone.phoneNumber();
        this.email = faker.internet.email();
        this.password = faker.internet.password();
    }
}

class Company {         //this is my Fake Api data for a new company
    constructor() {
        this.comapny_id = faker.random.number();
        this.name = faker.company.companyName();
        this.address ={                 
            street : faker.address.streetAddress(),
            city : faker.address.city(),
            state : faker.address.state(),
            zipCode : faker.address.zipCode(),
            country : faker.address.country()
        }
        this.full_address = `${this.address.street} ${this.address.city}, ${this.address.state}, ${this.address.zipCode}`
    }
}
app.get('/api/users/new', (req, res) => {  //instance for fake new users
    const fake_user = new User();
    res.json({ msg: fake_user })
});
app.get('/api/companies/new', (req, res) => {
    const create_company = new Company();
    res.json({ msg: create_company });
});

app.get('/api/user/company', (req, res) => {   //instance for fake new company
    const fake_user = new User(), create_company = new Company();
    res.json({ user: fake_user, company: create_company })
});

//this is going get a response to console.log the result
app.listen(port, () => {
    console.log(`Go To Local Host In browser: localhost> ${port}`)
})


