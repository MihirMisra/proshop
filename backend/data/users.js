import bcrypt from 'bcryptjs'

const users = [
  {
    name: 'Admin User',
    email: 'admin@example.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'Mihir Misra',
    email: 'mihir@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Madhu Dobhal',
    email: 'madhu@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Adarsh Talniya',
    email: 'adarsh@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
]

export default users
