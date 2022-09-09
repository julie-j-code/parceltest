const searchInput = document.querySelector("#searchInput")
const searchResult = document.querySelector("#users_container")
let dataArray;

async function getUsers() {

    const res = await fetch("https://randomuser.me/api/?nat=fr&results=50")

    const { results } = await res.json()
    console.log(results);

    dataArray = orderList(results)
    //   console.log(dataArray);
    createUserList(dataArray)
}

function orderList(data) {

    const orderedData = data.sort((a, b) => {
        if (a.name.last.toLowerCase() < b.name.last.toLowerCase()) {
            return -1;
        }
        if (a.name.last.toLowerCase() > b.name.last.toLowerCase()) {
            return 1;
        }
        return 0;
    })

    return orderedData;
}


function createUserList(usersList) {

    usersList.forEach(user => {
        // console.log(user);

        const listItem = document.createElement("div");
        listItem.setAttribute("class", "row");
        listItem.innerHTML = `<div class="col">${user.name.last}</div><div class="col">${user.name.first}</div><div class="col">${user.email}</div><div class="col">${user.phone}</div>`;
        console.log(searchResult);
        searchResult.appendChild(listItem);
    })

}


searchInput.addEventListener("input", filterData)

function filterData(e) {

    searchResult.innerHTML = ""

    const searchedWord = e.target.value.toLowerCase().replace(/\s/g, "");

    const filteredDataArray = dataArray.filter(el =>
        el.name.first.toLowerCase().includes(searchedWord) ||
        el.name.last.toLowerCase().includes(searchedWord) ||
        `${el.name.last + el.name.first}`.toLowerCase().replace(/\s/g, "").includes(searchedWord) ||
        `${el.name.first + el.name.last}`.toLowerCase().replace(/\s/g, "").includes(searchedWord)
    )
    // on recrée la liste avec cette fois dataArray filtré
    createUserList(filteredDataArray)
}

const searchUsers = {
    getUsers, dataArray, orderList, createUserList
}

export default searchUsers;