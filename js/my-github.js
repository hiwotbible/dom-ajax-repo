fetch("https://api.github.com/users/hiwotbible/repos")
  .then(function (data) {
    // Necessary line to parse the JSON (we'll cover this
    // in more detail in upcoming weeks)
    // Returns another Promisegithu
    return data.json();
  })
  .then(function (repos) {
    // 1. we gate the list
    var reposList = document.querySelector("#repos-list");
    repos.forEach(function (repo) {
      // 2. we create the list item
      var listItem = document.createElement("li");

      // 3. we put the repo name to list item
      listItem.appendChild(document.createTextNode(repo.name))
      console.log(repo.name)
      //4.put  list item in to list
      reposList.appendChild(listItem)

    });
  });

// Do something with the json response object"")
