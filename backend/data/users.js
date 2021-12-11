import bcrypt from 'bcryptjs'

const users = [
  {
    name: 'Admin User',
    email: 'admin@example.com',
    password: bcrypt.hashSync('1234',10),
    image: 'https://hope-product-profile-images.s3.ap-southeast-1.amazonaws.com/userprofileplaceholder.jpg',
    isAdmin: true
  },
  {
    name: 'Second User',
    email: 'second@example.com',
    password: bcrypt.hashSync('1234',10),
    image: 'https://hope-product-profile-images.s3.ap-southeast-1.amazonaws.com/userprofileplaceholder.jpg',
  },
  {
    name: 'thrid User',
    email: 'third@example.com',
    password: bcrypt.hashSync('1234',10),
    image: 'https://hope-product-profile-images.s3.ap-southeast-1.amazonaws.com/userprofileplaceholder.jpg',
  },
  {
    name: 'Test',
    email: 'test@example.com',
    password: bcrypt.hashSync('1234',10),
    image: 'https://hope-product-profile-images.s3.ap-southeast-1.amazonaws.com/userprofileplaceholder.jpg',
  },
  {
    name: 'Test User1',
    email: 'test1@example.com',
    password: bcrypt.hashSync('1234',10),
    image: 'https://hope-product-profile-images.s3.ap-southeast-1.amazonaws.com/userprofileplaceholder.jpg',
  }
,
  {
    name: 'Test User2',
    email: 'test2@example.com',
    password: bcrypt.hashSync('1234',10),
    image: 'https://hope-product-profile-images.s3.ap-southeast-1.amazonaws.com/userprofileplaceholder.jpg',
  }
,
  {
    name: 'Test User3',
    email: 'test3@example.com',
    password: bcrypt.hashSync('1234',10),
    image: 'https://hope-product-profile-images.s3.ap-southeast-1.amazonaws.com/userprofileplaceholder.jpg',
  }
,
  {
    name: 'Test User4',
    email: 'test4@example.com',
    password: bcrypt.hashSync('1234',10),
    image: 'https://hope-product-profile-images.s3.ap-southeast-1.amazonaws.com/userprofileplaceholder.jpg',
  }
,
  {
    name: 'Test User5',
    email: 'test5@example.com',
    password: bcrypt.hashSync('1234',10),
    image: 'https://hope-product-profile-images.s3.ap-southeast-1.amazonaws.com/userprofileplaceholder.jpg',
  }
,
  {
    name: 'Test User6',
    email: 'test6@example.com',
    password: bcrypt.hashSync('1234',10),
    image: 'https://hope-product-profile-images.s3.ap-southeast-1.amazonaws.com/userprofileplaceholder.jpg',
  }
,
  {
    name: 'Test User7',
    email: 'test7@example.com',
    password: bcrypt.hashSync('1234',10),
    image: 'https://hope-product-profile-images.s3.ap-southeast-1.amazonaws.com/userprofileplaceholder.jpg',
  }
,
  {
    name: 'Test User8',
    email: 'test8@example.com',
    password: bcrypt.hashSync('1234',10),
    image: 'https://hope-product-profile-images.s3.ap-southeast-1.amazonaws.com/userprofileplaceholder.jpg',
  }
,
  {
    name: 'Test User9',
    email: 'test9@example.com',
    password: bcrypt.hashSync('1234',10),
    image: 'https://hope-product-profile-images.s3.ap-southeast-1.amazonaws.com/userprofileplaceholder.jpg',
  }
,
  {
    name: 'Test User10',
    email: 'test10@example.com',
    password: bcrypt.hashSync('1234',10),
    image: 'https://hope-product-profile-images.s3.ap-southeast-1.amazonaws.com/userprofileplaceholder.jpg',
  }
,
  {
    name: 'Test User11',
    email: 'test11@example.com',
    password: bcrypt.hashSync('1234',10),
    image: 'https://hope-product-profile-images.s3.ap-southeast-1.amazonaws.com/userprofileplaceholder.jpg',
  }
,
  {
    name: 'Test User12',
    email: 'test12@example.com',
    password: bcrypt.hashSync('1234',10),
    image: 'https://hope-product-profile-images.s3.ap-southeast-1.amazonaws.com/userprofileplaceholder.jpg',
  }
,
  {
    name: 'Test User13',
    email: 'test13@example.com',
    password: bcrypt.hashSync('1234',10),
    image: 'https://hope-product-profile-images.s3.ap-southeast-1.amazonaws.com/userprofileplaceholder.jpg',
  }
,
  {
    name: 'Test User14',
    email: 'test14@example.com',
    password: bcrypt.hashSync('1234',10),
    image: 'https://hope-product-profile-images.s3.ap-southeast-1.amazonaws.com/userprofileplaceholder.jpg',
  }
,
  {
    name: 'Test User15',
    email: 'test15@example.com',
    password: bcrypt.hashSync('1234',10),
    image: 'https://hope-product-profile-images.s3.ap-southeast-1.amazonaws.com/userprofileplaceholder.jpg',
  }
,
  {
    name: 'Test User16',
    email: 'test16@example.com',
    password: bcrypt.hashSync('1234',10),
    image: 'https://hope-product-profile-images.s3.ap-southeast-1.amazonaws.com/userprofileplaceholder.jpg',
  }
,
  {
    name: 'Test User17',
    email: 'test17@example.com',
    password: bcrypt.hashSync('1234',10),
    image: 'https://hope-product-profile-images.s3.ap-southeast-1.amazonaws.com/userprofileplaceholder.jpg',
  }
,
  {
    name: 'Test User18',
    email: 'test18@example.com',
    password: bcrypt.hashSync('1234',10),
    image: 'https://hope-product-profile-images.s3.ap-southeast-1.amazonaws.com/userprofileplaceholder.jpg',
  }
,
  {
    name: 'Test User19',
    email: 'test19@example.com',
    password: bcrypt.hashSync('1234',10),
    image: 'https://hope-product-profile-images.s3.ap-southeast-1.amazonaws.com/userprofileplaceholder.jpg',
  }
,
  {
    name: 'Test User20',
    email: 'test20@example.com',
    password: bcrypt.hashSync('1234',10),
    image: 'https://hope-product-profile-images.s3.ap-southeast-1.amazonaws.com/userprofileplaceholder.jpg',
  }
,
  {
    name: 'Test User21',
    email: 'test21@example.com',
    password: bcrypt.hashSync('1234',10),
    image: 'https://hope-product-profile-images.s3.ap-southeast-1.amazonaws.com/userprofileplaceholder.jpg',
  }
,
  {
    name: 'Test User22',
    email: 'test22@example.com',
    password: bcrypt.hashSync('1234',10),
    image: 'https://hope-product-profile-images.s3.ap-southeast-1.amazonaws.com/userprofileplaceholder.jpg',
  }
,
  {
    name: 'Test User23',
    email: 'test23@example.com',
    password: bcrypt.hashSync('1234',10),
    image: 'https://hope-product-profile-images.s3.ap-southeast-1.amazonaws.com/userprofileplaceholder.jpg',
  }
,
  {
    name: 'Test User24',
    email: 'test24@example.com',
    password: bcrypt.hashSync('1234',10),
    image: 'https://hope-product-profile-images.s3.ap-southeast-1.amazonaws.com/userprofileplaceholder.jpg',
  }
,
  {
    name: 'Test User25',
    email: 'test25@example.com',
    password: bcrypt.hashSync('1234',10),
    image: 'https://hope-product-profile-images.s3.ap-southeast-1.amazonaws.com/userprofileplaceholder.jpg',
  }
]

export default users;