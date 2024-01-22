let data = fetch("https://api.github.com/users");
console.log(data);
data.then((m) => {
  console.log(m);
  let finalData = m.json();
  console.log(finalData);
  finalData.then((y) => {
    console.log(y);
    y.map((m) => {
      console.log(m.login);
    });
  });
  finalData.then((y) => {
    console.log(y);
    let tbody = document.getElementById("tbody");
    console.log(tbody);
    y.map((m) => {
      // console.log(m.login);
      tbody.innerHTML += `
      <tr>
        <td>${m.id}</td>
        <td>${m.login}</td>
        <td><a href=${m.url}>${m.url}</a></td>
        <td><img src=${m.avatar_url}></td>
      </tr>
        `;
    });
  });
});
