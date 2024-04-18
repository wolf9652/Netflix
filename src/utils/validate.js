

export const validate = (email,password,confirm=null,name=null) => {
  const isEmail = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);
  const isPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
  
  if(!isEmail) return "Email is not valid"
  if(!isPassword) return "Password is not valid"
  if(confirm != null || name !== null){
      const isName = /\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/.test(name)
      if(!isName) return "Name is not Valid"
      if(confirm !== password) return "Password is not same"
  }

  return null;
}

