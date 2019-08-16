export const fetchPostData = (url, unparsedBody) => {
  return fetch('https://dry-sea-37886.herokuapp.com/api/v1/bookings', {
    method: 'POST',
    mode: 'cors',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(unparsedBody)
  }).then(res => {
    return res.json()
  })
}

export const fetchGetData = url => {
  return fetch('https://dry-sea-37886.herokuapp.com/api/v1/bookings', {
    method: 'GET',
    mode: 'cors',
    headers: { 'Content-Type': 'application/json' }
  }).then(response => {
    return response.json()
  })
}
