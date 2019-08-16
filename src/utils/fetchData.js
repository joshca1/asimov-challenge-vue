export const fetchPostData = (url, unparsedBody) => {
  return fetch(url, {
    method: 'POST',
    mode: 'cors',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(unparsedBody)
  }).then(res => {
    return res.json()
  })
}

export const fetchGetData = url => {
  return fetch(url, {
    method: 'GET',
    mode: 'cors',
    headers: { 'Content-Type': 'application/json' }
  }).then(response => {
    return response.json()
  })
}
