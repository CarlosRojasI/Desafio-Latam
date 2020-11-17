
// paso 2
async function getData () {
    try {
    const url = 'https://jsonplaceholder.typicode.com/photos';
    const response = await fetch (url)
    const data = await response.json()
    return data
} catch (e) {
    return e
}

getData().then((data)=> console.log(data))
