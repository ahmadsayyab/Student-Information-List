
function getAndupdate()
{
  

  sname = document.getElementById("name").value;
  fname = document.getElementById("Fname").value;
  cont = document.getElementById("contact").value;
  addr = document.getElementById("address").value;


  if (localStorage.getItem("itemsJson") == null) 
  {
    itemJsonArray = [];
    itemJsonArray.push([sname, fname, cont, addr]);
    localStorage.setItem("itemsJson", JSON.stringify(itemJsonArray));
  } 

  else 
  {
    itemJsonArrayStr = localStorage.getItem("itemsJson");
    itemJsonArray = JSON.parse(itemJsonArrayStr);
    itemJsonArray.push([sname, fname, cont, addr]);
    localStorage.setItem("itemsJson", JSON.stringify(itemJsonArray));
  }

  update();

}

function update()
{
  console.log("updaing file....");

  sname = document.getElementById("name").value;
  fname = document.getElementById("Fname").value;
  cont = document.getElementById("contact").value;
  addr = document.getElementById("address").value;

  if (localStorage.getItem("itemsJson") == null) 
  {
    itemJsonArray = [];
   localStorage.setItem("itemsJson", JSON.stringify(itemJsonArray));
  } 

  else 
  {
    itemJsonArrayStr = localStorage.getItem("itemsJson");
    itemJsonArray = JSON.parse(itemJsonArrayStr);
   
    
  }

  //populate the table
  
  let tablebody = document.getElementById("tablebody");
          let str = "";
          itemJsonArray.forEach((element, index) => {
              str += `
              <tr>
              <th scope="row">${index + 1}</th>
              <td>${element[0]}</td>
              <td>${element[1]}</td> 
              <td>${element[2]}</td> 
              <td>${element[3]}</td> 
              <td><button class="btn btn-sm btn-danger" onclick= "Deletee(${index})")">Delete</button></td> 
              </tr>`; 
          });
          tablebody.innerHTML = str;
}
add = document.getElementById("add");
add.addEventListener("click", getAndupdate);
update();

//delte any record from the list
function Deletee(itemindex)
{
  
  if(confirm("Are you sure want to delete this record?"))
  {
    console.log("Delete", itemindex);
  itemJsonArrayStr = localStorage.getItem("itemsJson");
  itemJsonArray = JSON.parse(itemJsonArrayStr);

  //delete item
  itemJsonArray.splice(itemindex, 1);
  localStorage.setItem("itemsJson", JSON.stringify(itemJsonArray));
  update();
}


}

//clear the whole list 
function clearlist()
{

  if(confirm("Are you sure want to clear the list?"))
  {
    console.log("clearing the list");
    localStorage.clear();
    update();
  }
}


//update any specific record from the list of the students information

function EditRow()
{
  var table = document.getElementById("table").rIndex;
  
  for(var i =1; i<table.rows.length; i++)
  {
    table.rows[i].onclick = function()
    {
      rIndex = this.rowIndex;
      console.log(rIndex);

      sname = document.getElementById("name").value = this.cells[1].innerHTML;
    fname = document.getElementById("Fname").value = this.cells[2].innerHTML;
    cont = document.getElementById("contact").value = this.cells[3].innerHTML;
    addr = document.getElementById("address").value = this.cells[4].innerHTML;
    
    };
  }

  function editTableDisplay()
  {
    document.querySelector(".editTable").setAttribute('style', 'display: block;')
  }
  
    
   
}
