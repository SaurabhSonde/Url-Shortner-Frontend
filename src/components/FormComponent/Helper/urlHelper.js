const API = process.env.REACT_APP_BACKEND;

export const shortlink = (originalUrl) => {
  return fetch(`${API}/shorten`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(originalUrl),
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};
