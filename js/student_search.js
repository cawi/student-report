var HTML = '';
var search = '';
var student;
var studentFoundvar = false;
var exit = false;
var alertShown = false;

function print(message) {
  var outputDIV = document.getElementById('output');
  outputDIV.innerHTML = message;
}

function getStudentReport(student) {
  var report = "<h2>Student" + ": " + student.name + "</h2>";
  for (var key in student) {
    if (key != "name") {
      report += "<h3>" + key + ": " + student[key] + "</h3>";
    }
  }
  return report;
}

function studentFound(student) {
  HTML += getStudentReport(student);
  studentFoundvar = true;
  if (alertShown === false)
    alert("Student named " + search + " was found.");
  alertShown = true;
  exit = true;
}

while (exit == false) {
  //Prompt for action
  search = prompt("Search student records: type a name[Jody] (or type 'quit' to end)");
  //Exit on quit request
  if (search === null || search.toLowerCase() == "quit") {
    console.log("Program exited");
    break;
  }
  studentFoundvar = false;
  //Loop through student list
  for (i=0;i<students.length;i+=1) {
    student = students[i];
    //Student found
    if (students[i].name === search) {
      studentFound(student);
    }
  print(HTML);
  }
  if (studentFoundvar === false) {
    alert("No student named " + search + " was found.");
  }
}
