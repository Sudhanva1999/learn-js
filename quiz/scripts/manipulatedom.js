window.onload = function() {
  document.getElementById('addTableBtn').addEventListener('click', addTable);
}

function createTRNode(colNodes) {
  let trNode = document.createElement("tr");
  colNodes.forEach(function(colNode) {
    trNode.appendChild(colNode);
  })
  return trNode;
}

function createTDNode(childNode, id) {
  let tdNode = document.createElement("td");
  tdNode.appendChild(childNode);
  tdNode.setAttribute('id', id);
  return tdNode;
}

function createTxtNode(txt) {
  let txtNode = document.createTextNode(txt);
  return txtNode;
}

function createEditButton(id) {
  let buttonElement = document.createElement("button");
  buttonElement.appendChild(document.createTextNode('Edit Text'));
  buttonElement.setAttribute('id', id);
  return buttonElement;
}

function addTable() {
  const tableNode = document.createElement("table");
  for(let i = 0; i < 3; i++) {
    let col1 = createTDNode(createTxtNode("Cell (" + i + ", 0)"),i+"_td");
    let col2 = createTDNode(createEditButton(i+'_button'));
    tableNode.appendChild(createTRNode([col1, col2]));
  }
  document.getElementById("root").appendChild(tableNode);
  // Add event listeners
  for(let i = 0; i < 3; i++) {
    let tdNode = document.getElementById(i+"_td");
    console.log(tdNode);
    document.getElementById(i+'_button').addEventListener('click', function(e) {
  
    let inputTxt = document.createElement("input");
    inputTxt.type = 'text';
    inputTxt.placeholder = 'Enter cell(x,y)...';
    tdNode.replaceChild(inputTxt, tdNode.childNodes[0]);
    
    });
  }
  
}
