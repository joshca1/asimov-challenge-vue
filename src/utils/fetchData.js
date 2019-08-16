export const fetchPostData = (
  url = 'https://dry-sea-37886.herokuapp.com/api/v1/',
  unparsedBody
) => {
  return fetch(url, {
    method: 'POST',
    mode: 'cors',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(unparsedBody)
  }).then(res => {
    return res.json()
  })
}

export const fetchGetData = (
  url = 'https://dry-sea-37886.herokuapp.com/api/v1/'
) => {
  return fetch(url, {
    method: 'GET',
    mode: 'cors',
    headers: { 'Content-Type': 'application/json' }
  }).then(response => {
    return response.json()
  })
}
