import users from '../mock/users.json';

const authService = {
  login: (email, password) => {
    const user = users.find(u => u.email === email && u.password === password);
    return user ? 'mock-jwt-token' : null;
  },
  register: (email, password) => {
    users.push({ email, password });
  }
};

export default authService;
