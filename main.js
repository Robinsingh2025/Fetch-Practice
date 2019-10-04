const ul = document.getElementById('authors');
const url = 'https://randomuser.me/api/?results=10';
function createNode(element) {
  return document.createElement(element); // Create the type of element you pass in the parameters
}

function append(parent, el) {
  return parent.appendChild(el); // Append the second parameter(element) to the first one
}

fetch(url)
  .then(resp => resp.json())
  .then(data => {
    let authors = data.results;
    return authors.map(author => {
      let li = createNode('li'),
        img = createNode('img'),
        span = createNode('span');

      img.src = author.picture.medium;
      span.innerHTML = ` ${author.name.title} ${author.name.first}${author.name.last}`;
      append(li, img);
      append(li, span);
      append(ul, li);
    });
  });
