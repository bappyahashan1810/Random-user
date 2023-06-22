const loadData = () => {
    fetch('https://randomuser.me/api/?results=20')
        .then(res => res.json())
        .then(data => displayRandomUser(data.results))
}
function displayRandomUser(data) {
    const userId = document.getElementById('user-id');
    console.log(data)
    data.forEach(x => {
        const div = document.createElement('div');
        div.classList.add('user');
        div.innerHTML = `
        <img src = '${x.picture.medium} '>
        <h3> first name: ${x.name.first} last name: ${x.name.last}</h3>
        <p> location: ${x.location.city}, country: ${x.location.country} </p>
        <i> cell : ${x.phone} , Email: ${x.email}</i>

        
        `;
        userId.appendChild(div);
    })
}

loadData();