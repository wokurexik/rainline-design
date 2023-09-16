import userData from '../data/user_data.json'


export function login({email, password}) {
    const delay = (0.7 + Math.random() * 2) * 1000;

    const UserPass0 = userData[0].password
    const UserEmail0 = userData[0].email

    return new Promise((resolve, reject) => {
        setTimeout(function () {
            
           if (password === UserPass0 && email === UserEmail0) {
            resolve();
           } else {
             reject(new Error("invalid email or password"))
             console.log(UserPass0)
             console.log(UserEmail0)
           }
        }, delay);
})
}

export function SignUp({email, password, user}) {
  const delay = (0.7 + Math.random() * 2) * 1000;

  const UserPass0 = userData[0].password
  const UserEmail0 = userData[0].email
  const UserName0 = userData[0].user

  return new Promise((resolve, reject) => {
      setTimeout(function () {
          
         if (password === UserPass0 && email === UserEmail0 && user === UserName0 ) {
          resolve()
         } else {
           reject(new Error("Sorry, we cannot Sign you right now"))
           console.log(UserPass0)
           console.log(UserEmail0)
           console.log(UserName0)
         }
      }, delay);
})
}