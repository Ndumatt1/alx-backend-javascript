export default function handleResponseFromAPI(promise) {
  return new Promise((resolve, reject) => {
    if (promise) {
      resolve(promise);
      // console.log('Got a response from the API');
    } else {
      reject(new Error());
    }
  }).then(() => ({ status: 200, body: 'success' }))
    .catch((err) => err)
    .finally(() => {
      console.log('Got a response from the API');
    });
}
