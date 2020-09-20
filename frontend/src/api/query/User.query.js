export const LOGIN = {
  query: `
  query Login($email: String!, $password: String!){
    login(email: $email, password: $password){
      userId
      token
      tokenExpiration
    }
  }
  `,
};
