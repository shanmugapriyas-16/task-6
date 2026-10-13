let student = true;
while (student){
  let name=prompt("enter student's name:");
  let mark1=Number(prompt("enter mark 1:"));
  let mark2=Number(prompt("enter mark 2:"));
  let mark3=Number(prompt("enter mark 3:"));

  if(
    mark1<0 || mark1>100 || mark2<0 || mark2>100 || mark3<0 || mark3>100 ){
      alert("error! marks must be between 0 and 100");
    }else{
      function calculateTotal(mark1,mark2,mark3){
        return mark1+mark2+mark3;
      }
      function calculateAverage(total){
        return total / 3;
      }
      let  total = calculateTotal(mark1,mark2,mark3);
      let average = calculateAverage(total);
    
      let grade;
    if(average>=90){
      grade="A";
    }else if(average>=75){
      grade="B";
    }else if(average>=50){
      grade="C";
    }else{
      grade="F";
    }

    alert(
      "Student Name :" +name+
      "\nTotal mark :" +total+
      "\naverage : "+average +
      "\nGrade : "+grade    );

    }
}

alert("Thank You");