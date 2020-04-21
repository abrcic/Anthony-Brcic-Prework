//Loops2 Activity


//const name1 = prompt('enter a student name');
//const name2 = prompt('enter a student name');
//const name3 = prompt('enter a student name');


//const studentList = [Anthony, Gabby, Jeff];

//studentList.push(name1);
//studentList.push(name2);
//studentList.push(name3);
//studentList.push(name4);
//studentList.push(name5);
//studentList.push(name6);


const nameList = ['Anthony', 'Gabby', 'Jeff'];

for (let i = 0; i < 3; i++){
  const name = prompt('Enter a name');
  nameList.push(name);
}

for (let i = 0; i < nameList.length; i++){
  const name = nameList[i];
  alert(name);
}