const REACT_APP_NOT_SECRET_CODE = process.env.REACT_APP_NOT_SECRET_CODE  

export const sendEmail = (email) => {
  console.warn('email', email)
  console.warn('env', REACT_APP_NOT_SECRET_CODE)
}