import {API_URL} from '../Constants';

export default async (query: string) => {
  return new Promise((resolve, reject) => {
    fetch(API_URL + query)
      .then(response => response.json())
      .then(responseAsJson => {
        if (responseAsJson && responseAsJson.errors) {
          reject({done: false, data: responseAsJson.errors});
        } else {
          resolve({done: true, data: responseAsJson});
        }
      })
      .catch(err => {
        reject({done: false, data: [{message: err.message}]});
      });
  });
};
