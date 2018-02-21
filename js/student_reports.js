var HTML = '';

function print(message) {
  var outputDIV = document.getElementById('output');
  outputDIV.innerHTML = message;
}

print("test");



for (i=0;i<students.length;i+=1) {

  HTML += "<h2>Student" + ": " + students[i].name + "</h2>";

  for (var key in students[i]) {
    if (key != "name") {
      HTML += "<h3>" + key + ": " + students[i][key] + "</h3>";
    }
  }
}


print(HTML);
