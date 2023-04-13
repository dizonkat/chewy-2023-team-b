const {Client} = require('@elastic/elasticsearch')
const client = new Client({
  cloud: {
    id: 'ChewyHackathon:dXMtY2VudHJhbDEuZ2NwLmNsb3VkLmVzLmlvJDZmNzM4MWM4ZDI3ZjQ1N2RhYjgxMjIxYzFkMDBhYzU4JGU5NGVmNTUxYzY2NzQzZjg5MWMwYjRhMThhYjQ5NDM0',
  },
  auth: {
    username: 'dizon.ka@northeastern.edu',
    password: '@fDjYQ2wB9kW4Xg'
  }
})