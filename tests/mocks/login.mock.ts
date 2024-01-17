const validPassword = 'ch4ng3m3';
const noEmailLoginBody = { email: '', password: validPassword };

const validLogin = { username: 'Hagar',
  password: 'terrível' };


const existingUser = { 
  id: 1,
  username: 'Hagar',
  vocation: 'Guerreiro',
  level: 10,
  password: '$2a$10$h3UyDH7DacXnNA6WTINJW.NhP.DSwHqO2Hjga.PVFp3Jm015//A..'
};


export default {
  noEmailLoginBody,
  existingUser,
  validLogin,
};