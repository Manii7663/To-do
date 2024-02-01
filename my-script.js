let textbox = document.getElementById("textbox");
let table = document.getElementById("mytable");
var n = 1;
arr = [];
let tbody = table.getElementsByTagName("tbody")[0];

document.addEventListener('DOMContentLoaded', () => {
    console.log("document loaded successfully");
    get_items();    
});

function add_row() {
    // insert_row();
    console.log("Adding new item");
    tbody.innerHTML += `<tr>
    <td>${n + 1}</td>
    <td>${textbox.value}</td>
    <td><button type="button"  class="btn btn-outline-danger" onclick="deleteRow(this)"><i class="bi bi-trash"></i>  &nbsp</button> <button type="button" class="btn btn-outline-primary " onclick="display()"><i class="bi bi-pencil-square"></i></button></td>
    </tr>`
    n++;
    temp=[]
    temp.push([n,textbox.value])
    console.log("total in arr",arr.length);
    textbox.value="";
    appendToStorage(temp);
    
}

function get_items()
{
    const storedItems = JSON.parse(localStorage.getItem("table_item"));
    if(storedItems != null)
        console.log(storedItems.length)
    for(let i=0;i<storedItems.length;i++)
    {
        tbody.innerHTML += `<tr">
    <td>${storedItems[i][0]}</td>
    <td>${storedItems[i][1]}</td>
    <td><button type="button"  class="btn btn-outline-danger" onclick="deleteRow(this)"><i class="bi bi-trash"></i>  &nbsp</button> <button type="button" class="btn btn-outline-primary " onclick="display()"><i class="bi bi-pencil-square"></i></button></td>
    </tr>`
    }
}

function appendToStorage(temp){
    alert("Hello! appendstorage function");
    var old = JSON.parse(localStorage.getItem("table_item"));
    if(old != null)
        temp=old.concat(temp);
    localStorage.setItem("table_item",JSON.stringify(temp));
};

function deleteRow(button) {
    var row = button.parentNode.parentNode;
    
    var tbody = row.parentNode;
    console.log("deleting row",row.rowIndex);

  
    // Delete the row
    tbody.removeChild(row);
  }
  

function deleteRow(btn) {
    // Get the row containing the button
    
    var row = btn.parentNode.parentNode;
    
    // Get the table to which the row belongs
    var table = row.parentNode;
    
    // Delete the row
    table.deleteRow(row.rowIndex-1);
}

