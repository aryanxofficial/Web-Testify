const count=1;
function createtest() {
    
    var body = document.getElementsByTagName("body")[0];
    var table = document.createElement("table");
    var tr1 = document.createElement("tr");
    
    const headings = ["Test", "Element", "Action","Remove"];

    for (let i = 0; i < headings.length; i++)
    {
        var th = document.createElement("th");
        var thText = document.createTextNode(headings[i]);
        th.appendChild(thText);
        tr1.appendChild(th);
    }

    var tr2 = document.createElement("tr");
    
    var td1 = document.createElement("td");
    var tdText1 = document.createTextNode("Test "+count);
    td1.appendChild(tdText1);
    tr2.appendChild(td1);

    var td2 = document.createElement("td");
    td2.insertAdjacentHTML(
        "beforeend",
        "<input type='file' id='file' onchange='add_ele()' value='Choose Element'>"
    );
    tr2.appendChild(td2);

    body.appendChild(table); 
    table.appendChild(tr1);
    table.appendChild(tr2);
}

function add_ele(){

    const fileInput = document.getElementById('file');
    var tdElement = fileInput.parentNode;
    tdElement.removeChild(fileInput);
    const selectedFile = fileInput.files[0];
    var img=document.createElement("img");
    img.src="web_elements/"+selectedFile.name;
    tdElement.appendChild(img);

}