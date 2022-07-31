var api = 'https://jsonplaceholder.typicode.com/todos'
fetch(api)
    .then((res) => {
        return res.json()
    })
    .then(data  => {
    var htmls = data.map((post) => {
        return `
        <li>
            <h3>
            ${post.id}
            ${post.title}
            </h3>
        </li>
        `
    })
    var html = htmls.join('');
    document.getElementById("post").innerHTML = html;
    })
