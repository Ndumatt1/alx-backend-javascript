export default function handleResponseFromAPI(promise) {
  return new Promise((resolve, reject) => {
    if (promise) {
      resolve(promise);
      console.log('Got a response from the API');
    } else {
      reject(new Error());
    }
  });
}
