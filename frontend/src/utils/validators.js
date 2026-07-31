export const validators = {
  email: (email) => {
    const re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email);
  },
  
  password: (password) => {
    return password.length >= 8;
  },
  
  username: (username) => {
    return username.length >= 3 && username.length <= 30;
  },
  
  courseTitle: (title) => {
    return title.length >= 3 && title.length <= 100;
  },
  
  courseDescription: (description) => {
    return description.length >= 10 && description.length <= 1000;
  },
  
  price: (price) => {
    return price >= 0;
  },
  
  rating: (rating) => {
    return rating >= 1 && rating <= 5;
  }
};

export const validateForm = (data, rules) => {
  const errors = {};
  
  for (const [field, rule] of Object.entries(rules)) {
    const value = data[field];
    const isValid = validators[rule](value);
    
    if (!isValid) {
      errors[field] = `Invalid ${field}`;
    }
  }
  
  return errors;
};