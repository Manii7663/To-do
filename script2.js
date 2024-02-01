let textbox = document.getElementById("textbox");
let table = document.getElementById("mytable");
var n = 1;
arr = [];
document.addEventListener('DOMContentLoaded', () => {
    console.log("document loaded successfully");
    get_items();
});

function add_row() {
    // insert_row();
    table.innerHTML += `<tr>
    <td>${n + 1}</td>
    <td>${textbox.value}</td>
    </tr>`
    n++;
    arr.push([n,textbox.value])
    textbox.value="";
}

function display()
{
    console.log(arr.length);
    const storedItems = JSON.parse(localStorage.getItem("table_item"));
    console.log(storedItems.length)
}

function get_items()
{
    const storedItems = JSON.parse(localStorage.getItem("table_item"));
    console.log(storedItems.length)
    for(let i=0;i<storedItems.length;i++)
    {
        table.innerHTML += `<tr>
    <td>${storedItems[i][0]}</td>
    <td>${storedItems[i][1]}</td>
    </tr>`
    }
}

function appendToStorage(table_item, arr){
    var old = JSON.parse(localStorage.getItem("table_item"));
    arr=old.cocat(arr);
    localStorage.setItem("table_item",JSON.stringify(arr));
};

window.addEventListener('beforeunload', function (e) {
    appendToStorage(table_item,arr);
});

