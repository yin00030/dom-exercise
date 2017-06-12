/*global console*/
//Task 1
//
//1.Access HTML element with id tag-line.
//2.Access all headings that belong to div with the class name bg-main-content.
//3.Create the variable collect and assign it with content of tag-line.
//4.Loop through the array of headings and append the content of each heading to variable collect
//5.After the loop, use alert to print collect
//Printed output:

// 1.//
var tagline = document.getElementById("tag-line");
console.log("tagline: ", tagline);
// 2.//
var headings = document.querySelectorAll(".bg-main-content h2");
console.log("headings: ", headings);
// 3.//
var collect = tagline.innerHTML.innerHTML + "\n-------------------\n\n";
console.log("collect: ", collect);

//4.//
var i;

for (i = 0; i < headings.length; i += 1) {
collect += "\n" +headings[i].innerHTML:

}
    
    //print your collect here
alert(collect);

/*Task 2

Access 13th div with class name box that belongs to div with the class name bg-main-content. 
You can name the variable when_to_launch.
Use property children to "scoop" in array all HTML elements that belong to that div.
Create the variable collect and assign it with content of heading that belongs to gotten array.
Loop through the array starting with the second array element (the first one is heading and it is already assigned to variable collect) and append the content of array elements to variable collect.
After the loop, use alert to print collect*/

var boxes = document.querySelectorAll(".bg-mian-content .box");

var when_to_launch = boxes[12];

var children = when_to_launch.children;

var collect = children[0] .innerHTML + "\n-------------------------";

for(var i =1; i<children.length; i+=1) {
  collect += "\n\n" + children[i].innerHTML;
  }
  alert(collect);
