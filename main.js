var name_of_the_students =[];

function submit(){
    var display_name_of_the_students = [];
    for(var j = 1; j<=4; j++){
        var name_of_student=document.getElementById("name_of_the_student_"+j).value;
        console.log(name_of_student);
        name_of_the_students.push(name_of_student);
    }
    console.log(name_of_the_students);
    var length_of_name_of_the_students = name_of_the_students.length;

    console.log(length_of_name_of_the_students);

    for(var k = 0; k < length_of_name_of_the_students; k++){
        display_name_of_the_students.push("<h4> NAME  -  " + name_of_the_students[k]  +  "</h4>");
        console.log(display_name_of_the_students);
    }
    console.log(display_name_of_the_students);
    document.getElementById("display_name_with_commas").innerHTML=display_name_of_the_students;

    var remove_commas = display_name_of_the_students.join(" ");
    console.log(remove_commas);
    document.getElementById("display_name_without_commas").innerHTML= remove_commas;

    document.getElementById("submit_button").style.display ="none";
    document.getElementById("sort_button").style.display ="inline-block";
}
function sorting(){
    name_of_the_students.sort();
    console.log(name_of_the_students);
    var display_name_of_the_students_sort = [];
    var length_of_name_of_the_students = name_of_the_students.length;

    console.log(length_of_name_of_the_students);

    for(var k = 0; k < length_of_name_of_the_students; k++){
        display_name_of_the_students_sort.push("<h4> NAME  -  " + name_of_the_students[k]  +  "</h4>");
        console.log(display_name_of_the_students_sort);
    }
    console.log(display_name_of_the_students_sort);
    document.getElementById("display_name_with_commas").innerHTML=display_name_of_the_students_sort;

    var remove_commas = display_name_of_the_students_sort.join(" ");
    console.log(remove_commas);
    document.getElementById("display_name_without_commas").innerHTML= remove_commas;
    document.getElementById("sort_button").style.display ="none";
}
function newdate(){
    document.getElementById("display_name_without_commas").innerHTML="<h1>" + name_of_the_students + "</h1>";
    
 }