let data = fetch("https://api.github.com/users");
// getting promise in data
// printing the promiss
console.log(data);
// converting promiss to response using then()
// by the arrow function to convert theresponse into array[]
data.then((m) => {
  // call the json() to make the key and value as non stringfy values before that json() process in the arra[] the both key and value will be stringfy formate
  let finalData = m.json();
  console.log(m);
  finalData.then((y) => {
    // again we the json() returned values converting the key and values into an array[]
    console.log(y);
    let section = document.getElementById("section");
    y.map((m) => {
      section.innerHTML += `
            <div class="card">
                <section class="cont">
                    <img src="${m.avatar_url}">
                    <div class="container">
                        <aside><b>${m.login}</b></aside>
                        <p><a href="${m.url}">${m.url}</a></p>
                    </div>
                    <div class="line"></div>
                </section>
            </div>
            `;
    });
  });
});
