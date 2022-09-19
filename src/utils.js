export async function verifyLogin({ username, password }) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (username === 'user1' && password === 'user1') {
        resolve();
      } else if (username === 'hari' && password === 'hari') {
        resolve();
      }else if (username === 'user2' && password === 'user2') {
        resolve();
      }
      else{
        reject();
      }
    }, 1000);
  });
}
