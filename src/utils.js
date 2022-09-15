export async function verifyLogin({ username, password }) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (username === 'hari' && password === 'hari') {
        resolve();
      } else {
        reject();
      }
    }, 1000);
  });
}
