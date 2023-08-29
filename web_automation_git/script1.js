var count=0;
var tests={};
function createtest() {
    
    count++;
    var body = document.getElementsByTagName("body")[0];
    
    body.insertAdjacentHTML(
        "beforeend",
        "<table> <tr> <th>Test</th> <th>Element</th> <th>Action</th> <th>Remove</th> </tr> </table>"
    );
    addrow();

    document.getElementById("add-row-button").style.display="inline-block";
    document.getElementById("add-row-button").innerHTML="Add Test "+count+" Row";

    document.getElementById("add-test-button").style.display="inline-block";
    document.getElementById("add-test-button").innerHTML="Add Test";

}
function addrow()
{
    var tr = document.createElement("tr");

    var td1 = document.createElement("td");
    var tdText1 = document.createTextNode("Test "+count);
    td1.appendChild(tdText1);

    var td2 = document.createElement("td");
    td2.insertAdjacentHTML(
        "beforeend",
        "<input type='file' id='file' onchange='addelementimg(this.parentNode)' value='Choose Element'>"
    );

    var td3 = document.createElement("td");
    td3.insertAdjacentHTML(
        "beforeend",
        "<select id='action-select' onchange='action(this,this.parentNode)'><option value='click'>Click</option><option value='clickType'>ClickType</option></select>"
    );
    td3.insertAdjacentHTML(
        "beforeend",
        "<input style='display:none;' type='text' class='action-value' placeholder='Value' value=''>"
    );

    var td4 = document.createElement("td");
    td4.insertAdjacentHTML(
        "beforeend",
        "<button id='delete-button' onclick='deleterow(this.parentNode)'><i class='fa fa-trash'></i></button>"
    );

    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);

    const tab = document.getElementsByTagName("table")[count-1];
    tab.appendChild(tr);

}
function addelementimg(parentele){

    var fileInput = parentele.firstElementChild;
    var tdElement = fileInput.parentNode;
    tdElement.removeChild(fileInput);
    var selectedFile = fileInput.files[0];
    var img=document.createElement("img");
    img.src="Images/"+selectedFile.name;
    tdElement.appendChild(img);
}
function action(currentele,parentele)
{
      if(currentele.options[currentele.selectedIndex].text=="ClickType")
      {
        parentele.children[1].style.display="block";
      }
      else
      {
        parentele.children[1].style.display="none";
      }
    
}
function deleterow(parentele)
{
    var tab=parentele.parentNode.parentNode;
    var tab_row=parentele.parentNode;
    tab.removeChild(tab_row);
}

function addtesttofile()
{
    const fileInp = document.getElementsByTagName("img");
    const value = document.getElementsByClassName("action-value")
    for (let i = 0; i < fileInp.length; i++)
    {
       var imgpath=fileInp[i].src;
       var imgname=imgpath.substring(imgpath.lastIndexOf("/"),imgpath.lastIndexOf("."));
       if(value[i].value=="")
         var actionvalue="click";
       else
         var actionvalue="clickType("+value[i].value+")";
       tests[imgname]=actionvalue;
    }
    var jdata=JSON.stringify(tests);
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
             alert(this.responseText);
            }
    };
    xmlhttp.open("POST", "createfile.php");
    xmlhttp.send(jdata);
}