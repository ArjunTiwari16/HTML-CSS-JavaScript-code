/*For a given array with marks of student -> [85,97,44,37,76,60]
  Find the average marks of entire class.*/

  let totalmarks = 0;
  let marks = [85,97,44,37,76,60];
  for(let i=0;i<marks.length;i++){
    totalmarks += marks[i];
  }
  let averagemarks = totalmarks/marks.length;
  console.log("Average marks of entire class is",averagemarks);